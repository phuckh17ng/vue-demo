<script lang="ts">
import HeaderSlide from "./HeaderSlide.vue";
import ExploreCard from "./ExploreCard.vue";
export default {
	components: { HeaderSlide, ExploreCard },
};
</script>
<template>
	<div class="header-slider">
		<!-- <img src="../assets/pic2.jpg" /> -->
		<div class="slide">
			<HeaderSlide
				url="src/assets/pic2.jpg"
				name="Kipon"
				description="Casual - Free"
			/>
		</div>
		<div class="slide">
			<HeaderSlide
				url="src/assets/pic3.jpg"
				name="Robotrix"
				description="RPG - Free"
			/>
		</div>
		<div class="slide">
			<HeaderSlide
				url="src/assets/pic4.jpg"
				name="Treasure Box"
				description="Adventure - Free"
			/>
		</div>
		<div class="slide">
			<ExploreCard />
		</div>
	</div>
</template>
<style lang="scss" scoped>
.header-slider {
	width: 100%;
	max-width: 1280px;
	margin: auto;
	height: 350px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-content: space-between;
	grid-gap: 36px;
	// background-color: #f6f4f0;
}
.slide {
	width: 100%;
	// display: flex;
	// align-items: center;
	// justify-content: center;
}
</style>
