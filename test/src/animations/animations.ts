window.addEventListener("scroll", () => {
	let figure1 = document.getElementById("figure1");

	let value = window.scrollY;
	// console.log(value);

	if (figure1) {
		figure1.style.right = value * 0.23 + "px";
		figure1.style.transition = "linear";
	}
});

window.addEventListener("scroll", () => {
	let slide1 = document.getElementById("slide1");
	let slide2 = document.getElementById("slide2");
	let slide3 = document.getElementById("slide3");
	let slide4 = document.getElementById("slide4");
	let viewHeight100 = document
		.getElementById("banner")
		.getBoundingClientRect().height;

	let value = window.scrollY;

	if (slide1 && slide2 && slide3 && slide4) {
		if (value >= viewHeight100) {
			slide1.style.position = "sticky";
			slide1.style.top = "calc(50vh - 175px)";
		} else {
			slide1.style.position = "absolute";
			slide1.style.top = "calc(50vh - 175px)";
		}

		if (value >= viewHeight100 * 1.5) {
			slide2.style.position = "sticky";
			slide2.style.top = "calc(50vh - 175px)";
		} else {
			slide2.style.position = "absolute";
			slide2.style.top = "calc(100vh - 175px)";
		}

		if (value >= viewHeight100 * 2) {
			slide3.style.position = "sticky";
			slide3.style.top = "calc(50vh - 175px)";
		} else {
			slide3.style.position = "absolute";
			slide3.style.top = "calc(150vh - 175px)";
		}

		if (value >= viewHeight100 * 2.5) {
			slide4.style.position = "sticky";
			slide4.style.top = "calc(50vh - 175px)";
		} else {
			slide4.style.position = "absolute";
			slide4.style.top = "calc(200vh - 175px)";
		}

		console.log(value);
		console.log(slide2.getBoundingClientRect().height);
		console.log(slide2.getBoundingClientRect().top);
		console.log(viewHeight100);
		// figure1.style.right = value * 0.23 + "px";
		// figure1.style.transition = "linear";
	}
});
