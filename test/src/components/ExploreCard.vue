<script lang="ts">
import "../animations/animations";
export default {
	props: {
		id: String || "",
	},
};
</script>
<template>
	<div class="explore-card" :id="id">
		<div class="card-subtitle">
			<div class="card-hover" id="card-hover"></div>
			<div class="card-hover-text">
				<p>Explore Our <br />Games</p>
				<span>Let's Go!!</span>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.card-subtitle {
	width: 100%;
	height: 350px;
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
	// transition-duration: var(--time);
	transition: box-shadow var(--time);
	box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 8px;
	--width: 100%;
	--time: 0.7s;
	width: 100%;
	position: relative;
	display: inline-block;
	height: 350px;
	color: white;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	background-color: #fbab7e;
	background-image: linear-gradient(0deg, #fbab7e 0%, #f7ce68 100%);
	overflow: hidden;
	.card-hover {
		position: absolute;
		display: block;
		content: "";
		z-index: 0;
		width: 0;
		height: 0;
		border-radius: 100%;
		background: #fff;
		transform: scale(1);
		transition: width var(--time), padding-top var(--time);
	}
	.card-hover-text {
		z-index: 0;
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card-hover-text > p {
		color: #fff;
		position: relative;
		z-index: 5;
		transition: color var(--time), scale(1);
		transition-duration: 0.5s;
		// transition-delay: 0.5s;
	}
	.card-hover-text > span {
		font-weight: 800;
		scale: 0;
		// width: 0px;
		// height: 0px;
		position: absolute;
		transition: color 0.5s scale(0) 0.5s;
		transition-duration: 0.3s;
	}
	:hover {
		.card-hover {
			width: calc(var(--width) * 2);
			padding-top: calc(var(--width) * 2);
		}
		.card-hover-text > p {
			color: white;
			scale: 0;
			transition-duration: 0.5s;
		}
		.card-hover-text > span {
			background: -webkit-linear-gradient(180deg, #ff9151 0%, #f7ce68 100%);
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
			scale: 1.7;
			transition-duration: 0.4s;
			transition-delay: var(--time);
		}
	}
}

.explore-card:hover {
	box-shadow: none;
	transition-duration: var(--time);
}

#slide4 {
	position: absolute;
	top: calc(200vh - 175px);
}
</style>
