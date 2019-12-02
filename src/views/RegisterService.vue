<template>
    <v-app>
        <div class="register-service">
            <div class="custom-container">
                <div class="top-title-area pt-3">
                    <span>
                        שירותי המערכת - כיצד תרצה להתחיל?
                    </span>
                </div>
                <div class="virtual-number-area">
                    <div class="virtual-number-icon">
                        <div class="icon">
                            <icon name="chevron-right" size="3" />
                        </div>
                        <div class="image">
                            <img src="../assets/IncomingCallsIcon.png" class="w-100" />
                        </div>
                        <div class="icon">
                            <icon name="chevron-left" size="3" />
                        </div>
                    </div>
                    <div class="description-area">
                        <div>
                            <div class="pb-2">
                                <span class="general-text">
                                    מהו מספר וירטואלי
                                </span>
                            </div>
                            <div class="bar">
                                <span>
                                מספר טלפון קווי לקבלת שיחות נכנסות, שמעביר את השיחות בעקוב אחרי, לטלפון אחר. ייחודו של מספר וירטואלי הוא ביכולות הנלוות, כמו: דוחות אונליין (פירוט שיחות, מעקב, שינויים), הקלטת שיחות נכנסות, התראות מייל ו SMS ,השמעת הכרזות, הגדרת שעות פעילות ועוד, שהופכים אותו לכלי עסקי שימושי
                                </span>
                            </div>
                        </div>
                        <div>
                            <div class="pb-2">
                                <span class="general-text mb-5">
                                כיצד עובד השירות  
                                </span>
                            </div>
                            <div class="bar">
                                <span>
                                תקבלו מספר טלפון קווי מסוג 073) או כמה לפי הצורך), כל שיחה נכנסת למספר הווירטואלי תעבור מיד למספר שתגדירו (אפשר שהשיחה תדלג בין כמה מספרים), כל שיחה נרשמת בדוחות (ממשק ניהול וסטטיסטיקה), מוקלטת (ללא עלות נפרדת), תקבלו התראות במצבי חוסר מענה או ניתוק, אפשר להגביל שיחות לפי שעות פעילות, להשמיע פתיח ומוסיקה בהמתנה, להפעיל תא קולי או שיחה חוזרת למייל, לשלוט על השיחה המזוהה ולהשמיע פתיח למקבל השיחה ("יש לכם שיחה נכנסת ממספר ווירטואלי") וגם  ניתן להוציא שיחה מהמספר הווירטואלי (מקבל השיחה לא ייראה את המספר הנייד או הישיר שלכם)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-area py-4">
                    <div class="button-section">
                    </div>
                    <div class="arrow-section">
                        <div>
                            <ck-button 
                                tile
                                outline
                                style="border: 1px solid #f26f3b; color: #f26f3b;"
                            >
                                מידע מורחב אודות מספרים וירטואלים
                            </ck-button>
                        </div>
                        <div class="mr-2">
                            <ck-button 
                                tile 
                                customBg="#f26f3b" 
                                style="border: 1px solid #f26f3b;"
                            >
                                בחר חבילה מותאמת עבורך
                            </ck-button>
                        </div>
                    </div>
                </div>
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
                    <div class="row py-5">
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
                    <div class="invoice-bottom-area">

                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    data(){
        return {
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

        .top-title-area {
            span {
                color: $primary;
                font-size: 35px;
                font-weight: bold;
            }
        }

        .virtual-number-area {
            display: flex;
            padding: 80px 0;


            .virtual-number-icon {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                //flex-direction: column;

                .image {
                    border: 1px solid $text-secondary;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    box-shadow: -1px 3px 25px 2px rgba(188,216,238,1);
                    padding: 50px;
                    display: flex;
                    align-items: center;
                }

                .icon {
                    color: $accent-orange;
                }

            }

            .description-area {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .bar {
                    border-right: 2px solid #e5f4fb; 
                    padding-right: 20px;

                }
            }
        }

        .bottom-area {
            display: flex;

            .button-section {
                flex: 1;
            }

            .arrow-section {
                flex: 1;
                display: flex;
                justify-content: flex-end;
            }
        }

        .selection-area {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-direction: column;


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
        }
    }
</style>
