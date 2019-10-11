<template>
	<div class="ck-box" :class="cssClass" @click="emitClick">
		<slot></slot>
		<icon v-if="select" name="menu-down" class="text-left stretch" />
	</div>
</template>

<script>
export default {
	props: {
		block: {
			type: Boolean,
			default: false
		},
		primary: {
			type: Boolean,
			default: false
		},
		accent: {
			type: Boolean,
			default: false
		},
		accentDark: {
			type: Boolean,
			default: false
		},
		disabledDark: {
			type: Boolean,
			default: false
		},
		stretch: {
			type: Boolean,
			default: false
		},
		m: {
			type: Boolean,
			default: false
		},
		ml: {
			type: Boolean,
			default: false
		},
		mr: {
			type: Boolean,
			default: false
		},
		mx: {
			type: Boolean,
			default: false
		},
		mb: {
			type: Boolean,
			default: false
		},
		br: {
			type: Boolean,
			default: false
		},
		brLight: {
			type: Boolean,
			default: false
		},
		accentLight: {
			type: Boolean,
			default: false
		},
		bg: {
			type: Boolean,
			default: false
		},
		bgWhite: {
			type: Boolean,
			default: false
		},
		disabled: {
			type: Boolean,
			default: false
		},
		select: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		cssClass() {
			return {
				"w-100": this.block,
				accent: this.accent,
				"accent-dark": this.accentDark,
				"accent-light": this.accentLight,
				primary: this.primary,
				"stretch w-100": this.stretch,
				"margin-around": this.m,
				"margin-right": this.mr,
				"margin-left": this.ml,
				"margin-horizontal": this.mx,
				"margin-bottom": this.mb,
				br: this.br,
				"bg-none": this.bg,
				"bg-white": this.bgWhite,
				"br-light": this.brLight,
				"disabled-dark": this.disabledDark,
				disabled: this.disabled
			};
		}
	},
	methods: {
		emitClick(e) {
			this.$emit("click", e);
		}
	}
};
</script>

<style lang="scss" scoped>
.ck-box {
	padding-left: $basePx * 2;
	padding-right: $basePx * 2;
	padding-top: $basePx * 1.5;
	padding-bottom: $basePx * 1.5;
	background-color: $color-light;
	color: $text-primary;
	display: inline-flex;
	min-height: 42px;
	align-items: center;

	&.stretch {
		flex: 1;
	}
	&.margin-around {
		margin: $basePx/2;
	}
	&.margin-right {
		margin-right: $basePx;
	}
	&.margin-left {
		margin-left: $basePx;
	}
	&.margin-bottom {
		margin-bottom: $basePx;
	}
	&.margin-horizontal {
		margin-left: $basePx/2;
		margin-right: $basePx/2;
	}

	&.br {
		border-right: $basePx solid $text-secondary;
		&-light {
			border-right: 1px solid $text-disabled;
		}
	}

	&.bg-none {
		background-color: transparent;
		color: $text-disabled !important;
		font-weight: 500;
		font-size: 25px;
	}
	&.bg-white {
		border: 1px solid $text-secondary;
	}
	&.primary {
		// background-color: transparentize($color: $primary, $amount: 0.88);
		background-color: #e5f4fb;
		color: $primary;
		font-weight: 500;
		&.br {
			border-right: $basePx solid $primary;
		}
	}
	&.accent {
		background-color: transparentize($color: $accent-orange, $amount: 0.8);
		color: $accent-orange;
		font-weight: 500;
		&.br {
			border-right: $basePx solid $accent-orange;
		}
		&-dark {
			@extend .accent;
			background-color: $accent-orange;
			color: white;
			font-weight: 300;
		}
		&-light {
			background-color: white;
			color: $accent-orange;
			font-weight: 500;
		}
	}
	&.disabled {
		background-color: $color-light !important;
		color: $text-disabled !important;
		font-weight: 500;
		&.br {
			border-right: $basePx solid $text-disabled !important;
		}
		&-dark {
			@extend .disabled;
			background-color: $text-disabled !important;
			color: white !important;
			font-weight: 300;
		}
	}
}
</style>