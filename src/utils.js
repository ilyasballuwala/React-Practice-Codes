console.log('util js running');

export const square = (x) => x*x;
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;

export { add, subtract as default };
