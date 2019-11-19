<template>
    <div class="virtual-number-select" :class="{ active: active }" @click="click">
        <div class="image-section">
            <img src="../../assets/Reports.png" class="w-100" v-if="iconType === 'reports'" />
            <img src="../../assets/Management.png" class="w-100" v-if="iconType === 'management'"/>
            <img src="../../assets/ServiceSettings.png" class="w-100" v-if="iconType === 'settings'" />
        </div>
        <div class="title-section">
            <span>{{ title }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        iconType: {
            type: String,
            validator(value){
                return ['reports', 'management', 'settings'].indexOf(value) !== -1
            }
        },
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        click(){
            this.$emit('click');
        }
    }
}
</script>
<style lang="scss" scoped>
    .virtual-number-select {
        border: 1px solid $color-success;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 100%;
        opacity: 0.5;
        cursor: pointer;

        .image-section {
           padding: 75px;
        }

        .title-section {
            background-color: $color-success;
            width: 100%;
            text-align: center;
            padding: 20px 0;

            span {
                font-size: 25px;
                font-weight: bold;
                color: white;
            }
        }

        &.active {
            opacity: 1;
        }
    }
</style>