function logHelloEveryTwoMinutes() {
	setInterval(() => {
		console.log("hello");
	}, 2 * 1000);
}

exports.logHelloEveryTwoMinutes = logHelloEveryTwoMinutes;
