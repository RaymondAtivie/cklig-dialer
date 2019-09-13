<template>
    <div class="ck-box" :class="cssClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Boolean,
            default: false,
        },
        primary: {
            type: Boolean,
            default: false,
        },
        accent: {
            type: Boolean,
            default: false,
        },
        stretch: {
            type: Boolean,
            default: false,
        },
        m: {
            type: Boolean,
            default: false,
        },
        ml: {
            type: Boolean,
            default: false,
        },
        mr: {
            type: Boolean,
            default: false,
        },
        mx: {
            type: Boolean,
            default: false,
        },
        mb: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        cssClass(){
            return {
                "w-100": this.block,
                "accent": this.accent,
                "primary": this.primary,
                "stretch": this.stretch,
                "margin-around": this.m,
                "margin-right": this.mr,
                "margin-left": this.ml,
                "margin-horizontal": this.mx,
                "margin-bottom": this.mb,
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.ck-box {
    padding: $basePx*2;
    background-color: $color-light;
    color: $text-primary;
    display: inline-block;
    &.primary{
        background-color: transparentize($color: $primary, $amount: 0.8);
        color: $primary;
        font-weight: 500;
    }
    &.accent{
        background-color: transparentize($color: $accent-orange, $amount: 0.8);
        color: $accent-orange;
        font-weight: 500;
    }
    &.stretch{
        flex: 1;
    }
    &.margin-around{
        margin: $basePx/2;
    }
    &.margin-right{
        margin-right: $basePx;
    }
    &.margin-left{
        margin-left: $basePx;
    }
    &.margin-bottom{
        margin-bottom: $basePx;
    }
    &.margin-horizontal{
        margin-left: $basePx/2;
        margin-right: $basePx/2;
    }
}
</style>