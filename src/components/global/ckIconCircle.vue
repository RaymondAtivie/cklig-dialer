<template>
	<div>
		<div class="circle" :class="cssClass">
			<icon :name="icon" size="1.5" />
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
		},
		disabledTotal: {
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
				"round-error disabled": this.disabled && !this.success,
				"disabled-total": this.disabledTotal
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
				$amount: 0.7
			);
		}
	}

	&.disabled-total {
		background-color: $color-light;
	}
}
</style>