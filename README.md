# Meal A Week

# TODO - Check out blitz (performance for application)

### Before you begin

    npm i

### Start

    npm start

### Conventions

Use `const` for all constants, use `var` for all variables, use `let` inside functions.

### ENV

PORT
WEB_CONCURRENCY
FIREBASE_URL

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
