<template>
	<div class="input-box" :class="{'inverse': inverse}">
		<div style="flex: 1">
			<div class="label" >{{label}}</div>
			<input 
				class="field" 
				:type="type" 
				v-model="myValue" 
			/>
		</div>
		<div>
			<slot name="icon"></slot>
			<icon :name="(type ==='email' ? 'check-circle' : '') || (type === 'password' ? 'eye' : '')" size="1.2" :color="color" iconBlue />
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
		type: {
			type: String,
			default: "text"
		},
		color: {
			type: String,
			default: "grey"
		},
		value: {
			type: String,
			default: ""
		},
		inverse: {
			type: Boolean,
			default: false,
		},
	},
	data(){
		return {
			myValue: this.value
		}
	},
	watch: {
		myValue(v){
			this.$emit("input", v);
			this.myValue = v;
        },
	},
};
</script>

<style lang="scss" scoped>
.input-box {
	width: 100%;
	border: 1px solid $borderColor;
	padding: $basePx * 1.5 $basePx * 2;
	display: flex;
	align-items: center;

	input {
		width: 100%;
		border: 0px;
		color: $text-primary;
		// font-size: 12px;
	}

	&.inverse {

		.label {
			font-size: 12px !important;
			font-weight: 100 !important;
		}

		.field {
			font-size: 15px !important;
			font-weight: bold !important;
		}
	}
}
</style>