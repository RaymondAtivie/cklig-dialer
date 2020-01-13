<template>
    <div class="chart-values-indicator">
        <div class="value" v-for="(value, index) in values" :key="value.text">
            <div class="num" :class="numClass(index)" :style="{backgroundColor: customColors && customColors.length > 0 ? customColors[index] || color : color}">
                <span class="bold">{{ value.num }}</span>
            </div>
            <div class="text">
                <span>
                    {{ value.text }}
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            required: true
        },
        values: {
            type: Array,
            required: true
        },
        customColors: {
            type: Array
        },
        fade: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        numClass(value){
            if(!this.fade){
                return;
            }
            return {
                'faint-1': value === 1, 
                'faint-2': value === 2
            };
        }
    }
}
</script>
<style lang="scss" scoped>
    .chart-values-indicator {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .value {
            display: flex;
            align-items: center;

            .num {
                padding: 10px;
                margin-top: 3px;
                margin-bottom:  3px;

                &.faint-1 {
                    opacity: 0.8;
                }
                 &.faint-2 {
                    opacity: 0.5;
                }
            }

            .text {
                //padding-right: 20px;
                flex: 1;
                padding: 10px;
                background-color: #fbfcfd;
                span {
                    color: #000000;
                }
            }

            span {
                color: white;

                &.bold {
                    font-weight: bold;
                }
            }
        }
    }
</style>