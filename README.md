# Synatic

<br>

### JDickinson, Aug 2022

```BASH
Webpack shell with CLI development and production builds.
React function based components with Hooks to manage state.
Presentation uses SCSS and Emotion Styled Components.
.env files are bundled.
Typescript added and configured.
Production version is built and output into dist directory.
```

<br>

## Install dependencies

```BASH
yarn (or) npm install
```

<br>

## Start development server

```BASH
yarn start (or) npm run serve
```

```JS
"scripts": {
  "start": "env-cmd -f .env.development webpack serve --mode development --open"
},

[webpack-dev-server] Hot Module Replacement enabled.
[webpack-dev-server] Live Reloading enabled.
```

### Changes trigger app to recompile

```JS
[webpack-dev-server] App updated. Recompiling...
[webpack-dev-server] App hot update...
```

<br>

## Build for production

```BASH
yarn build (or) npm run build
```

```JS
"scripts": {
  "build": "env-cmd -f .env.production webpack --mode production"
},
```
