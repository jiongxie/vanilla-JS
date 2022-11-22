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

