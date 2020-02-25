<template>
	<div class="input-box">
		<p-check
			v-model="clicked"
			class="p-icon"
			toggle
			color="blue"
			off-color="info-o"
		>
			<i class="icon mdi mdi-check-bold" slot="extra"></i>
			<i class="icon mdi mdi" slot="off-extra"></i>
			<label slot="off-label"></label>
		</p-check>
        <!-- <input class="field" type="checkbox" /> -->
        <!-- <div class="label"><span>{{label}}</span></div> -->
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
		}
	},
	data(){
		return {
			clicked: false,
		}
	},
	watch: {
		clicked(newVal) {
			this.$emit('input', newVal);
		}
	}
};
</script>

<style lang="scss" scoped>
.input-box {
	width: 100%;
	padding: $basePx * 1.5 0px;
	display: flex;
	align-items: center;
    flex-direction: row;
    
    // span {
    //     // font-size: 12px;
    //     font-weight: normal;
    // }
	// input {
	// 	border: 0px;
	// 	color: $text-primary;
	// 	// font-size: 12px;
	// 	margin-left: 3px;
		
	// 	padding: 30px;
	// }
}
</style>