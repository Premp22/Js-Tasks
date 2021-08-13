let conFaren = (celcius) => {
	let farenIs = (celcius * 9) / 5 + 32;
	console.log("the celcius to farenheit is :", farenIs);
};

let ConCelcius = (faren) => {
	let celciusIs = (faren - 32) * (5 / 9);
	console.log("the farenheit to celcius is :", celciusIs);
};
conFaren(60);
ConCelcius(45);
