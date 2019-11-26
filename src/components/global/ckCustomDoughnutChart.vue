<template>
    <div class="custom-doughnut-chart">
        <ck-doughnut-chart
            :chartData="chartData"
            :options="options"
            :width="450"
            :height="450"
        />
        <div class="center-text">
            <div style="width: 150px">
                <span class="small">{{title}}</span>
            </div>
            <div class="large bold">
                <span>{{ value }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['doughnutChartData', ],
    props: {
        chartData: {
            type: Object,
            required: true
        },
        options: {
            type: Object,
            default(){
                return {
                    maintainAspectRatio: false
                }
            }
        },
        title: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-doughnut-chart {

    .center-text {
        padding: 20px;
        background-color: transparent;
        transform: translateY(-271px);
        text-align: center;
        //width: 370px;
        word-break: break-all;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .large {
            font-size: 30px;
        }

        .bold {
            font-weight: bold;
        }

        .small {
            font-size: 12px;
        }
    }
}
</style>