<template>
    <div class="phone-time">
        <div class="first-section">
            <span>{{ topText }}ח</span>
        </div>
        <div class="second-section">
            <div class="icon">
                <icon :name="rightIcon" size="2" />
            </div>
            <div class="time">
                <span>{{ time }}</span>
            </div>
            <div class="icon">
                <icon name="phone" size="2" />
            </div>
        </div>
        <div class="third-section">
            <span>סך שיחות שהתקבלו - פילוח לפי זמן שיחה +/- 30 שניות</span>
        </div>
        <div class="fourth-section">
            <div class="box">
                <span>30s+</span>
            </div>
            <div class="green">
                <span>{{ totalCallOverThirty }}</span>
            </div>
            <div class="red">
                <span>{{ totalCallBelowThirty }}</span>
            </div>
             <div class="box">
                <span>30s-</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        topText: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        rightIcon: {
            type: String,
            default: 'account-group'
        },
        totalCallOverThirty: {
            type: String,
            required: true
        },
        totalCallBelowThirty: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss" scoped>
    .phone-time {
        color: black;
        border: 1px solid #606060;
        display: flex;
        flex-direction: column;
        padding: 4px 7px;

        .first-section {
            background-color: $text-primary;
            color: $color-light;
            display: flex;
            justify-content: center;
            padding-top: 10px;
            padding-bottom: 10px;

            span {
                font-size: 15px;
                font-weight: bold;
            }
        }

        .second-section {
            display: flex;
            justify-content: space-evenly;
            padding-top: 5px;

            .time {
                flex: 1;
                border: 1px solid $text-primary;
                display: flex;
                align-items: center;
                justify-content: center;

                span {
                    font-size: 30px;
                    font-weight: bold;
                    color: $text-primary;
                }
            }

            .icon {
                background-color: #fbfcfd;
                padding: 25px;
                margin-right: 3px;

                &:first-of-type {
                    margin-left: 3px;
                    margin-right: 0px;
                }
                
            }
            
        }

        .third-section {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px 0;

            span {
                font-size: 20px;
                font-weight: bold;
                color: $text-primary;
            }
        }

        .fourth-section {
            display: flex;
            justify-content: space-between;
            padding-top: 5px;

            .green {
                flex: 2;
                background-color: $accent-green;
                display: flex;
                align-items: center;
                justify-content: center;

                span {
                    color: $color-success;
                    font-size: 30px;
                    font-weight: bold;
                }
            }

            .red {
                flex: 1;
                background-color: #ffcad0;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 3px;

                span {
                    color: $color-danger;
                    font-size: 30px;
                    font-weight: bold;
                }
            }

            .box {
                background-color: #fbfcfd;
                padding: 25px;
                margin-right: 3px;

                &:first-of-type {
                    margin-left: 3px;
                    margin-right: 0px;
                }

                span {
                    font-size: 15px;
                    font-weight: bold;
                    color: $text-primary;
                }
            }
        }
    }
</style>