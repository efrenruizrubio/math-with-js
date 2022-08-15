/* const Stadistics = {};

Stadistics.calculateAverage = calculateAverage = (arr) => {
	return (
		arr.reduce((el, acc) => {
			return el + acc;
		}) / arr.length
	);
};

Stadistics.calculateMedian = calculateMedian = (arr) => {
	const median = arr.length / 2;
	const ordenedArray = arr.sort((a, b) => a - b);
	return arr.length % 2 === 0
		? (ordenedArray[median] + ordenedArray[median - 1]) / 2
		: ordenedArray[Math.floor(median)];
};

Stadistics.calculateModal = calculateModal = (arr) => {
	let obj = {};
	arr.map((el) => {
		el in obj ? (obj[el] += 1) : (obj[el] = 1);
	});
	console.log(Math.max(...Object.values(obj)));
};

Stadistics.calculateArithmeticAverage = calculateArithmeticAverage = (arr) => {
	return arr.length / arr.map((el) => 1 / el).reduce((a, b) => a + b);
}; */

class Stadistics {
	static calculateAverage;
	static calculateMedian;
	static calculateModal;
	static calculateArithmeticAverage;
}

Stadistics.calculateAverage = (arr) => {
	return (
		arr.reduce((el, acc) => {
			return el + acc;
		}) / arr.length
	);
};

Stadistics.calculateMedian = (arr) => {
	const median = arr.length / 2;
	const ordenedArray = arr.sort((a, b) => a - b);
	return arr.length % 2 === 0
		? (ordenedArray[median] + ordenedArray[median - 1]) / 2
		: ordenedArray[Math.floor(median)];
};

Stadistics.calculateModal = (arr) => {
	let obj = {};
	arr.map((el) => {
		el in obj ? (obj[el] += 1) : (obj[el] = 1);
	});
	return Math.max(...Object.values(obj));
};

Stadistics.calculateArithmeticAverage = (arr) => {
	return arr.length / arr.map((el) => 1 / el).reduce((a, b) => a + b);
};
