<template>
    <div class="chart" :style="{height: height, width: width, borderRadius: borderRadius}">
        chart
    </div>
</template>
<script>
export default {
    props: {
        height: {
            type: String
        },
        width: {
            type: String
        },
        borderRadius: {
            type: String
        }
    },
}
</script>
<style lang="scss" scoped>
    .chart {
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>