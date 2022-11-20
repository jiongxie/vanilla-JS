// array
const array1 = [1,2,3,4,5,6,7,8];
console.log(array1);

let array2 = new Array(8);
console.log(array2);

array = Array.from({
	0 : 'h',
	1 : 'e',
	2 : 'l',
	3 : 'l',
	4 : 'o',
	5 : 'Y',
	6 : 'O',
	7 : '!',
	length: 8,
});
console.log(array);


// push, unshift, pop, shift, splice, slice, concat, reverse, fill, join, isArray, indexOf, includes

// map array
console.log('---map array---');
const arr = [1, 2, 3, 4, 5];
rs1 = arr.map((item) => item * 2);
console.log(rs1);

