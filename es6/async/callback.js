// timeout

function clbk() {
	console.log('a');
	setTimeout(() => {
		console.log('b');
	}, 3000);
	console.log('c');

}
clbk();

// try catch

function Delay(callback, seconds) {
	if(!callback) {
		throw new Error('callback function must be');
	}
	if(!seconds || seconds < 0) {
		throw new Error('seconds must over 0');
	}
	setTimeout(callback, seconds * 1000);
}


try {
	Delay(() => {console.log('timer on');},-1); 
} catch (error) {
	console.log('unstatisfied requirment');
}

// promise

function prDelay(seconds) {
	return new Promise((resolve, reject) => {
			if(!seconds || seconds < 0) {
				reject(new Error('seconds must be over 0'))
			}
		setTimeout(resolve, seconds*1000);
	});
}

prDelay(1)
	.then(() => console.log('timer complete'))
	.catch(console.error)
	.finally(() => console.log('the end'));


// promise chaining
function buyHouse(money) {
  return Promise.resolve(`${money} => condo`);
}

function earnMoney(condo) {
  return Promise.resolve(`${condo} => money`);
}

function getMoney() {
  return Promise.reject(new Error('no Money'));
  //return Promise.resolve(`laboring => $1000000`);
}

getMoney()
  .catch(() => '$1000000')
  .then(buyHouse)
  .then(earnMoney)
  .then(console.log);

