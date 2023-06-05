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
	let banner = document.getElementById("banner");

	let value = window.scrollY;
	if (!banner) {
		return;
	}
	const viewHeight100 = banner.getBoundingClientRect().height;
	//slider animation
	if (slide1 && slide2 && slide3 && slide4 && banner) {
		if (value >= viewHeight100) {
			slide1.style.position = "sticky";
			slide1.style.top = "calc(50vh - 175px)";
			slide1.style.opacity = "1";
		} else {
			slide1.style.position = "sticky";
			slide1.style.top = "100vh";
			slide1.style.opacity = "0";
		}

		if (value >= viewHeight100 * 2) {
			slide2.style.position = "sticky";
			slide2.style.top = "calc(50vh - 175px)";
			slide2.style.opacity = "1";
		} else {
			slide2.style.position = "sticky";
			slide2.style.top = "100vh";
			slide2.style.opacity = "0";
		}

		if (value >= viewHeight100 * 3) {
			slide3.style.position = "sticky";
			slide3.style.top = "calc(50vh - 175px)";
			slide3.style.opacity = "1";
		} else {
			slide3.style.position = "sticky";
			slide3.style.top = "100vh";
			slide3.style.opacity = "0";
		}

		if (value >= viewHeight100 * 4) {
			slide4.style.position = "sticky";
			slide4.style.top = "calc(50vh - 175px)";
			slide4.style.opacity = "1";
		} else {
			slide4.style.position = "sticky";
			slide4.style.top = "100vh";
			slide4.style.opacity = "0";
		}
		console.log(value);
		console.log(viewHeight100);
		console.log(slide2.getBoundingClientRect().height);
		console.log(slide2.getBoundingClientRect().top);
	}

	let about1 = document.getElementById("about-tripo");
	let about2 = document.getElementById("about-tripo-description");
	let about3 = document.getElementById("about-tripo-learnmore");

	if (about1 && about2 && about3) {
		if (value >= viewHeight100 * 5.5) {
			about1.style.opacity = "1";
		} else {
			about1.style.opacity = "0";
		}
		if (value >= viewHeight100 * 5.8) {
			about2.style.opacity = "1";
		} else {
			about2.style.opacity = "0";
		}
		if (value >= viewHeight100 * 6) {
			about3.style.opacity = "1";
		} else {
			about3.style.opacity = "0";
		}
	}
});
