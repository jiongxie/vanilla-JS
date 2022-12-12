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
