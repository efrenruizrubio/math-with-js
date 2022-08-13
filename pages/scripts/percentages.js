const btn = document.querySelector("#btnClick");
const result = document.querySelector("#result");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");

result.innerText = `Precio con descuento: ${100}`;

const coupon = [
	{ couponName: "PLTZ2022", discount: 20 },
	{ couponName: "MASTER2022", discount: 85 },
];

const calculateDiscount = (price, discount) => {
	return (price * (100 - discount)) / 100;
};

btn.addEventListener("click", () => {
	discount = coupon.filter((el) => el.couponName === inputDiscount.value);
	if (discount.length) {
		result.innerText = `Precio con el cupón ${
			discount[0].couponName
		}: ${calculateDiscount(inputPrice.value, discount[0].discount)}`;
	}
});

/* document.querySelectorAll(".input").forEach((element) => {
	element.addEventListener("input", () => {
		if (inputDiscount.value > 100) {
			result.innerText =
				"El valor del descuento no puede ser menor que 0 y mayor que 100";
			inputDiscount.classList.add("error");
			console.log({ inputDiscount });
			return;
		}

		result.innerText = `Precio con descuento del ${
			inputDiscount.value
		}%: ${calculateDiscount(inputPrice.value, inputDiscount.value)}`;
	});
}); */

/* 

Implemented a loop to avoid repeating code

inputPrice.addEventListener,
	inputDiscount.addEventListener("input", () => {
		result.innerText = `Precio con descuento: ${calculateDiscount(
			inputPrice.value,
			inputDiscount.value,
		)}`;
	}); */

/* 

Without button to make it dynamic

btn.addEventListener("click", () => {
	result.innerText = `Precio con descuento: ${calculateDiscount(
		inputPrice.value,
		inputDiscount.value,
	)}`;
}); */
