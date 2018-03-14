# micro-qs

微型浏览器查询字符串处理工具

分割浏览器查询字符串，不支持嵌套

使用方法:
```js
const qs = require('micro-qs');
const parse = require('micro-qs/parse'); // 提供解析函数, 未完成

console.log(qs); // { a: 'b', c: 'd' }
console.log(parse('q=w&e=r')); // { q: 'w', e: 'r' }
```
