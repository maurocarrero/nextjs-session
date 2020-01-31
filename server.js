// server.js
const express = require('express');
const next = require('next');

const PORT = parseInt(process.env.NODE_ENV, 10) || 3000;
const DEV = process.env.NODE_ENV !== 'production';

const app = next({ dev: DEV });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Server will be declared inside the resolve block of prepare() promise
  // for being able to take advantage of Next server features.
  const server = express();

  // Use pages/index.js file when ricknmorty route is requested.
  server.get('/ricknmorty', (req, res) => {
    app.render(req, res, '/');
  });

  // Redirect to /ricknmorty route when root is requested
  server.get('/', (_, res) => {
    res.redirect(301, '/ricknmorty');
  });

  // Let NextJs handle all other routes
  server.get('/*', (req, res) => handle(req, res));

  server.listen(3000, () => {
    console.log(`Custom Next server listening on port ${PORT}`);
  });
});
