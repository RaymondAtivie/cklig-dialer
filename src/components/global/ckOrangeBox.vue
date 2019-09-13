<template>
	<div>
		<!-- <h1>Audio</h1> -->

		<div class="d-flex">
			<div class="stretch">
				<ck-box block primary class="mb">שיחה נכנסת ממספר וירטואלי - עברית - משה</ck-box>
				<ck-box block light>שיחה נכנסת ממספר וירטואלי - עברית - משה</ck-box>
			</div>
			<div>
				<ck-box block accentDark mr class="info-btn" @click.native="play()">
					<p>צור יעד לניתוב</p>
				</ck-box>
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
.info-btn {
	width: 105px;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}
</style>