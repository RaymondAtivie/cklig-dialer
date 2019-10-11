<template>
	<div>
		<div class="circle round-success" :class="cssClass">
			<icon :name="icon" size="1.5" />k
		</div>
	</div>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: "plus"
		},
		success: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		cssClass() {
			return {
				"round-success": this.success,
				"round-error": !this.success,
				"round-success disabled": this.disabled && this.success,
				"round-error disabled": this.disabled && !this.success
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.circle {
	height: 30px;
	width: 30px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	&.round-success {
		background-color: $color-success;
		&.disabled {
			background-color: $accent-green;
		}
	}

	&.round-error {
		background-color: $color-danger;
		&.disabled {
			background-color: transparentize(
				$color: $color-danger,
				$amount: 0.5
			);
		}
	}
}
</style>