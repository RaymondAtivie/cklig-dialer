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
		}
	},
	computed: {
		cssClass() {
			return {
				["mdi-" + this.name]: true,
				"mdi-spin": this.spin,
				"t-blue": this.iconBlue
			};
		}
	}
};
</script>