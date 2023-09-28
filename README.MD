# dirname-for-module

## Install

```sh
npm install @kreisler/dirname-for-module
```

## Usage

```js
import { __dirname } from "@kreisler/dirname-for-module";
// or
import * as dfm from "helper-js";
console.log(dfm.__dirname); // outputs "/path/to/the"
```

## API

[Type Document](https://itskreisler.github.io/dirname-for-module/)

## Include in browser directly

Import `dist/index.iife.js`. Access functions by global variable `dfm`. e.g.: `dfm.__dirname`.
