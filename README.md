# Meal A Week

TODO - Check out blitz (performance for application)
Using AirBnB Javascript [Best Practices](https://github.com/airbnb/javascript)... (I know that these all don't apply to node, but I decided to use that as a benchmark anyways)


### Getting Started

We are currently using [throng](https://github.com/hunterloftis/throng) for our worker-manager.

    npm i
    npm start

### Conventions

Use `const` for all constants, use `var` for all variables, use `let` inside functions.

### ENV

PORT
WEB_CONCURRENCY
FIREBASE_URL

### Development

We are using `gulp` and `gulp-eslint`.

### Deploy steps

    git push heroku master

Check if the instance is running

    heroku ps:scale web=1

View logs

    heroku logs --tail

Show dynos

    heroku ps

Setting ENV variables

    heroku config:set VAR=1
