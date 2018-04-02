require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const next = require('next');
const firebaseAdmin = require('firebase-admin');
const firebaseCredentials = require('./firebase/alc-sms-firebase-adminsdk.json');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const routes = require('./routes');
const handle = app.getRequestHandler();

const firebase = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseCredentials),
  databaseURL: process.env.FIREBASE_DATABASE_URL
}, 'server');

app.prepare()
  .then(() => {

    // Create and setup server
    const server = express();
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: true
    }));

    // Session Middleware
    server.use(session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({path: '/tmp/sessions', secret: 'geheimnis'}),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 } // week
    }));

    server.use((req, res, next) => {
      req.firebaseServer = firebase;
      next();
    });

    // Handle requests to the API route
    server.use('/api/', routes);

    // Server Side Support for Clean URLs
    server.get('/channel/:id', (request, response) => {
      const page = '/channel';
      const queryParams = {
        title: request.params.title
      };
      app.render(request, response, page, queryParams);
    });

    // Handle App Requests
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Start custom server
    server.listen(port, (error) => {
      if (error) {
        throw error;
      }
      console.log(`> Ready on http://localhost:${port}`);
    });
  });