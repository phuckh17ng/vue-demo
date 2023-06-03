<script lang="ts">
import "../animations/animations";
export default {
	props: {
		url: String || "",
		name: String || "",
		description: String || "",
		id: String || "",
	},
};
</script>
<template>
	<div class="slide1" :id="id">
		<img :src="url" />
		<div class="slide-mask"></div>
		<div class="slide-subtitle">
			<p class="subtitle-name">{{ name }}</p>
			<p>{{ description }}</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.slide1 {
	box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
	width: 100%;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	border-radius: 20px;
	overflow: hidden;
	transition: box-shadow 0.5s;
	> img {
		width: 100%;
		border-radius: 20px;
		transition: all 0.5s ease-in-out;
		transform: scale(1);
	}
}
.slide1:hover {
	box-shadow: none;
	transition-duration: 500ms;
	> img {
		transform: scale(1.1);
	}
	.slide-mask {
		opacity: 0;
	}
	.slide-subtitle {
		opacity: 0;
	}
}
.slide-mask {
	width: 100%;
	height: 350px;
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

#slide1 {
	position: sticky;
	transition: all 1s cubic-bezier(0.22, 0.87, 0, 1);
	top: calc(100vh);
	opacity: 0;
}

#slide2 {
	position: sticky;
	transition: all 1s cubic-bezier(0.22, 0.87, 0, 1);
	opacity: 0;
	top: calc(100vh);
	// animation: exam 0.7s ease-out;
}

#slide3 {
	position: sticky;
	opacity: 0;
	transition: all 1s cubic-bezier(0.22, 0.87, 0, 1);
	top: calc(100vh);
}

@keyframes exam {
	from {
		top: 100vh;
		opacity: 0;
	}
	to {
		opacity: 1;
		top: calc(50vh - 175px);
	}
}
</style>
