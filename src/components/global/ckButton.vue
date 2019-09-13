<template>
    <button class="btn" :class="btnClass" :disabled="disabled">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props: {
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
    },
    computed: {
        btnClass(){
            return {
                'accent': this.accent,
                'btn-outline': this.outline,
                'btn-flat': this.flat,
                'btn-block': this.block,
            }
        }
    }
}
</script>