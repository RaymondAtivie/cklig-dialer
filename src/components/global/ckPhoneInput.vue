<template>
    <div class="phone-input" :style="{ border: disabled && '1px dashed #a3a7a3', opacity: disabled && '0.5', 'background-color': disabled && 'fbfbfc'}">
        <div class="first-section">
            <div class="icon-wrapper p-4">
                <ck-icon-circle 
                    :icon="icon" 
                    class="custom-icon" 
                    :customColor="disabled ? '#9e9e9e' : ''" 
                    :customBg="disabled ?'ffffff' : '' || dark ? 'black' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
            </div>
            <div class="mr-3">
                <div>
                   <span class="unique-number-identifer-text">
                       מזהה ייחודי למספר
                   </span>
                </div>
                <div >
                    <span class="unique-number-identifer">
                        {{ uniqueIdentifier }}
                    </span>
                </div>
            </div>
        </div>
        <div class="second-section" >
            <template v-if="warning || success">
                <div>
                    <span class="incoming-calls-text">שם מספר - שיחות נכנסות</span>
                </div>
                <div >
                    <span class="incoming-calls">
                        {{ nameNumber }}
                    </span>
                </div>
            </template>
        </div>
        <div class="third-section">
            <template  v-if="warning || success">
                <div class="list first">
                    <div>
                        <span class="bold large">{{incomingCalls}}</span>
                    </div>
                    <div>
                        <span>שיחות נכנסות</span>
                    </div>
                </div>
                <div class="list second">
                    <div>
                        <span class="bold large">{{missedCalls}}</span>
                    </div>
                    <div>
                        <span>שיחות שנענו</span>
                    </div>
                </div>
                <div class="list third">
                    <div>
                        <span class="bold large">{{cutOffCalls}}</span>
                    </div>
                    <div>
                        <span>שיחות נותקו</span>
                    </div>
                </div>
            </template>
        </div>
        <div class="fourth-section">
            <div class="">
                <icon name="dots-vertical" size="2" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            default: "phone-incoming"
        },
        error: {
            type: Boolean,
            default: false
        },
        warning: {
            type: Boolean,
            default: false
        },
        success: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        uniqueIdentifier: {
            type: String,
            required: true
        },
        nameNumber: {
            type: String,
            required: true
        },
        incomingCalls: {
            type: String,
            required: true
        },
        missedCalls: {
            type: String,
            required: true
        },
        cutOffCalls: {
            type: String,
            required: true
        }

    },
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .phone-input {
        min-height: 90px;
        max-height: 100px;
        width: 100%;
        border: 1px solid #e0e1e0;
        padding: 20px;
        display: flex;
        align-items: center;
        background-color: white;

        .first-section {
            display: flex;
            align-items: center;
            transform: translateX(44px);
            //border-left: 1px solid #e0e1e0;
            //padding-left: 20px;
            
            .icon-wrapper {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid #e0e1e0;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;

                .custom-icon {
                    padding: 1.3rem;
                }
            }
            .unique-number-identifer {
                font-size: 20px;
                font-weight: bold;
            }
            .unique-number-identifer-text{
                font-size: 15px;
            }
        }

        .second-section {
            border-left: 1px solid #e0e1e0;
            border-right: 1px solid #e0e1e0;
            padding-left: 30px;
            padding-right: 30px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .incoming-calls{
                font-size: 20px;
                font-weight: bold;
            }
            .incoming-calls-text {
                font-size: 15px;
            }
        }

        .third-section {
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid #e0e1e0;
            padding-left: 20px;
            height: 100%;
            flex: 1;

            .list {
                padding-left: 10px;
                padding-right: 10px; 

                .bold {
                    font-weight: bold;
                }

                .large {
                    font-size: 25px;
                }

                font-size: 15px;

                &.first {
                    span {
                        color: #bcddf4;

                    }
                }

                &.second {
                    span {
                        color: #c7e4c8;
                    }
                }

                &.third {
                    span {
                        color: #f9ccd2;
                    }
                }
            }
        }

        .fourth-section {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>