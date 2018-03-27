const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const routes = require('./routes');
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app.prepare()
  .then(() => {

    // Create and setup server
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: true
    }));

    // Handle App Requests
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Handle requests that require SMS functions
    server.use('/sms/', routes);

    // Start custom server
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`);
    });
  });