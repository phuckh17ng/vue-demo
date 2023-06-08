<script setup lang="ts">
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis();
</script>

<template>
	<header class="header">
		<div class="header-fixed">
			<div class="header-logo">Tripo Games</div>

			<ul class="header-navigation">
				<li
					id="navigation-1"
					class="home active"
					onclick="lenis.scrollTo('#home')"
				>
					<a href="#home">Home</a>
				</li>
				<li id="navigation-2" class="game" onclick="lenis.scrollTo('#game')">
					<a href="#game">Games</a>
				</li>
				<li id="navigation-3" class="about" onclick="lenis.scrollTo('#about')">
					<a href="#about">About</a>
				</li>
				<li
					id="navigation-4"
					class="ourgames"
					onclick="lenis.scrollTo('#ourgames')"
				>
					<a href="#ourgames">Careers</a>
				</li>
				<li id="navigation-5" class="contact">
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	width: 100%;
	// max-width: 1280px;
	height: 64px;
	position: fixed;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	margin: auto;
}
.header-fixed {
	width: 100%;
	max-width: 1280px;
	height: 64px;
	// position: fixed;
	z-index: 100;
	display: flex;
	justify-content: space-between;
	margin: auto;
}
.header-navigation {
	display: flex;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	align-items: center;
	justify-content: center;
	background: #fff;
	box-shadow: rgba(128, 12, 132, 0.15) 5px 13px 10px -10px;
}
.header-logo {
	display: flex;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	align-items: center;
	justify-content: center;
	background: #da392b;
	padding: 0 24px 0 24px;
	font-size: 24px;
	font-family: "Suez One", serif;
	font-weight: 500;
	color: white;
	box-shadow: rgba(128, 12, 132, 0.15) 5px 13px 10px -10px;
}
.header-navigation > li {
	padding: 0 16px 0 16px;
	width: 100%;
	height: 100%;
	list-style: none;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-items: center;
	cursor: pointer;
}
#navigation-1 {
	border-bottom-left-radius: 20px;
}

#navigation-5 {
	border-bottom-right-radius: 20px;
}
.header-navigation > li:hover {
	background: #272443;
	width: 100%;
	height: 100%;
	text-align: center;
	margin: auto;
	// transition: ease-in-out;
	// transition-duration: 500ms;
	> a {
		color: white;
		// transition: ease-in-out;
		// transition-duration: 300ms;
	}
}

.active {
	background: #da392b;
	width: 100%;
	height: 100%;
	text-align: center;
	margin: auto;
	> a {
		color: white !important;
		width: 100%;
		height: 100%;
		text-align: center;
		display: flex;
		align-items: center;
	}
}
.header-navigation > li > a {
	text-decoration: none;
	color: black;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 400;
	font-size: 17px;
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	align-items: center;
}
</style>
