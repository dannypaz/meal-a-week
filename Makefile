.PHONY: learn deps start

deps:
	npm i

start:
	node ./src/app.js

learn:
	./node_modules/.bin/learnyoureact
