function foo(a, b) {
  a = a === undefined ? 0 : a;
  b = b === undefined ? 0 : b;  
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b;
  return a + b;
}

console.log(foo(undefined, 5)); // 5
console.log(foo(null, 5)); // 5
console.log(foo(0, 5)); // 5