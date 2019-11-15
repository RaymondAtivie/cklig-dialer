<template>
	<!-- <div> -->
		<div class="circle" :class="cssClass" :style="{'background-color': customBg, 'color': customColor}">
			<icon :name="icon" size="1.5" />
		</div>
	<!-- </div> -->
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
		warning: {
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
		},
		customBg: {
			type: String
		},
		customColor:{
			type: String
		}, 
		error: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		cssClass() {
			return {
				"round-success": this.success,
				"round-error": this.error,
				"round-success disabled": this.disabled && this.success,
				"round-error disabled": this.disabled && this.success,
				"disabled-total": this.disabledTotal,
				"round-warning": this.warning,
				"round-warning disabled": this.warning && this.disabled
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


	&.round-warning {

		background-color: $color-warning;
		&.disabled {
			background-color: transparentize(
				$color: $color-warning,
				$amount: 0.7
			);
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