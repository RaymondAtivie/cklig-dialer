<template>
    <div class="d-flex flex-column align-items-center justify-content-center h-100 chart-percentage-card" :style="{color: color}">
        <div>
            <span class="large">{{ percentage }}</span>
        </div>
        <div>
            <span class="block-sub-title">
                {{ description }}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        percentage: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .chart-percentage-card {
            background-color: #fbfcfd;
            span {
                &.large {
                    font-size: 35px;
                    font-weight: bold;
                    line-height: 1px;
                }
            }
        }
</style>