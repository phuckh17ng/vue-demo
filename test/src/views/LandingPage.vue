<script lang="ts">
import HeaderSlide from "@/components/HeaderSlide.vue";
import Slider from "@/components/Slider.vue";

export default {
	components: { Slider },
};
window.addEventListener("scroll", () => {
	let figure1 = document.getElementById("figure1");

	let value = window.scrollY;
	console.log(value);

	if (figure1) {
		console.log(figure1.style.right);
		figure1.style.right = value * 0.23 + "px";
		figure1.style.transition = "linear";
	}
});
</script>

<template>
	<div class="landingpage">
		<section class="banner">
			<div class="figure-mask">
				<img src="../assets/pic1.webp" id="figure1" />
			</div>
			<div class="banner-desc">
				<div>
					<div>
						<h1 class="banner-desc-1">Made to Be Played</h1>
						<h3 class="banner-desc-2">The Very Best in Mobile Gaming</h3>
					</div>

					<div class="btn-download">
						<img class="btn-download-apple" src="../assets/Apple Store.png" />
						<img class="btn-download-google" src="../assets/Google Play.png" />
					</div>
				</div>
			</div>
		</section>
		<section class="slider">
			<Slider> </Slider>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.landingpage {
	height: 400vh;
	background-color: #f6f4f0;
}
.bg-gradient {
	background-color: #d9afd9;
	background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
	width: 100vw;
	height: 100vh;
	position: relative;
}
.figure-mask {
	// font-family: "Suez One", serif;
	// position: relative;
	// width: 100vw;
	height: 100vh;
	overflow: hidden;
}
.figure-mask > img {
	position: relative;
	width: 120%;
	top: 0;
	// right: 200px;
	// overflow: hidden;
}
.banner-desc {
	position: absolute;
	width: 100%;
	top: 25%;
	left: 0%;
	color: #272443;
}
.banner-desc > div {
	max-width: 1280px;
	margin: auto;
}

.banner-desc-1 {
	font-family: "Suez One", serif;
	font-size: 76px;
	font-weight: 200;
}

.banner-desc-2 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-size: 28px;
	font-weight: 400;
}

.btn-download {
	margin-top: 36px;
}
.btn-download-apple {
	margin-right: 16px;
}

.slider {
	margin-top: 128px;
}

// .slider {
// 	position: relative;
// 	top: -120px;
// }
</style>
