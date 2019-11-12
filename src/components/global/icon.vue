<template>
	<span class="mdi" :class="cssClass" :style="{'font-size': size+'rem'}"></span>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
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
		}
	},
	computed: {
		cssClass() {
			return {
				["mdi-" + this.name]: true,
				"mdi-spin": this.spin,
				"t-blue": this.iconBlue,
				"icon-success": this.success
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