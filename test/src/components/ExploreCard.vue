<script lang="ts">
export default {
	// props: {
	// 	url: String || "",
	// 	name: String || "",
	// 	description: String || "",
	// },
};

let cardHoverWidth = document.getElementById("card-hover")?.style.width;
let cardHoverHeight = document.getElementById("card-hover")?.style.height;
</script>
<template>
	<div class="explore-card">
		<div class="card-subtitle">
			<div class="card-hover" id="card-hover"></div>
			<p>Explore Our Games</p>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.explore-card {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	background-color: #fbab7e;
	background-image: linear-gradient(0deg, #fbab7e 0%, #f7ce68 100%);
	overflow: hidden;
}
.card-subtitle {
	width: 70%;
	height: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 28px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 500;
	position: relative;
}
.explore-card {
	.card-hover {
		animation: out 1500ms ease normal;
		position: absolute;
		z-index: 5;
	}
}

.explore-card:hover {
	// background: #fff;
	.card-hover {
		animation: in 1.5s ease normal forwards;
		background: #fff;
		border-radius: 100%;
	}

	// .card-subtitle {
	// 	color: black;
	// }
}
@keyframes in {
	0% {
		background-color: white;
		width: 0;
		height: 0;
		border-radius: 100%;
		transform: scale(0);
	}
	100% {
		background-color: white;
		width: 500px;
		height: 500px;
		border-radius: 100%;
		transform: scale(1);
	}
}

@keyframes out {
	100% {
		background-color: white;
		width: 0;
		height: 0;
		border-radius: 100%;
		transform: scale(0);
	}
	0% {
		background-color: white;
		width: 500px;
		height: 500px;
		border-radius: 100%;
		transform: scale(1);
	}
}
</style>
