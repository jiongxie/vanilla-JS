// size
console.log("----size----");
const set = new Set([1,2,3,4,5]);
console.log(set);
console.log(set.size);
console.log(set.has(6));
console.log(set.has(1));

console.log("---arrow function---");
// arrow function
for(const vr of set.values()) {
	console.log(vr);
}
set.forEach((vr) => console.log(vr));

// add, delete, claer
console.log("---add, delete, cleare---");
set.add(6);
set.add(7);
set.add(8);
console.log(set);
set.delete(1);
set.delete(2);
set.delete(3);
console.log(set);
set.clear();
console.log(set);
