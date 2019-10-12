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
		<div class="row align-items-center">
			<div class="col" style="padding: 0">
				<div>
					<ck-box stretch mb accent>תפריט הקשות</ck-box>
					<ck-box stretch>
						<ck-button small tile outline class="py-1">החלף הקלטה</ck-button>
					</ck-box>
				</div>
			</div>
			<div class="col-3" style="padding: 0">
				<div>
					<ck-box accent mr class="play-btn" @click.native="play()">
						<icon v-if="trigger" name="play" size="3" />
						<icon v-if="!trigger" name="pause" size="3" />
					</ck-box>
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
</style>