const map = new Map([
	['1','a'],
	['2','b'],
	['3','c'],
	['4','d'],
	['5','e'],
	['6','f'],
	['7','g']
]);
console.log(map);

// exist, loop, size
console.log("--has--");
console.log(map.has('2'));
console.log("--loop--");
 for(i=0; i<map.size; i++){
 	console.log(i+1);
 }
map.forEach((value, key) => console.log(key, value));
