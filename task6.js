let conFaren = (celcius) => {
	let farenIs = (celcius * 9) / 5 + 32;
	console.log("the celcius to farenheit is :", farenIs);
};
conFaren(0);

let ConCelcius = (faren) => {
	let celciusIs = (faren - 32) * (5 / 9);
	console.log("the farenheit to celcius is :", celciusIs);
};
ConCelcius(32);
