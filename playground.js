"use strict";

function test() {}

console.dir(test.__proto__ === Function.prototype);
console.dir(test.__proto__.__proto__ === Object.prototype);
console.dir(test.__proto__.__proto__.__proto__ === null);
