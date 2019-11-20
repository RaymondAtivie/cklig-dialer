<template>
    <div>
        <div class="statistic">
            <div class="container">
                <div class="main-title-area py-5">
                    <div class="left-icon">
                        <icon name="chevron-right" size="4" color="#e0e1e0" />
                    </div>
                    <div class="main-title">
                        <span>
                            מספרים וירטואלים
                        </span>
                    </div>
                    <div class="right-icon">
                        <icon name="chevron-left" size="4" color="#e0e1e0" />
                    </div>
                </div>
                <div class="virtual-number-card-display">
                    <div class="first-section">
                        <div class="image-icon-wrapper">
                            <img src="../assets/BarHalfQuater.png" class="w-100"/>
                        </div>
                        <div class="text-area">
                            <div>
                                <span class="large bold">2 מספרים פעילים</span>
                            </div>
                            <div>
                                <span>מתוך 3 מספרים שברשותך</span>
                            </div>
                        </div>
                    </div>
                    <div class="second-section">
                        <div class="image-icon-wrapper">
                            <img src="../assets/BarQuater.png" class="w-100"/>
                        </div>
                        <div class="text-area">
                            <div>
                                <span class="large bold">%86 נוצלו</span>
                            </div>
                            <div>
                                <span>מתקציב החייגן - נותרו 52 דקות</span>
                            </div>
                        </div>
                    </div>
                    <div class="third-section">
                        <div class="image-icon-wrapper">
                            <img src="../assets/ArrowUpRed.png" class="w-100"/>
                        </div>
                        <div class="text-area">
                            <div>
                                <span class="large bold">00:06:22</span>
                            </div>
                            <div>
                                <span>זמן שיחה ממוצע</span>
                            </div>
                        </div>
                    </div>
                    <div class="fourth-section">
                        <div class="image-icon-wrapper">
                            <img src="../assets/ArrowDownGreen.png" class="w-100"/>
                        </div>
                        <div class="text-area">
                            <div>
                                <span class="large bold">7 אג׳ לדקה</span>
                            </div>
                            <div>
                                <span>מחיר ממוצע לחודש זה</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="virtual-number-select-area">
                    <div class="card-select">
                        <ck-virtual-number-select 
                            :active="currentVirtualNumber === 'settings'"
                            iconType="settings"
                            title="הגדרות השירות"
                            @click="handle('settings')"
                        />
                    </div>
                    <div class="card-select">
                        <ck-virtual-number-select
                            :active="currentVirtualNumber === 'management'" 
                            iconType="management" 
                            title=" ניהול ותפעול שוטף"
                            @click="handle('management')" 
                        />
                    </div>
                    <div class="card-select">
                        <ck-virtual-number-select 
                            :active="currentVirtualNumber === 'reports'" 
                            iconType="reports" 
                            title="דוחות וסטטיסטיקות"
                            @click="handle('reports')"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="statistic-two">
            <div class="custom-container">
                <div class="main-title pt-4">
                    <span>רשימת מספרים וירטואלים בחשבון - צוקה</span>
                </div>
                <div class="row py-3 align-items-center">
                    <div class="col">
                        <ck-button small class="py-2 px-4" success>הזמן מספר נוסף</ck-button>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <ck-icon-circle icon="magnify-minus-outline" class="p-4" customBg="#60b4e5"/>
                        <ck-icon-circle icon="filter" class="p-4 mr-2" customBg="#60b4e5"/>
                        <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                        <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                    </div>
                </div>
                <div class="pt-3 mr-4">
                    <span class="general-text">שם קבוצת המספרים לדוגמא</span>
                </div>
                <div class="row pt-3 mr-4">
                    <div class="col">
                        <ck-phone-input 
                            uniqueIdentifier="073-2608086"
                            nameNumber="טלפון ראשי למשרד"
                            incomingCalls="268"
                            missedCalls="247"
                            cutOffCalls="13"
                            success
                        />
                    </div>
                    <div class="col-5">
                        <ck-side-phone-input
                            uniqueIdentifier="073-2608086"
                            nameNumber="שיחה מזוהה - שיחות יוצאות"
                            phone="231-2608086"
                            incomingCalls="19"
                            missedCalls="13"
                            cutOffCalls="4"
                            success
                        />
                    </div>
                </div>
                <div class="row pt-3 mr-4">
                    <div class="col">
                        <ck-phone-input 
                            uniqueIdentifier="073-2878086"
                            nameNumber="טלפון ראשי למשרד"
                            incomingCalls="568"
                            missedCalls="27"
                            cutOffCalls="1389"
                            warning
                        />
                    </div>
                    <div class="col-5">
                        <ck-side-phone-input
                            uniqueIdentifier="שירות שיחות יוצאות לא פעיל "
                            disabled
                            icon="phone-outgoing"
                        />
                    </div>
                </div>
                <div class="row py-3 mr-4">
                    <div class="col">
                        <ck-phone-input 
                            uniqueIdentifier="231-2608086"
                            nameNumber="טלפון ראשי למשרד"
                            incomingCalls="268"
                            missedCalls="387"
                            cutOffCalls="1923"
                            error
                        />
                    </div>
                    <div class="col-5">
                        <ck-side-phone-input
                            uniqueIdentifier="073-2608086"
                            nameNumber="שיחה מזוהה - שיחות יוצאות"
                            phone="231-2608086"
                            incomingCalls="19"
                            missedCalls="13"
                            cutOffCalls="4"
                            error
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="statistic-three">
            <div class="custom-container">
                <div class="main-title pt-4">
                    <span>דוחות וסטטיסטיקות למספר וירטואלי - %שם המספר%</span>
                </div>
                <div class="top-section-card mt-4 p-3">
                    <div class="first-section">
                        <div>
                            <span  class="block-title">
                                073-2681986
                            </span>
                        </div>
                        <div>
                            <span class="block-sub-title">
                            <u>בחר מספר אחר</u>
                            </span>
                        </div>
                    </div>
                    <div class="second-section">
                        <div>
                            <span  class="block-title">
                                דוח שיחות נכנסות
                            </span>
                        </div>
                        <div>
                            <span class="block-sub-title">
                            <u>בחר דוח אחר</u>
                            </span>
                        </div>
                    </div>
                    <div class="third-section">
                        <div>
                            <span  class="block-title">
                                01/01/2019 - 31/01/2019
                            </span>
                        </div>
                        <div>
                            <span class="block-sub-title">
                            <u>בחר טווח אחר</u>
                            </span>
                        </div>
                    </div>
                    <div class="fourth-section">
                        <div>
                            <div>
                                <icon name="email" size="1.3" />
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    <u>שלח במייל</u>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <icon name="link-variant" size="1.3" />
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    <u>שלח כקישור</u>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <icon name="adobe-acrobat" size="1.3" />
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    <u>הורד כ-PDF</u>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <icon name="file-excel" size="1.3" />
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    <u>הורד כ-xsl</u>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-3 actions-card-area mt-4">
                    <div class="col-3 px-2">
                        <div class="activity-times-area d-flex align-items-center justify-items-center flex-column py-5">
                            <div>
                                <span class="block-sub-title">מועדי פעילות המספר</span>
                            </div>
                            <div>
                                <span class="block-title">בכל שעות היממה</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-4 px-2">
                        <div class="main-actions-area d-flex flex-column justify-space-between">
                            <div class="mb-2 action top">
                                <div>
                                    <span class="block-sub-title">פעולה ראשית</span>
                                </div>
                                <div>
                                    <span class="block-title">העברת שיחה</span>
                                </div>
                            </div>
                            <div class="mt-2 action bottom">
                                <div>
                                    <span class="block-sub-title">פעולה ראשית</span>
                                </div>
                                <div>
                                    <span class="block-title">העברת שיחה</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col px-2">
                        <div class="display-charts-area">
                            <div class="pie-chart">
                                <ck-chart height="100%" width="100px" borderRadius="50%" />
                            </div>
                            <div>
                                <div>
                                    <span class="large bold success">60%</span>
                                </div>
                                <div>
                                    <span class="small success">מהמתקשרים מועברים אל הפעולה הראשית</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span class="large bold warning">30%</span>
                                </div>
                                <div>
                                    <span class="small warning">מהמתקשרים מועברים אל הפעולה המשנית</span>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span class="large bold danger">10%</span>
                                </div>
                                <div>
                                    <span class="small danger">מהמתקשרים מנתקים ולא מבצעים אף פעולה</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row border py-5">
                    <div class="col d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col">
                                <ck-chart width="450px" height="450px" borderRadius="50%" />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#ff6430"
                                    :values="yellowChartData"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col">
                                <ck-chart width="450px" height="450px" borderRadius="50%" />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="blueChartData"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-3 pb-2 ">
                    <span class="general-text">תקשורת מנוי ולקוח</span>
                </div>
                <div class="subscriptions-customer-area">
                    <div class="first-section pl-2">
                        <div class="top">
                            <div>
                                <icon name="cellphone-settings-variant" size="1.9" />
                            </div>
                            <div class="pt-2">
                                <span class="block-title">
                                    99,999
                                </span>
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    סך כל הסמסים שנשלחו
                                </span>
                            </div>
                        </div>
                        <div class="middle">
                            <div class="left">
                                <div>
                                    <span class="block-title">99,999</span>
                                </div>
                                <div>
                                    <span class="block-sub-title">סמסמים שנשלחו למנוי</span>
                                </div>
                            </div>
                            <div class="right">
                                <div>
                                    <span class="block-title">99,999</span>
                                </div>
                                <div>
                                    <span class="block-sub-title">סמסמים שנשלחו למנוי</span>
                                </div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div>
                                <icon name="cellphone-settings-variant" size="1.9" />
                            </div>
                            <div class="pt-2">
                                <span class="block-title">
                                    99,999
                                </span>
                            </div>
                            <div>
                                <span class="block-sub-title">
                                    סך כל הסמסים שנשלחו
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="second-section">
                        <div>
                            <ck-chart width="500px" height="200px" />
                        </div>
                        <div class="pt-3">
                            <span class="block-title">
                                תקשורת מנוי לקוח והתראות
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentVirtualNumber: '',
            blueChartData: [
                {
                    text: 'סך שיחות ממספר נייד',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות ממספר קווי',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות ממספר חסוי',
                    num: '9,999'
                }
            ],
            yellowChartData: [
                {
                    text: 'סך שיחות יוניק',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות חוזרות',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות כפולות',
                    num: '9,999'
                }
            ]
        }
    },
    methods: {
        handle(select){
            if(this.currentVirtualNumber === select){
                this.currentVirtualNumber = "";
                return;
            }
            this.currentVirtualNumber = select;

        }
    }
}
</script>
<style lang="scss" scoped>
    .statistic {
        .main-title-area {
            display: flex;
            justify-content: center;
            align-items: center;

            .left-icon {
                flex: 1;
                display: flex;
                justify-content: center;
            }

            .main-title {
                display: flex;
                justify-content: center;

                span {
                    color: $primary;
                    font-size: 35px;
                    font-weight: bold;
                    letter-spacing: 1.1px;
                }
            }

            .right-icon {
                flex: 1;
                display: flex;
                justify-content: center;
            }
        }

        .virtual-number-card-display{
            border: 1px solid #e0e1e0;;
            height: 90px;
            padding: 20px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .first-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;


                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .second-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .third-section {
                display: flex;
                align-items: center;
                padding-left: 10px;
                border-left: 1px solid #e0e1e0;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }

            .fourth-section {
                display: flex;
                align-items: center;
                height: 100%;

                .image-icon-wrapper {
                    width: 41px;
                    height: 41px;
                }
            }
            
            .text-area {
                padding-right: 10px;

                .large {
                    font-size: 25px;
                }

                .bold {
                    font-weight: bold;
                }

                span {
                    font-size: 15px;
                    color: $text-primary
                }  
            }
        }

        .virtual-number-select-area {
            display: flex;
            justify-content: space-between;
            padding: 20px 0;

            .card-select {
                //flex: 1;
                width: 350px;
            }
        }
    }
    .statistic-two {
        .custom-container {
           padding: 0 50px;
        }

        .main-title {
            span {
                color: $primary;
                font-size: 35px;
                font-weight: bold;
                letter-spacing: 1.1px;
            }
        }

        .general-text {
            color: $primary-secondary;
            font-size: 30px;
            font-weight: bold;
        }
    }

    .statistic-three {
       .custom-container {
           padding: 0 50px;
        }

        .main-title {
            span {
                color: $primary;
                font-size: 35px;
                font-weight: bold;
                letter-spacing: 1.1px;
            }
        }

        .general-text {
            color: $primary-secondary;
            font-size: 30px;
            font-weight: bold;
        }

        .block-title {
            font-size: 20px;
            font-weight: bold;
        }

        .block-sub-title {
            font-size: 15px;
        }

        .top-section-card {
            display: flex;
            align-items: center;
            border: 1px solid #e0e1e0;
            height: 100%;

            .first-section {
                border-left: 1px solid #e0e1e0;
                //padding-left: 50px;
                flex: 1;
            }

            .second-section {
                border-left: 1px solid #e0e1e0;
                padding-right: 20px;
                flex: 1;
            }

            .third-section {
                border-left: 1px solid #e0e1e0;
                padding-right: 20px;
                flex: 1;
            }

            .fourth-section {
                flex: 2;
                display: flex;
                justify-content: space-between;
                padding-right: 20px;

                >div {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border-left: 1px solid #e0e1e0;
                    border-right: 1px solid #e0e1e0;
                    padding: 0 20px;

                    &:last-child {
                        border: none;
                        flex: 1;
                    }
                    &:first-child {
                        border: none;
                        flex: 1;
                    }

                    &:nth-child(2) {
                        border-left: none;
                        flex: 1;
                    }
                }
            }
        }

        .actions-card-area {
            
            .activity-times-area {
                border: 1px solid #e0e1e0;
            }

            .main-actions-area {
                .action {
                    padding: 11.7px;
                    border: 1px solid #e0e1e0;

                    &.top {
                        border-right: 4px solid $color-success !important;
                    }

                    &.bottom {
                        border-right: 4px solid $color-warning !important;
                    }
                }
            }

            .display-charts-area {
                border: 1px solid #e0e1e0;
                display: flex;
                justify-content: space-evenly;
                padding: 39.6px 0;

                > div {
                    flex: 1;
                }

                .large {
                    font-size: 30px;
                }

                .bold {
                    font-weight: bold;
                }

                .small {
                    font-size: 12px;
                }

                .success {
                    color: $color-success;
                }

                .warning {
                    color: $color-warning;

                }

                .danger {
                    color: $color-danger;
                }

                .pie-chart {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        .subscriptions-customer-area {
            display: flex;
            justify-content: center;
            height: 100%;

            .first-section {
                flex: 1;
                //border: 1px solid #e0e1e0;
                display: flex;
                flex-direction: column;
                //justify-content: space-around; 
                //padding: 60px 20px;

                .top {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    border: 1px solid #e0e1e0;
                }

                .middle {
                    display: flex;
                    margin: 10px 0;

                    .left {
                        border: 1px solid #e0e1e0;
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }
                    .right {
                        border: 1px solid #e0e1e0;
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding-top: 20px;
                        padding-bottom: 20px;
                        margin-right: 10px;
                    }
                }

                .bottom {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding-top: 20px;
                    padding-bottom: 20px;
                    border: 1px solid #e0e1e0;
                }
            }

            .second-section {
                flex:1;
                border: 1px solid #e0e1e0;
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                align-items: center;
                padding: 60px 20px;
            }
        }
    }
</style>