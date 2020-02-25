<template>
    <div class="phone-input" 
        :style="{
            border: (disabled && '1px dashed #a3a7a3') || (activeStateColor && `1px solid ${activeStateColor}`), 
            opacity: disabled && '0.5', 'background-color': disabled && 'fbfbfc',
            backgroundColor: clicked ? `${overlayColor}` : 'initial'
        }">
        <div class="first-section">
            <div 
                class="icon-wrapper p-4" 
                :class="{ 'clickable-state' : clickable }"
            > 
                <ck-icon-circle 
                    :icon="icon" 
                    class="custom-icon" 
                    :customColor="disabled ? '#9e9e9e' : ''" 
                    :customBg="(disabled ? 'ffffff' : '') || (dark ? 'black' : '') || (activeStateColor ? activeStateColor : '')" 
                    :error="error" 
                    :success="success" 
                    :warning="warning"
                />
            </div>
            <div
                v-if="clickable"
                class="checkbox-wrapper"
            >
                <ck-check-box v-model="clicked"/>
            </div>
            <div class="mr-0" :class="{ 'mr-3': !active || (active && !clickable) }"  :style="{ color: activeStateColor && activeStateColor }">
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
        <div 
            class="second-section" 
            v-if="!active || activeItems.length < 1"
            :style="{ 
                borderLeft: (activeItems.length < 1 && activeStateColor) ? `1px solid ${activeStateColor}` : '',
                borderRight: (activeItems.length < 1 && activeStateColor) ? `1px solid ${activeStateColor}` : '',
                color: activeStateColor && activeStateColor
             }"
        >
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
        <div class="third-section" v-if="!active || activeItems.length < 1">
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
        <div
        v-if="active && activeItems.length > 0"
         :style="{ 
            borderRight: activeStateColor && `1px solid ${activeStateColor}`
         }" 
         class="active-section">
         <div 
            :style="{ 
                flex: activeItems.length > 4 && '1',
                minWidth: activeItems.length > 4 && 'initial',
                backgroundColor: item.bgColor,
                color: activeStateColor, 
            }"
            class="list-box" 
            v-for="(item, index) in activeItems" :key="index"
            @click="setListBoxActive(index)">
            <div>
                <icon :name="item.icon" :color="activeStateColor" />
            </div>
            <div>
                <span class="gen-text">
                 {{ item.text }}
                </span>
            </div>
         </div>
        </div>
        <div class="fourth-section">
            <div class="">
                <icon 
                    name="dots-vertical" 
                    size="2"
                    :color="activeStateColor ? activeStateColor : ''" 
                />
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
        },
        active: {
            type: Boolean,
            default: false,
        },
        activeItems: {
            type: Array,
            default(){
                return [];
            },
        },
        activeStateColor: {
            type: String,
            default: '',
        },
        checkable: {
            type: Boolean,
            default: false,
        },
        clickable: {
            type: Boolean,
            default: false,
        },
        overlayColor: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            clicked: false,
        }
    },
    methods: {
       
        // setListBoxActive(index){
           
        //    //this.activeItems[index].bgColor = 'red;'
        // }
    }
}
</script>
<style lang="scss" scoped>
    .phone-input {
        min-height: 90px;
        max-height: 100px;
        width: 100%;
        border: 1px solid #e0e1e0;
        padding: 20px 20px 20px 0;
        
        display: flex;
        align-items: center;
        background-color: white;


        .gen-text {
            font-size: 15px;
        } 

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

                transform: translateX(6px);
                &.clickable-state {
                    transform: translateX(55px);
                }
            }

            .checkbox-wrapper {
                transform: translateX(42.5px);
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

        .active-section {
            border-right: 1px solid red;
            height: 100%;
            flex: 1;
            display: flex;
            justify-content: flex-end;

            .list-box {
                cursor: pointer;
                min-width: 100px;
                margin: 0 5px;
                padding: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }
        }
    }
</style>