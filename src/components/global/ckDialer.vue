<template>
	<div>
		<div class="d-flex mb">
			<div class="dial-input">3</div>
			<div class="dial-input mx-2">2</div>
			<div class="dial-input">1</div>
		</div>
		<div class="d-flex mb">
			<div class="dial-input">6</div>
			<div class="dial-input mx-2">5</div>
			<div class="dial-input">4</div>
		</div>
		<div class="d-flex mb">
			<div class="dial-input">9</div>
			<div class="dial-input mx-2">8</div>
			<div class="dial-input">7</div>
		</div>
		<div class="d-flex mb">
			<div class="dial-input">#</div>
			<div class="dial-input mx-2">0</div>
			<div class="dial-input">*</div>
		</div>
		<div class="d-flex flex-row">
			<div class="d-flex flex-column flex-fill justify-content-between">
				<div class="d-flex flex-fill ml-2">
					<div class="play-el mb-1 stretch accent">תפריט הקשות</div>
				</div>
				<div class="d-flex ml-2">
					<div class="play-el stretch">
						<ck-button small tile accent outline style="font-size: 0.7rem;">החלף הקלטה</ck-button>
						<div class="ltr t-accent mr-2 fs-07">- 00:12</div>
					</div>
				</div>
			</div>
			<div class="d-flex flex-column">
				<div class="d-flex">
					<div class="dial-input accent" @click="play">
						<icon :name=" trigger ? 'play' : 'pause'" size="1.5" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			trigger: true
		};
	},
	methods: {
		play() {
			this.trigger = !this.trigger;
		}
	}
};
</script>

<style lang="scss" scoped>
.dial-input {
	background-color: $color-light;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
	height: 40px;
	width: 40px;
	font-weight: 400;
	font-size: 35px;
}

.play-btn {
	display: flex;
	background-color: transparentize($color: $accent-orange, $amount: 0.7);

	// width: 100%;
	height: 100%;

	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.play-el {
	padding-left: $basePx * 2;
	padding-right: $basePx * 2;
	padding-top: $basePx * 1.5;
	padding-bottom: $basePx * 1.5;
	background-color: $color-light;
	color: $text-primary;
	display: inline-flex;
	// min-height: 15px;
	align-items: center;
	&.stretch {
		flex: 1;
	}
}
.accent {
	background-color: transparentize($color: $accent-orange, $amount: 0.8);
	color: $accent-orange;
	font-weight: 500;
}
</style>