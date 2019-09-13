<template>
    <span class="mdi" :class="cssClass"></span>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        spin: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        cssClass() {
            return {
                ['mdi-'+this.name]: true,
                "mdi-spin": this.spin,
            }
        }
    }
}
</script>