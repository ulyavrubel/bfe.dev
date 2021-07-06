// 1. implement curry()
// Currying is a useful technique used in JavaScript applications.
// Please implement a curry() function, which accepts a function and return a curried one.

// function curry(func) {
//   return function(a) {
//     return function(b) {
//       return func(a, b);
//     };
//   };
// }

// const sum = (a, b) => a + b;
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2));

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function pass(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));
console.log(curriedSum(1)(2, 3));
console.log(curriedSum(1, 2, 3));
