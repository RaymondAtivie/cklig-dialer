<template>
    <div class="outgoing-call">
        <div class="top">
             <span>ממשק שיחות יוצאות</span>
        </div>
        <div class="icon">
            <div class="wrapper">
                <ck-icon-circle
                    icon="account"
                    success
                    class="p-4"
                    size="2"
                />
            </div>
        </div>
        <div class="overlay-content" v-if="overlay">
            <div class="main-overlay-content">
                 <img src="../../assets/OutgoingCall.png" class="w-100" />
                 <div>
                     <span>
                        צור נציג חדש<br />
                        או בחר משתמש קיים
                     </span>
                 </div>
            </div>
        </div>
        <div class="input-area">
            <div>
                <span class="input-area-title">
                    צור נציג חדש או בחר <u style="color: #2384c8">משתמש קיים</u>
                </span>
            </div>
            <div class="row pt-3">
                <div class="col">
                    <ck-input
                        label="שם פרטי"
                        inverse
                    />
                </div>
                <div class="col pr-0">
                    <ck-input
                        label="שם משפחה"
                        inverse
                    />
                </div>
            </div>
            <div class="my-2">
                <ck-input
                    label="טלפון נייד"
                    inverse
                />
            </div>
            <div class="my-2">
                <ck-input
                    label="דוא״ל"
                    inverse
                />
            </div>
            <div class="my-2">
                <ck-input
                    label="סיסמא"
                    inverse
                >
                    <template v-slot:icon>
                        <div style="display: flex;">
                            <ck-icon-circle customBg="#e0e1e0" customColor="#9e9e9e" icon="eye" class="p-3 ml-2" size="1.1" />
                             <ck-icon-circle customBg="#e0e1e0" customColor="#9e9e9e" icon="auto-fix" class="p-3" size="1.1" />
                        </div>
                    </template>
                </ck-input>
            </div>
             <div>
                <span class="titles mt-5 mb-3">
                    מספר מזוהה בשיחה
                </span>
            </div>
            <div class="divider"></div>
            <div class="icon px-0">
                <div class="wrapper">
                    <ck-icon-circle
                        icon="magnify"
                        success
                        class="p-4"
                        size="2"
                    />
                </div>
            </div>
            <div style="margin-top: -33px; margin-bottom: 37px;">
                <span class="input-area-title">
                  המספר שיוצג אצל מקבל השיחה
                </span>
            </div>
            <div class="toggle-area">
                <div class="sec d-flex justify-content-center align-items-center">
                   <span :class="{'disabled': !toogle}"> מספר אישי חופשי</span>
                </div>
                <div style="flex: 1;" class="d-flex justify-content-center align-items-center">  
                    <toggle-button 
                        class="mb-0"
                        :color="toggleColorOption"
                        v-model="toogle"
                        :height="30"
                        :width="60"
                    />
                </div>
                <div class="sec d-flex justify-content-center align-items-center">
                  <span :class="{'disabled': toogle}"> מספר וירטואלי</span>
                </div>
            </div>
            <div class="selected-number-area my-2">
                <div class="right" :class="{'flex-column': saved}">
                    <div class="button-area" v-if="!saved">
                        <ck-button
                            success
                            tile
                            small 
                            @click="save"
                        >
                            שריין מספר עכשיו!
                        </ck-button>
                    </div>
                    <div class="text-section" v-if="!saved">
                        <div>
                            <span>המספר הנבחר</span>
                        </div>
                        <div>
                            <span class="large bold">2681986</span>
                        </div>
                    </div>
                    <div class="saved" v-if="saved">
                        <div>
                            <span>המספר הנבחר</span>
                        </div>
                    </div>
                    <div v-if="saved" @click="saved = false" class="saved-icon">
                        <icon name="plus-circle" size="1.3" class="ml-2" success />
                        <icon name="file-multiple" size="1.3" color="#fbb515" />
                    </div>
                </div>
                <div class="left">
                    <ck-auto-complete
                        :items="selectedNumberLeftInputOptions.items"
                        :placeholder="selectedNumberLeftInputOptions.placeholder"
                        :label="selectedNumberLeftInputOptions.label"
                        :allowIcon="selectedNumberLeftInputOptions.allowIcon"
                    />
                </div>
            </div>
            <div class="" v-if="!legal">
                <ck-input 
                    v-model="numberInput"
                    label="שם ייחודי"
                    inverse
                />
            </div>
            <div v-if="legal" class="legal my-2">
                <div style="flex: 1;" class="d-flex justify-content-center align-items-center">
                    <div>
                        <icon name="alert" size="2" />
                    </div>
                </div>
                <div style="flex: 6;" class="d-flex justify-content-center flex-column">
                    <div>
                        <span class="bold">הנחיות משפטיות בנושא מספר מזוהה</span>
                    </div>
                    <div>
                        <span>הסבר קצר אודות מספר מזוהה והתוקף המשפטי. <u>למידע נוסף</u></span>
                    </div>
                </div>
            </div>
            <div class="mt-5 mb-3">
                <span class="titles">מספר מפעיל</span>
            </div>
            <div class="divider"></div>
            <div class="icon px-0">
                <div class="wrapper">
                    <ck-icon-circle
                        icon="download"
                        success
                        class="p-4"
                        size="2"
                    />
                </div>
            </div>
            <div style="margin-top: -33px; margin-bottom: 37px;">
                <span class="input-area-title">
                  לאיזה מספר יש לחייכ כדי להוציא שיחות
                </span>
            </div>
            <div class="toggle-area">
                <div class="sec d-flex justify-content-center align-items-center">
                   <span :class="{'disabled': !toogle2}">מספר מערכת</span>
                </div>
                <div style="flex: 1;" class="d-flex justify-content-center align-items-center">  
                    <toggle-button 
                        class="mb-0"
                        :color="toggleColorOption"
                        v-model="toogle2"
                        :height="30"
                        :width="60"
                    />
                </div>
                <div class="sec d-flex justify-content-center align-items-center">
                  <span :class="{'disabled': toogle2}">מספר וירטואלי</span>
                </div>
            </div>
            <div class="number-display my-2">
                <span>03-6012-400</span>
            </div>
            <div class="icons-area">
                <div v-for="icon in myIcons" :key="icon.iconText">
                    <div class="icon">
                        <div class="wrapper">
                            <ck-icon-circle
                                :icon="icon.icon"
                                class="custom-icon p-4"
                                size="2"
                                :error="icon.state === 'error'" 
                                :success="icon.state === 'success'" 
                                :warning="icon.state === 'warning'"
                                :customColor="icon.state === 'disabled' ? '#ffffff' : '' || icon.state === 'inactive' ? 'white' : ''" 
                                :customBg="icon.state === 'disabled' ? '#fbfcfd' : '' || icon.state === 'inactive' ? '#e0e1e0' : ''" 
                            />
                        </div>
                    </div>
                    <div 
                        class="text-center mt-2 icon-text" 
                        :class="setTextColor(icon.state)"
                    >
                        {{ icon.iconText }}
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="block">
                    <span>
                        החל הגדרות על כל המספרים
                    </span>
                </div>
                <div class="block mr-2">
                    <span>
                        החל מכאן מספרים עוקבים
                    </span>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { ToggleButton } from 'vue-js-toggle-button';

export default {
    components: {
        // eslint-disable-next-line
        ToggleButton,
    },
    data(){
        return {
            saved: false,
            selectedNumberLeftInputOptions: {
                items: [
                    '073',
                    '045',
                    '032'
                ],
                placeholder: '073',
                label: 'קידומת',
                allowIcon: false
            },
            myIcons: this.icons,
            numberInput: 'אם המספר קיים ברשותו - יופיעו פרטי המספר',
            toogle: false,
            toogle2: false,
            toggleColorOption: {
                checked: '#1cc44f',
                unchecked: '#1cc44f'
            }
        }
    },
    props: {
        overlay: {
            type: Boolean,
            default: false,
        },
        legal: {
            type: Boolean,
            default: false,
        },
        icons: {
            type: Array,
            default(){
                return [
                    {
                        state: 'success',
                        icon: 'account',
                        iconText: 'משתמש תקין'
                    },
                    {
                        state: 'success',
                        icon: 'magnify',
                        iconText: 'מספר רגיל'
                    },
                    {
                        state: 'success',
                        icon: 'bookmark',
                        iconText: 'י מספר רגי'
                    },
                    {
                        state: 'success',
                        icon: 'download',
                        iconText: 'הפעלה מערכתית'
                    }
                ]
            }
        }
    },
    methods:  {
        save(){
            this.saved = true;
        },
        setTextColor(type){
            return {
                'selection-warning': type === 'warning',
                'selection-error': type === 'error',
                'selection-success': type === 'success',
                'selection-disabled': type === 'disabled',
                'selection-inactive': type === 'inactive'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .outgoing-call {
        border: 1px solid #e0e1e0;
        position: relative;

        .icon {
            padding: 0 15px;
            margin-top: -33px;
            display: flex;
            justify-content: flex-end;

            .wrapper {
                background-color: #ffffff;
                border: 1px solid #e0e1e0;
                padding: 3px;
                border-radius: 50%;
            }
        }

        .top {
            padding: 15px;
            background-color: $primary-secondary;

            span {
                font-size: 32px;
                font-weight: bold;
                color: #ffffff;
            }
        }

        .input-area {
            margin-top: -33px;
            background-color: #ffffff;
            padding: 0 15px 15px;

            .input-area-title {
                color: $text-primary;
                font-size: 15px;
                font-weight: lighter;
            }

            .titles {
                font-size: 32px;
                font-weight: bold;
                color: $primary-secondary;
            }

            .divider {
                border-top: 1px solid #e0e1e0;
                margin: 0 -15px;
            }

            .toggle-area {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #e0e1e0;
                padding: 9px 15px;

                .sec {
                    flex: 2;

                    span {
                        font-weight: bold;
                        font-size: 20px;

                        &.disabled {
                            opacity: 0.3;
                            pointer-events: none;
                        }
                    }
                }
                
            }

            .selected-number-area {
                display: flex;

                .right {
                    flex: 2;
                     border: 1px solid #e0e1e0;
                     padding: 0 10px;
                     display: flex;
                     justify-content: space-between;
                     align-items: center;

                     .button-area {

                     }

                     .text-section {
                         display: flex;
                         align-items: flex-end;
                         flex-direction: column;

                         span {
                             font-size: 12px;
                             color: $text-primary;

                             &.large {
                                 font-size: 20px;
                            }

                             &.bold {
                                 font-weight: bold;
                             }
                         }
                     }

                     .saved {
                         
                         span {
                            font-size: 12px;
                            color: $text-primary;
                         }
                     }

                     .saved-icon {
                         width: 100%;
                         text-align: right;
                     }
                }

                .left {
                    flex: 1;
                    border: 1px solid #e0e1e0;
                    margin-right: 10px;
                }
            }

            .legal {
                display: flex;
                border: 1px solid #e0e1e0;
                align-items: center;
                padding: 0 9px;

                span {
                    font-size: 13px;

                    &.bold {
                        font-weight: bold;
                    }
                }
            }

            .number-display {
                text-align: center;
                border: 1px solid #e0e1e0;
                padding: 10px;

                span {
                    font-size: 20px;
                    font-weight: bold;
                    color: $text-primary;
                }
            }

            .icons-area {
                border-top: 1px solid $text-disabled;
                //padding: 0 2px;
                margin: 55px -15px 0;
                display: flex;
                justify-content: space-between;

                .icon-text {

                    word-break: break-all;
                    font-size: 11px;

                    &.selection-warning {
                        color: #fbb515!important;
                    }
                    &.selection-disabled {
                        color: #fbfcfd !important;
                    }
                    &.selection-success {
                        color: #1cc44f;
                    }
                    &.selection-error {
                        color: #ff0e00;
                    }
                    &.selection-inactive {
                        color: #e0e1e0 !important;
                    }
                }
            }

            .bottom {
                padding: 20px;
                display: flex;
                justify-content: center;

                .block {
                    background-color: #fbfcfd;
                    padding: 10px;
                    width: 100%;
                    text-align: center;
                    color: $text-disabled;

                    span {
                        font-size: 13px;
                    }
                }
            }
        }

        .overlay-content {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background: transparentize($color: #ffffff, $amount: 0.1);
            height: 91%;
            z-index: 200;
            //margin-top: -35px;
            
            .main-overlay-content {
                //width: 250px;
                //height: 250px;
                text-align: center;
                span {
                    font-size: 32px;
                    font-weight: bold;
                    color: $primary-secondary;
                }
            }
        }
    }
</style>