// higer order function

const alps = ['a','b','c','d','e'];

for(let i=0; i<alps.length; i++){
	console.log(alps[i]);
}

// forEach
alps.forEach((value) => console.log(value));

alps.forEach(function (value, index, array) {
	console.log(value);
	console.log(index);
	console.log(array);
});


// find 
const alps1 = {eng:'a', kor:'가'};
const alps2 = {eng:'b', kor:'나'};
const alps3 = {eng:'c', kor:'다'};
const alps4 = {eng:'d', kor:'라'};
const alps5 = {eng:'a', kor:'갸'};
const alps6 = {eng:'b', kor:'냐'};

const lng = [alps1, alps2, alps3, alps4, alps5, alps6];

const found = lng.find((value) => {
	return value.eng === 'a';
});

console.log(found);

const found2 = lng.find((value) => value.eng === 'a');

console.log(found2);

// findIndex
const found3 = lng.findIndex((value) => value.eng === 'a');

console.log(found3);

// some
const found4 = lng.some((value) => value.eng === 'a');

console.log(found4);

//every
const found5 = lng.every((value) => value.eng === 'a');

console.log(found5);

//filter
const found6 = lng.filter((value) => value.eng === 'a');

console.log(found6);
