// In Js, Arrays are used to store the different types of the data and this data vary from the string - integer - float

// Spread operator is important topic in js.

let origin = [1, 2, 3, 4, 5];
let copy = origin;
copy.pop();
console.log(origin);
console.log(copy);

// In the above code, we are copying the origin array to copy array. But when we are popping the last element from the copy array, it is also removing the last element from the origin array. This is because both arrays are pointing to the same reference in memory.

// now spread operator

let orginal = [1, 2, 3, 4, 5];
let realcopy = [...orginal];
realcopy.pop();
console.log(orginal);
console.log(realcopy);
// in this the original array is not modified.