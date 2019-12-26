// datatype - Array

let superHeros = ['Iron Man', 'Thor', 'Capt. America', 'Hulk'];

console.log(superHeros);
console.log(superHeros[superHeros.length-1]);

//template string
console.log(`total ${superHeros.length} superHeros are there.` );


// some of the methods of array: 

let nums = ['one', 'two', 'three', 'four', 'five'];

//replacing the value
/* nums[1] = 'replacing';
console.log(nums); */

/* start */
// shifting array index and display the result
/* nums.shift();
console.log(nums); */

// using unshift() method to add something before the array
/* nums.unshift('before');
console.log(nums); */

/* end */
// delete last value
/* nums.pop();
console.log(nums); */

// add element at the end of the array
/* nums.push('adding at the last');
console.log(nums); */

/* middle */
nums.splice(2, 1, 'deleting ele from index value 3 and add new one')
console.log(nums);




