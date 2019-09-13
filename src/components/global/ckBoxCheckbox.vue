<template>
    <p-check class="m-0 ml-2 p-fill p-curve p-icon fs-08" color="primary" v-model="myValue">
        <i slot="extra" class="icon mdi mdi-check"></i>
    </p-check>
</template>

<script>
export default {
    props: {
        value: {
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
        }
    }
}
</script>
