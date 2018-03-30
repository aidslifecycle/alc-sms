require('dotenv').config();
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

    // Handle requests that require SMS functions
    server.use('/sms/', routes);

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