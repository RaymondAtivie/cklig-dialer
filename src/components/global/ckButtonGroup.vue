<template>
    <div class="d-flex">
        <div></div>
    </div>
    <!-- <button class="btn" :class="btnClass" :disabled="disabled">
        <slot></slot>
    </button> -->
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        accent: {
            type: Boolean,
            default: false,
        },
        outline: {
            type: Boolean,
            default: false,
        },
        flat: {
            type: Boolean,
            default: false,
        },
        block: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        tile: {
            type: Boolean,
            default: false,
        },
        success: {
            type: Boolean,
            default: false,
        },
        small: {
            type: Boolean,
            default: false,
        },
        large: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        btnClass(){
            return {
                'accent': this.accent,
                'btn-outline': this.outline,
                'btn-flat': this.flat,
                'btn-block': this.block,
                'btn-tile': this.tile,
                'success': this.success,
                'btn-small': this.small,
                'btn-large': this.large,
            }
        }
    }
}
</script>