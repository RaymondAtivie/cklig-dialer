<template>
    <ck-box stretch :br="br" :primary="myValue">
        <span class="stretch" :class="{'t-disabled': !myValue}">
            {{label}}
        </span>
        <toggle-button color="#2384c8" class="mb-0" :height="18" :width="35" :margin="2" v-model="myValue" />
    </ck-box>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: "",
        },
        br: {
            type: Boolean,
            default: false,
        }
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
