<script lang="ts">
export default {
	props: {
		url: String || "",
		name: String || "",
		description: String || "",
	},
};
</script>
<template>
	<div class="slide">
		<img :src="url" />
		<div class="slide-mask"></div>
		<div class="slide-subtitle">
			<p class="subtitle-name">{{ name }}</p>
			<p>{{ description }}</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.slide {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	// border-radius: 20px;
}
.slide > img {
	width: 100%;
	border-radius: 20px;
	overflow: hidden;
	transition: ease-in-out;
	transition-duration: 500ms;
}
.slide-mask {
	width: 100%;
	height: 100%;
	z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	transition: ease-in-out;
	transition-duration: 500ms;
	background: linear-gradient(
		180deg,
		rgba(218, 57, 43, 0),
		rgba(218, 57, 43, 0.8)
	);
	opacity: 0.7;
}
.slide-subtitle {
	position: absolute;
	bottom: 42px;
	left: 36px;
	z-index: 2;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	color: #fff;
	transition: ease-in-out;
	transition-duration: 350ms;
}
.subtitle-name {
	font-size: 24px;
}
.slide:hover {
	.slide > img {
		scale: 1.1;
	}
	.slide-mask {
		opacity: 0;
	}
	.slide-subtitle {
		opacity: 0;
	}
}
</style>
