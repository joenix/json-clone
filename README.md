# json-clone

Json Clone

```bash
npm i json-clone
# or
yarn add json-clone
```

```js
import jsonClone from "json-clone";

let origin = { a: 1, b: 2, c: 2 };
let target = jsonClone(origin);

target.a = "Ace";

console.log(origin); // { a: 1, b: 2, c: 3 }
console.log(target); // { a: "Ace", b: 2, c: 3 }
```
