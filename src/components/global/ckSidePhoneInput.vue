<template>
    <div class="phone-input" :style="{ border: disabled && '1px dashed #a3a7a3', opacity: disabled && '0.5', 'background-color': disabled && 'fbfbfc'}">
        <div class="first-section">
            <div>
                <div>
                   <span class="unique-number-identifer-text" :class="{'text-danger': reference}">
                       מזהה ייחודי למספר
                   </span>
                </div>
                <div >
                    <span class="unique-number-identifer" :class="{'text-danger': reference}">
                        {{ uniqueIdentifier }}
                    </span>
                </div>
            </div>
        </div>
        <div class="second-section">
            <template v-if="warning || success">
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
            <div v-if="reference">
                <span class="text-danger">
                   {{ referenceText }}
                </span>
            </div>
        </div>
        <div class="third-section">
            <div 
                class="icon-wrapper" 
                :class="{'p-4': !reference, 'reference-icon-size': reference}"
            >
                <ck-icon-circle
                    v-if="!reference"
                    :icon="icon" 
                    class="custom-icon" 
                    :customColor="disabled ? '#9e9e9e' : ''" 
                    :customBg="disabled ? 'ffffff' : '' || dark ? 'black' : ''" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
                <img v-else src="../../assets/chromeLogo.png" class="w-100" />
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
        reference: {
            type: Boolean,
            default: false
        },
        referenceText: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        uniqueIdentifier: {
            type: String,
            required: true
        },
        incomingCalls: {
            type: String
        },
        missedCalls: {
            type: String
        },
        cutOffCalls: {
            type: String
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
        justify-content: flex-end;

        .first-section {
            flex: 1;
            
            .unique-number-identifer {
                font-size: 20px;
                font-weight: bold;
            }
            .unique-number-identifer-text{
                font-size: 15px;
            }
        }
        .second-section {
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #e0e1e0;
            height: 100%;

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

        .third-section {
            display: flex;
            align-items: center;
            transform: translateX(-47px);
            //border-right: 1px solid #e0e1e0;
            //padding-right: 20px;

            .reference-icon-size {
                width: 55px !important;
                height: 55px !important;
                padding: 2px;
            }
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
        }
    }
</style>