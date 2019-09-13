<template>
    <div class="input-box">
        <div class="label">{{label}}</div>
        <input class="field" />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.input-box{
    width: 100%;
    border: 1px solid $borderColor;
    padding: $basePx*1.5 $basePx*2; 
    input{
        width: 100%;
        border: 0px;
        color: $text-primary;
        font-size: 12px;
    }
}
</style>