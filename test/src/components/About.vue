<script setup lang="ts"></script>

<template>
	<div class="about">
		<div class="about-tripo">About Tripo</div>
		<div class="about-tripo-subtitle">Your Source for Mobile Entertainment</div>
		<p class="about-tripo-description">
			I'm a paragraph. Click here to add your own text and edit me. It’s easy.
			Just click “Edit Text”<br />
			or double click me to add your own content and make changes to the font.
			I’m a great<br />
			place for you to tell a story and let your users know a little more about
			you.
		</p>

		<button class="btn-learn-more">Learn More</button>
		<div class="about-img">
			<img src="../assets/pic5.webp" alt="." />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.about {
	width: 100%;
	max-width: 1280px;
	height: 100%;
	margin: auto;

	.about-img {
		width: 60%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-top: 7vh;
		> img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
		}
	}
	.about-tripo,
	.about-tripo-description {
		text-align: center;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 24px;
		font-weight: 600;
		color: #272443;
	}
	.about-tripo {
		padding-top: 50vh;
	}

	.about-tripo-description {
		margin-top: 2vh;
		font-weight: 300;
	}

	.about-tripo-subtitle {
		color: #272443;
		text-align: center;
		font-family: "Suez One", serif;
		font-size: 76px;
		margin-top: 2vh;
	}

	.btn-learn-more {
		margin: auto;
		display: block;
		margin-top: 5vh;
		padding: 16px 24px 16px 24px;
		border-radius: 8px;
		border: none;
		background: #da392b;
		color: white;
		font-size: 16px;
	}
}
</style>
