let hourMinutes = (number) => {
	let hour = number / 60;
	let minute = number % 60;
	console.log("Hour is:", hour);
	console.log("miute is:", minute);
};

hourMinutes(100);
hourMinutes(120);
