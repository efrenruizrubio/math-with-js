const btn = document.querySelector("#btnClick");
const result = document.querySelector("#result");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");

result.innerText = `Precio con descuento: ${100}`;

const calculateDiscount = (price, discount) => {
	return (price * (100 - discount)) / 100;
};

document.querySelectorAll(".input").forEach((element) => {
	element.addEventListener("input", () => {
		result.innerText = `Precio con descuento del ${
			inputDiscount.value
		}%: ${calculateDiscount(inputPrice.value, inputDiscount.value)}`;
	});
});

/* inputPrice.addEventListener,
	inputDiscount.addEventListener("input", () => {
		result.innerText = `Precio con descuento: ${calculateDiscount(
			inputPrice.value,
			inputDiscount.value,
		)}`;
	}); */

/* btn.addEventListener("click", () => {
	result.innerText = `Precio con descuento: ${calculateDiscount(
		inputPrice.value,
		inputDiscount.value,
	)}`;
}); */
