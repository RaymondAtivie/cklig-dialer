<template>
	<span class="mdi" :class="cssClass" :style="styleClass"></span>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		color: {
			type: String
		},
		spin: {
			type: Boolean,
			default: false
		},
		iconBlue: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: "1"
		},
		success: {
			type: Boolean,
			default: false
		},
		iconWhite: {
			type: Boolean
		}
	},
	computed: {
		cssClass() {
			return {
				["mdi-" + this.name]: true,
				"mdi-spin": this.spin,
				"t-blue": this.iconBlue,
				"icon-success": this.success,
				"t-white": this.iconWhite
			};
		},
		styleClass(){
			return {
				'color': this.color,
				'font-size': this.size+'rem'
			};
		}
	}
};
</script>
<style lang="scss" scoped>
.icon-success {
	color: #5ebc55 !important;
}
</style>