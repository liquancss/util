## @minsk/util
A JavaScript utils lib which you can use function  like `getType`, `isObject`, `isPromise`, etc.

# Usage
## Installation(With bundler)
### 1. install dependency
```bash
npm install @minsk/util
# or yarn
yarn add @minsk/util
# or pnpm
pnpm install @minsk/util
```
## 2.1 use in esm or a bundler
```js
import {isArray} from "@minsk/util"
console.log(isArray([]))
```

## 2.2 use in node require or a bundler
```js
const {isArray} = require("@minsk/util")
console.log(isArray([]))
```

## 2.3 typescript support
- you can include this in your typescript project


## Online use(CDN)
### Example
```html
<script src="https://unpkg.com/@minsk/util/dist/util.js"></script>

<script>
    console.log(util.isArray([]))
</script>
```
## Dist File
- see all dist file in [this](./dist/)
- **`util.commmon(dev|prod).js`**
    - node require

- **`util.esm(min).js`**
    - esm environment(like rollup, webpack bundler or native node esm module)

- **`util.js`**
    - umd for util.js

- **`util.mjs`**
    - node native esm module