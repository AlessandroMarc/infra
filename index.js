function logHelloEveryTwoMinutes() {
	setInterval(() => {
		console.log("hello");
	}, 2 * 1000);
}

logHelloEveryTwoMinutes();

exports.logHelloEveryTwoMinutes = logHelloEveryTwoMinutes;
