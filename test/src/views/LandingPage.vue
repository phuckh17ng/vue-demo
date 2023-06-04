<script lang="ts">
import HeaderSlide from "@/components/HeaderSlide.vue";
import Slider from "@/components/Slider.vue";
import "../animations/animations";
import banner from "../assets/pic1.webp";
import appleImg from "../assets/Apple Store.png";
import googleImg from "../assets/Google Play.png";
import About from "@/components/About.vue";
export default {
	data: function () {
		return {
			banner: banner,
			appleImg: appleImg,
			googleImg: googleImg,
		};
	},
	components: { Slider, About },
};
</script>

<template>
	<div class="landingpage">
		<section class="banner" id="banner">
			<div class="figure-mask">
				<img :src="banner" id="figure1" />
			</div>
			<div class="banner-desc">
				<div>
					<div>
						<h1 class="banner-desc-1">Made to Be Played</h1>
						<h3 class="banner-desc-2">The Very Best in Mobile Gaming</h3>
					</div>

					<div class="btn-download">
						<img class="btn-download-apple" :src="appleImg" />
						<img class="btn-download-google" :src="googleImg" />
					</div>
				</div>
			</div>
		</section>
		<section class="slider">
			<!-- <h1 class="banner-desc-1">Made to Be Played</h1> -->
			<Slider></Slider>
		</section>

		<section style="background-color: #f6f4f0">
			<About />
		</section>
	</div>
</template>

<style lang="scss" scoped>
.landingpage {
	height: 600vh;
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
	width: 100%;
	.banner-desc-1 {
		text-align: center;
		position: sticky;
		top: calc(10vh);
	}
}
</style>
