let array =[1,2,3,4,5];//dense 
console.log(array.length);


let array1 =[1,2,3,4,,];//sparse  let array=new Array(10);
console.log(array1.length);


// A sparse array is one in which the elements are not sequential, and they don't always start at 0.

// They are essentially Arrays with "holes", or gaps in the sequence of their indices.

// How do you get a sparse array?
"###############################################################################################################################################################"
// STEP 1

let arr = new Array(10); // array initialized with no elements
arr.length // 10

"###############################################################################################################################################################"
// STEP 2

array[1000] = 0; // Assignment adds one element 
array.length // But .length returns 1001

// The length property on an Array takes the last element's index and adds one. So if you have an array with holes between index 0 through 1000, 
//and an element at index 1001, the length will return 101, as it's the last index + 1.
"###############################################################################################################################################################"
//3

let array = [1, 2, 3, 4, 5]
delete array[0]
array.length // .length returns 5
"###############################################################################################################################################################"

//4
 // You have created an array with nothing but holes
console.log([1,2,3,4,,5].length) // 6