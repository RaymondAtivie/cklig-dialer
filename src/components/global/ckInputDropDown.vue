<template>
	<div class="input-dropdown-box">
		<div style="flex: 1">
			<div class="label">{{label}}</div>
			<!-- <input 
				class="field" 
				:type="type" 
				v-model="myValue"
				ref="ck-input"
				@click="handleClick" 
			/> -->
			<!-- <v-select 
                :options="['Canada', 'United States']" 
                ref="hey"
                dir="rtr"
            ></v-select> -->
		</div>
		<div>
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
		}
	},
	data(){
		return {
			myValue: this.value
		}
    },
    mounted(){
        // const d = this.$refs['hey'];
        // console.log(d);
        // d.select();
    },
	watch: {
		myValue(v){
			this.$emit("input", v);
			this.myValue = v;
        },
	},
	methods: {
		handleClick(){

		}
	}
};
</script>

<style lang="scss" scoped>
.input-dropdown-box {
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
}
</style>