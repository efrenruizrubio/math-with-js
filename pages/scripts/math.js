console.log("%cHello, World with Maths!", "color: red; font-size: 2rem;");

let squareSide = 5;
let triangleBase = 4;
let triangleHeight = 5.5;
let triangleSideLeft = 6;
let triangleSideRight = 6;

/* 

We can use console.group() and console.groupEnd() to group console.log statements, so we can collapse it when we debug at the inspector

*/

//For example, if we have multiple console.log here that are part of the square, we can group them like follows:

//console.group('Square');
const calculateSquare = (side) => {
	return {
		perimeter: side * 4,
		area: side ** 2 + "cm²",
	};
};

//We use groupEnd when we want to end the wrapping of console.log for the square calculations

//console.groupEnd('Square');

const calculateTriangle = (side1, side2, base, height) => {
	return {
		perimeter: side1 + side2 + base,
		area: (base * height) / 2,
	};
};

console.log({
	square: { squareSide, squareValues: calculateSquare(squareSide) },
	triangle: {
		triangleSideLeft,
		triangleSideRight,
		triangleBase,
		triangleHeight,
		triangleValues: calculateTriangle(
			triangleSideLeft,
			triangleSideRight,
			triangleBase,
			triangleHeight,
		),
	},
});

console.group("Circle");

const circleRadius = 3;
const calculateCircle = (radius) => {
	let squareRadius = Math.pow(radius, 2);
	let diameter = radius * 2;
	let PI = Math.PI;
	return {
		circleRadius,
		squareRadius,
		diameter,
		PI,
		circunference: diameter * PI,
		area: squareRadius * PI,
	};
};

console.log(calculateCircle(circleRadius));
console.groupEnd("Circle");

console.group("Isosceles Triangle");

const calculateTriangleIsosceles = (sides, base) => {
	if (sides !== base) {
		return Math.sqrt(Math.pow(sides, 2) - Math.pow(base, 2) / 4);
	} else {
		console.warn("The triangle is not isosceles");
	}
};
console.log(calculateTriangleIsosceles(6, 4));

console.groupEnd("Isosceles Triangle");

console.group("Scalene Triangle");

const calculateTriangleScalene = (side1, side2, side3) => {
	const perimeter = side1 + side2 + side3;
	semiperimeter = perimeter / 2;
	return {
		side1,
		side2,
		side3,
		perimeter,
		semiperimeter,
		area: Math.sqrt(
			semiperimeter *
				(semiperimeter - side1) *
				(semiperimeter - side2) *
				(semiperimeter - side3),
		),
	};
};

console.log(calculateTriangleScalene(12, 10, 14));
console.groupEnd("Scalene Triangle");
