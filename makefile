#Makefile

install:
	npm install
start:
	!/bin/brain-games.js node
publish:
	npm publish --dry-run