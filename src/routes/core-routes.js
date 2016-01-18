function routes(app) {
  function home(req, res) {
    res.render('index', {});
  }
  app.get('/', home);
}

module.exports = routes;
