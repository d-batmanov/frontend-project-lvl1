#Makefile

install:
	npm install

start:
	!/bin/brain-games.js node

lint:
	npx eslint .

publish:
	npm publish --dry-run
