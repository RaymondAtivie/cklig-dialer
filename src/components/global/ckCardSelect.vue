<template>
    <div class="card-select" @click="handle" :class="{ 'active': active}">
        <div class="mt-3">
            <icon :name="icon" size="2" iconBlue />
        </div>
        <div class="active-icon">
            <icon name="check-circle" size="1.8" success v-if="active"/>
        </div>
        <span class="pb-3">
            {{ title }}
        </span>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'cash'
        },
        title: {
            type: String
        },
        active: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        handle(){
            this.$emit('selected');
        }
    }
}
</script>
<style lang="scss"  scoped>
    .card-select {
        width: 130px;
        height: 170px;
        background-color: #ffffff;
        border: 1px solid #e0e1e0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;

        &.active {
            border: 1px solid #5ebc55;
        }

        .active-icon {
            height: 39px;
        }
    }
</style>