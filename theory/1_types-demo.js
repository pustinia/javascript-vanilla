/* [variable] */

//  case of bad practice
a = 221
b = a - 5
console.log(b)

// nomal case of variable.
// need 'let' sentence for create&init variable.
// need Semicolon at the end of line.
let c = 221;
let d = c - 5;
c = 4;
console.log (d, c);

// using const, that is not changed.
const e = 221;
const f = e - 5;
console.log (e, f);

// String
const whatString = 'Nicolas';
console.log(whatString, typeof whatString);

// boolean
const whatBoolean = false;
console.log(whatBoolean, typeof whatBoolean);

// number, whole
const whatNumber = 25;
console.log(whatNumber, typeof whatNumber);

// number, float
const whatNumberF = 1.1;
console.log(whatNumberF, typeof whatNumberF);
