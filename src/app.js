const throng = require('throng');
const WORKERS = process.env.WEB_CONCURRENCY || 1;
const PORT = process.env.PORT || 3000;

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {
  const express = require('express');
  const app = express();
  const options = {
    transformViews: true,
    doctype: "<!DOCTYPE html>"
  };

  app.set('port', (process.env.PORT || 3000));
  app.set('view engine', 'jsx');
  app.set('views', __dirname + '/components');
  app.engine('jsx', require('express-react-views').createEngine(options));

  // Add all routes to the application
  require('./routes/core-routes')(app);

  app.listen(PORT, onListen);

  function onListen() {
    console.log(`Server started on port ${PORT}`);
  };
};
