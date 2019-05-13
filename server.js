const express = require('express');
const { join } = require('path');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');

const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // I18N middleware
    server.use(nextI18NextMiddleware(nextI18next));

    // service worker handler
    server.get('/service-worker.js', (req, res) => {
      const filePath = join(__dirname, '.next', 'service-worker.js');

      app.serveStatic(req, res, filePath);
    });

    // SSR support for Recipe page URL decoration
    server.get('/recipes/:slug', (req, res) => {
      const actualPage = '/recipe';

      const id = req.params.slug.split('~')[1];

      const queryParams = { id };

      app.render(req, res, actualPage, queryParams);
    });

    // SSR support for Cook-Now page URL decoration
    server.get('/cook-now/:slug', (req, res) => {
      const actualPage = '/cook-now';

      const id = req.params.slug.split('~')[1];

      const queryParams = { id };

      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on port ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
