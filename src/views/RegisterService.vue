<template>
    <v-app>
        <div class="register-service">
            <div class="custom-container">
                <ck-system-service />
                <div class="selection-area mt-5">
                    <div class="title-area">
                        <div class="text-center">
                            <span class="medium">
                                ממשק בחירת
                            </span>
                        </div>
                        <div class="text-center">
                            <span class="large">
                                מספרים וירטואלים
                            </span>
                        </div>
                        <div class="text-center py-3">
                            <ck-button 
                                small 
                                disabled 
                                tile
                            >
                            <small>חזור לבחירת מסלול</small>
                            </ck-button>
                            <ck-button 
                                small 
                                disabled 
                                tile
                                class="mr-2"
                            >
                            <small>מימוש מרובה מספרים</small>
                            </ck-button>
                        </div>
                    </div>
                    <div class="row py-5" id="mymy">
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                disabled
                                :icons="icons.genericDisabled"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                                
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                disabled
                                :icons="icons.genericDisabled"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                disabled
                                :icons="icons.genericDisabled" 
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                disabled
                                :icons="icons.genericDisabled"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.genericInactive"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.genericInactive"
                                height="300px"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                    </div>
                    <div class="row py-5">
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customOne"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customOne"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customTwo"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customThree"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customFour"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                        <div class="col">
                            <ck-selection-card
                                title="טרם נבחר"
                                titleEditable
                                :icons="icons.customFive"
                                :mainInputOptions="titleEditableOptions.main"
                                :sideInputOptions="titleEditableOptions.side"
                                :mainServiceInputOptions="titleEditableOptions.mainService"
                                :subServiceInputOptions="titleEditableOptions.subService"
                            />
                        </div>
                    </div>
                </div>
                <div class="bottom-line-area mt-5">
                    <div class="title-area py-5">
                        <div class="text-center">
                            <span class="medium">
                               שורה תחתונה
                            </span>
                        </div>
                        <div class="text-center">
                            <span class="large">
                              סיכום עלויות החבילה
                            </span>
                        </div>
                    </div>
                    <div class="table-area">
                        <div class="table-item no-bottom drag-right">
                            <div class="monthly-fee-section">
                                <span 
                                    class="bold sec medium"
                                    style="transform: translateX(20px);"
                                >
                                    תשלום חודשי קבוע:
                                </span>
                            </div>
                            <div class="price-section">
                               
                            </div>
                        </div>
                         <div class="table-item drag-right">
                            <div class="monthly-fee-section">
                                <span style="flex: 4">
                                    חבילת 25 מספרים וירטואלים במסלול ״שקט נפשי״
                                </span>
                                <span style="flex: 1; text-align: left" class="light">
                                   25 יח׳
                                </span>
                            </div>
                            <div class="price-section">
                                <span>
                                    450 ₪
                                </span>
                            </div>
                        </div>
                        <div class="table-item drag-right">
                            <div class="monthly-fee-section">
                                <span style="flex: 4">
                                     מספרים נוספים בחבילה
                                </span>
                                <span style="flex: 1; text-align: left" class="light">
                                   10 יח׳
                                </span>
                            </div>
                            <div class="price-section">
                                <span>130  ₪</span>
                            </div>
                        </div>
                         <div class="table-item drag-right">
                            <div class="monthly-fee-section">
                                <span style="flex: 4">
                                    מספרי פלטינה
                                </span>
                                <span style="flex: 1; text-align: left" class="light">
                                  1 יח׳
                                </span>
                            </div>
                            <div class="price-section">
                                <span>50 ₪</span>
                            </div>
                        </div>
                        <div class="table-item drag-right">
                            <div class="monthly-fee-section">
                                <span style="flex: 4">מספרי פרימיום</span>
                                <span style="flex: 1; text-align: left" class="light">
                                  3 יח׳
                                </span>
                            </div>
                            <div class="price-section">
                                <span>60 ₪</span>
                            </div>
                        </div>
                         <div class="table-item drag-right">
                            <div class="monthly-fee-section">
                                <span style="flex: 4">
                                    ממשק שיחות יוצאות
                                </span>
                                <span style="flex: 1; text-align: left" class="light">
                                  3 יח׳
                                </span>
                            </div>
                            <div class="price-section">
                                <span>40 ₪</span>
                            </div>
                        </div>
                         <div class="table-item no-bottom drag-right">
                            <div class="monthly-fee-section align-end">
                                <span class="medium sec bold">
                                    סה״כ עלות חודשית לתשלום כולל מע״מ
                                </span>
                            </div>
                            <div class="price-section justify-content-center">
                                <div class="oval">
                                    <div>
                                        <span class="sec bold">854.10 ₪</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="table-item no-bottom drag-right">
                            <div class="monthly-fee-section align-end">
                                <span class="medium sec">
                                    סכומים החייבים במע״מ
                                </span>
                            </div>
                            <div class="price-section">
                                <span class="sec">730.00 ₪</span>
                            </div>
                        </div>
                         <div class="table-item no-bottom drag-right">
                            <div class="monthly-fee-section align-end">
                                <span class="medium sec">%17 מע״מ</span>
                            </div>
                            <div class="price-section">
                                <span class="sec">124.10 ₪</span>
                            </div>
                        </div>
                    </div>
                    <div class="invoice-bottom-area my-5">
                        <div class="row justify-content-center">
                            <div class="col-10">
                                <div class="row">
                                    <div class="col">
                                        <span class="medium bold sec">
                                            תשלום חודשי מקסמלי לפי שימוש:
                                        </span>
                                    </div>
                                </div>
                                <div class="row border-bottom mr-3">
                                    <div class="col px-0 pb-0 pt-5">
                                        <span>
                                            תקציב חריגה מזמן שימוש סביר
                                        </span>
                                    </div>
                                    <div class="col text-left px-0 pb-0 pt-5">
                                        <span>
                                            100 ₪
                                        </span>
                                    </div>
                                </div>
                                <div class="row border-bottom mr-3">
                                    <div class="col px-0 pb-0 pt-5">
                                        <span>
                                             תקציב הודעות סמס
                                        </span>
                                    </div>
                                    <div class="col text-left px-0 pb-0 pt-5">
                                        <span>
                                            30 ₪
                                        </span>
                                    </div>
                                </div>
                                <div class="row border-bottom mr-3">
                                    <div class="col px-0 pb-0 pt-5">
                                        <span>
                                             תקציב שיחות יוצאות
                                        </span>
                                    </div>
                                    <div class="col text-left px-0 pb-0 pt-5">
                                        <span>
                                            150 ₪
                                        </span>
                                    </div>
                                </div>
                                <div class="row border-bottom mr-3">
                                    <div class="col px-0 pb-0 pt-5">
                                        <span class="font-weight-bold">
                                             סה״כ מחיר מקסימלי צפוי לתשלום לפי שימוש
                                        </span>
                                    </div>
                                    <div class="col text-left px-0 pb-0 pt-5">
                                        <span class="font-weight-bold">
                                            280 ₪
                                        </span>
                                    </div>
                                </div>
                                <div class="row actions">
                                    <div class="col">
                                        <v-row align="center">
                                            <v-checkbox
                                                v-model="checkbox1"
                                                hide-details
                                                color="#ff6430"
                                                class="shrink mr-2 mt-0"
                                            ></v-checkbox>
                                            <span>
                                                אני מאשר שקראתי בעיון את <u>תקנון השימוש</u>
                                            </span>
                                        </v-row>
                                    </div>
                                    <div class="col-3 text-left px-0">
                                        <ck-button
                                            block
                                            customBg="#ff6430"
                                            class="border-0"
                                        >
                                            הירשם לחבילה זו
                                        </ck-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <ck-virtual-number-card-selection />
                </div>
                <div class="mt-5">
                    <ck-system-service />
                </div>
                <div>
                    <ck-date-tab />
                </div>
                <div class="outgoing-call-area">
                    <div class="title-area mb-5">
                        <div class="text-center">
                            <span class="medium">
                                ממשק בחירת
                            </span>
                        </div>
                        <div class="text-center">
                            <span class="large">
                                ממשקי שיחות יוצאות
                            </span>
                        </div>
                        <div class="text-center py-3">
                            <ck-button 
                                small 
                                disabled 
                                tile
                            >
                            <small>חזור לבחירת מסלול</small>
                            </ck-button>
                            <ck-button 
                                small 
                                disabled 
                                tile
                                class="mr-2"
                            >
                            <small>מימוש מרובה מספרים</small>
                            </ck-button>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col">
                            <ck-outgoing-call />
                        </div>
                        <div class="col">
                            <ck-outgoing-call 
                                :icons="outgoingCalls.second.icons"
                                :legal="outgoingCalls.second.legal"
                            />
                        </div>
                        <div class="col">
                            <ck-outgoing-call />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>
<script>
import DataTab from './DateTab/DateTab';

export default {
    components: {
        ckDateTab: DataTab
    },
    data(){
        return {
            checkbox1: true,
            outgoingCalls: {
                second: {
                    legal: true,
                    icons: [
                        {
                            state: 'error',
                            icon: 'account',
                            iconText: 'בחר מספר'
                        },
                        {
                            state: 'success',
                            icon: 'magnify',
                            iconText: 'מספר רגיל'
                        },
                        {
                            state: 'disabled',
                            icon: 'bookmark',
                            iconText: 'שירות ראשי'
                        },
                        {
                            state: 'success',
                            icon: 'download',
                            iconText: 'הפעלה מערכתית'
                        }
                    ]
                }
            },
            titleEditableOptions: {
                main: {
                    
                },
                side: {
                    allowIcon: false,
                    placeholder: '073',
                    items: [
                        '073',
                        '045'
                    ]
                },
                mainService: {
                    allowIcon: false,
                    label: 'שירות ראשי',
                    placeholder: 'בחר שירות ראשי',
                    items: [
                        'ממשק שיחות יוצאות',
                        'ללא שיחות יוצאות'
                    ],
                    itemTextAccentOrange: true,
                    backgroundColor: 'transparent',
                    innerBorder: '#e0e1e0',
                    
                },
                subService: {
                    allowIcon: false,
                    label: 'שירות משלים',
                    placeholder: 'ללא שיחות יוצאות',
                    items: [
                        'ממשק שיחות יוצאות',
                        'ללא שיחות יוצאות'
                    ],
                    itemTextAccentOrange: true,
                    backgroundColor: 'transparent',
                    innerBorder: '#e0e1e0',
                    
                }
            },
            icons: {
                genericDisabled: [
                    {
                        icon: 'bookmark',
                        state: 'disabled',
                        iconText: 'בחר מספר'
                    },
                    {
                        icon: 'check',
                        state: 'disabled',
                        iconText: 'בחר שם'
                    },
                    {
                        icon: 'arrow-down-bold',
                        state: 'disabled',
                        iconText: 'שירות ראשי'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'disabled',
                        iconText: 'שיחות יוצאות'
                    }
                ],
                genericInactive: [
                    {
                        icon: 'bookmark',
                        state: 'inactive',
                        iconText: 'בחר מספר'
                    },
                    {
                        icon: 'check',
                        state: 'inactive',
                        iconText: 'בחר שם'
                    },
                    {
                        icon: 'arrow-down-bold',
                        state: 'inactive',
                        iconText: 'שירות ראשי'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'inactive',
                        iconText: 'י שיחות יוצאות'
                    }
                ],
                customOne: [
                    {
                        icon: 'trophy',
                        state: 'warning',
                        iconText: 'מספר פלטינה'
                    },
                    {
                        icon: 'check',
                        state: 'inactive',
                        iconText: 'בחר שם'
                    },
                    {
                        icon: 'arrow-down-bold',
                        state: 'inactive',
                        iconText: 'שירות ראשי'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'inactive',
                        iconText: 'שיחות יוצאות'
                    }
                ],
                customTwo: [
                    {
                        icon: 'trophy',
                        state: 'warning',
                        iconText: 'מספר פלטינה'
                    },
                    {
                        icon: 'close',
                        state: 'error',
                        iconText: 'שם לא תקין'
                    },
                    {
                        icon: 'microphone',
                        state: 'success',
                        iconText: 'תא קולי'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'inactive',
                        iconText: 'שיחות יוצאות'
                    }
                ],
                customThree: [
                    {
                        icon: 'bookmark',
                        state: 'success',
                        iconText: 'מספר רגיל'
                    },
                    {
                        icon: 'check',
                        state: 'success',
                        iconText: 'שם תקין'
                    },
                    {
                        icon: 'share-variant',
                        state: 'success',
                        iconText: ' העברת שיחה'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'inactive',
                        iconText: 'שיחות יוצאות'
                    }
                ],
                customFour: [
                    {
                        icon: 'bookmark',
                        state: 'success',
                        iconText: 'מספר רגיל'
                    },
                    {
                        icon: 'check',
                        state: 'success',
                        iconText: 'שם תקין'
                    },
                    {
                        icon: 'share-variant',
                        state: 'success',
                        iconText: ' העברת שיחה'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'success',
                        iconText: 'שיחות יוצאות'
                    }
                ],
                customFive: [
                    {
                        icon: 'star',
                        state: 'warning',
                        iconText: 'מספר פרימיום'
                    },
                    {
                        icon: 'check',
                        state: 'success',
                        iconText: 'שם תקין'
                    },
                    {
                        icon: 'share-variant',
                        state: 'success',
                        iconText: ' העברת שיחה'
                    },
                    {
                        icon: 'phone-outgoing',
                        state: 'success',
                        iconText: 'שיחות יוצאות'
                    }
                ],
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .register-service {

        .custom-container {
           padding: 0 50px;
        }

        .general-text {
            color: $primary-secondary;
            font-size: 30px;
            font-weight: bold;
        }

        .title-area {
            span {
                color: #4183c4;
                font-weight: bold;

                &.medium {
                    font-size: 30px;
                }

                &.large {
                    font-size: 50px;
                }
            }
        }

        .selection-area {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-direction: column;
        }

        .bottom-line-area {
            .title-area {
                span {
                    color: #4183c4;
                    font-weight: bold;

                    &.medium {
                        font-size: 30px;
                    }

                    &.large {
                        font-size: 50px;
                    }
                }
            }

            .table-area {
                border: 1px solid #e0e1e0;
                padding: 60px;
                //display: flex;
                //direction: ltr;
                //display: flex;3

                .table-item {

                    border: 1px solid #e0e1e0; 
                    border-top: none; 
                    border-left: none; 
                    border-right: none; 
                    display: flex;

                    &.drag-right {
                        margin-right: 25px;
                    }

                    span {
                        color: #616161;
                        font-size: 25px;
                        font-weight: lighter;

                        &.sec {
                            color: #4183c4;
                        }

                        &.bold {
                            font-weight: bold;
                        }
                        &.medium {
                            font-size: 30px;
                        }
                        &.light {
                            opacity: 0.2;
                        }
                    }

                    &.no-bottom {
                        border-bottom: none;
                    }
                    
                    .monthly-fee-section {
                        flex: 9;
                        display: flex;
                        padding: 20px 0 0 70px;
                        
                        &.align-end {
                            justify-content: flex-end;

                        }
                    }

                    .price-section {
                        flex: 1;
                        border-right: 1px solid #e0e1e0;
                        display: flex;
                        justify-content: flex-end;
                        padding: 20px 0 0;
                        position: relative;

                        .oval {
                            padding: 10px 2px;
                            width: 100%; 
                            border-radius: 50%;
                            border: 2px solid $accent-orange; 
                            transform: translateX(-20px);
                            transform: rotate(7deg);
                            text-align: center;
                            position: absolute;

                            div {
                                transform: rotate(-7deg);
                            }
                        }

                    }
                }
            }

            .invoice-bottom-area {

                span {
                    color: #616161;
                    font-size: 25px;
                    font-weight: lighter;

                    &.sec {
                        color: #4183c4;
                    }

                    &.bold {
                        font-weight: bold;
                    }
                    &.medium {
                        font-size: 30px;
                    }
                    &.light {
                        opacity: 0.2;
                    }
                }

                .actions {
                    padding-top: 100px;
                }
            }
        }

        .outgoing-call-area {

        }
    }
</style>
