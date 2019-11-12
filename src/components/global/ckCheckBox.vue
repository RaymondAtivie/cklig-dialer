<template>
	<div class="input-box">
        <input class="field" type="checkbox" />
        <div class="label"><span>{{label}}</span></div>
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
    
    span {
        font-size: 12px;
        font-weight: normal;
    }
	input {
		border: 0px;
		color: $text-primary;
		font-size: 12px;
        margin-left: 3px;
	}
}
</style>