# Vite and isomorphic deps

This is a simple vite project that shows a problem with how isomorphic deps are handled.

There is a [dependency](src/node_modules/iso-dep) that overrides the imported `src/message.js` file with a `src/message.browser.js` field via the `"browser"` field in it's `package.json`.

That module is imported by [src/index.js](src/index.js) directly.

There is a small `vite.config.js` that just turns off minification to make examining the transpiled code simpler.

## Install

```console
$ git clone https://github.com/achingbrain/vite-isomorphic-dep-repro.git
$ cd vite-isomorphic-dep-repro
$ npm i
```

## Usage

Start the project:

```console
$ npm start
```

Open http://localhost:8888/ - see which version was imported:

```
iso: browser
```

Stop the project, upgrade to the latest beta

```console
$ rm -rf node_modules package-lock.json
$ npm i -D vite@3.0.0-beta.0
$ npm start
```

Open http://localhost:8888/ - see which version was imported:

```
iso: node
```
