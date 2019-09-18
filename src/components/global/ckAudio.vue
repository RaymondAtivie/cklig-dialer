<template>
	<div>
		<!-- <h1>Audio</h1> -->

		<div class="d-flex">
			<div class="stretch">
				<ck-box block :primary="!accent" :accent="accent" class="mb">{{label}}</ck-box>
				<ck-box block>
					<ck-button small tile outline class="py-1">הקלטה החלף</ck-button>
					<div class="text-left stretch pr-5">
						<div class="d-flex fs-07 justify-content-between" :class="accent? 't-accent': 't-primary'">
							<div class="ltr">- 00:12</div>
							<div v-if="!accent">FileName.wav</div>
						</div>
						<div class="seaker" v-if="!accent">
							<div class="seaker-fill"></div>
						</div>
					</div>
				</ck-box>
			</div>
			<div>
				<ck-box :primary="!accent" :accent="accent" mr class="play-btn" @click.native="play()">
					<icon v-if="trigger" name="play" size="3" />
					<icon v-if="!trigger" name="pause" size="3" />
				</ck-box>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		label: {
			type: String,
			default: ""
		},
		accent: {
			type: Boolean,
			default: false
		}
	},
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
.play-btn {
	width: 105px;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
.seaker {
	margin-top: $basePx/2;
	direction: ltr;
	height: 6px;
	background-color: $text-disabled;
	.seaker-fill {
		height: 100%;
		width: 30%;
		// background-color: $primary;
	}
}
</style>