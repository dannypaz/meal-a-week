const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/components');

const options = {
  transformViews: true,
  doctype: "<!DOCTYPE html>"
};
app.engine('jsx', require('express-react-views').createEngine(options));

// Add all routes to the application
require('./routes/core-routes')(app);

app.listen(app.get('port'), () => console.log('Server started '));
