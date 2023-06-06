<script lang="ts">
import Game from "./Game.vue";
export default {
	components: { Game },
};
</script>

<template>
	<div class="ourgame">
		<div class="ourgame-subtitle">Our Games</div>
		<p class="ourgame-description">
			I'm a paragraph. Click here to add your own text and edit me. I’m a great
			place for you to<br />
			tell a story and let your users know a little more about you.
		</p>

		<div class="ourgame-mask">
			<img src="../assets/pic7.png" />
			<Game
				id="game1"
				url="src/assets/pic8.png"
				name="Kipon"
				description="Casual - Free"
			/>
			<Game
				id="game2"
				url="src/assets/pic9.png"
				name="Robotrix"
				description="RPG - Free"
			/>
			<Game
				id="game3"
				url="src/assets/pic10.png"
				name="Treasure Box"
				description="Adventure - Free"
			/>
			<div style="position: absolute; bottom: 0; right: 100px" id="figure2">
				<img
					src="src/assets/pic11.png"
					style="filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 8px)"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ourgame-mask {
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	margin-top: 15vh;
	#figure2 {
		opacity: 0;
		transition: all 1s ease-in-out;
		animation: upAndDown 2s infinite ease-in-out alternate;
	}
}
.ourgame {
	width: 100%;
	max-width: 1280px;
	height: 100%;
	margin: auto;
	padding-top: 35vh;
	.ourgame-description {
		text-align: center;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 24px;
		color: #272443;
		margin-top: 2vh;
		font-weight: 300;
	}
	.ourgame-subtitle {
		color: #272443;
		text-align: center;
		font-family: "Suez One", serif;
		font-size: 76px;
		margin-top: 2vh;
	}
}

@keyframes upAndDown {
	0% {
		bottom: 0px;
	}
	100% {
		bottom: 40px;
	}
}
</style>
