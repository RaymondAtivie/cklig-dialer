<template>
    <div class="tabs">
        <div class="d-flex tab-buttons">
            <ck-button v-for="tab in tabs" :key="tab.value+'-tab'" @click="activateTab(tab.value)"
                tile outline light 
                :class="{active: isActiveTab(tab.value)}"
                class="py-2 px-4"
            >
                {{tab.text}}
            </ck-button>
        </div>
        <div class="border p-3 tab-content">
            <slot></slot>
            <!-- <div class="p-5 border">

            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true,
        },
        value: {
            type: [String, Number],
            default: 1,
        }
    },
    data(){
        return {
            activeTab: this.tabs[0].value,
        }
    },
    watch: {
        value(v){
            this.$emit("input", v);
        }
    },
    methods: {
        isActiveTab(tabValue){
            return this.activeTab === tabValue;
        },
        activateTab(tabValue){
            this.activeTab = tabValue;
            this.$emit("input", tabValue);
        },
    },
}
</script>

<style lang="scss" scoped>
.tabs{
    .tab-buttons{
        position: relative;
        z-index: 2;
        .btn{
            margin-left: $basePx;
        }
        .active{
            background-color: white !important;
            color: $primary !important;
            border-bottom: 1px solid transparent !important;
            font-weight: 500 !important;
        }
    }
    .tab-content{
        position: relative;
        z-index: 1;
        margin-top: -1px;
        min-height: 40vh;
    }
}
</style>