// arrow function
console.log('---function---');
function print1(name) {
  console.log(name);
}
print1('Brian');

console.log('---arrow function---');
const print2 = (name) => {
  console.log(name);
}
print2('Brian2');

const print3 = () => {
	console.log('Brian3');
}
print3();

const print4 = (name, age) => {
	console.log(name, age);
}
print4('Brian', 26);


// spread
const nos1 = [1,2,3,4,5,6,7];
const nos2 = [...nos1, 8];
console.log('nos1:'+ nos1);
console.log('nos2:'+ nos2);

// rest
const filter = (...args) => {
	return args.filter(el => el === 2);
}

console.log(filter(1,2,3));