const express = require('express');
const app = express();
const browserify = require('browserify');
const babelify = require('babelify');

const TodoBox = require('./views/index.jsx');

app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

// Add all routes to the application
//require('./routes/core-routes')(app);

app.listen(app.get('port'), () => console.log('Server started '));
