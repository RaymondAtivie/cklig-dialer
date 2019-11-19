<template>
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
                            <div class="chart-values">
                                <div class="value">
                                    <div class="num">
                                        <span class="bold">999,9</span>
                                    </div>
                                    <div class="text">
                                        <span>
                                             סך שיחות יוניק
                                        </span>
                                    </div>
                                </div>
                                <div class="value">
                                    <div class="num faint-1">
                                        <span class="bold">999,9</span>
                                    </div>
                                    <div class="text">
                                      <span>
                                           סך שיחות חוזרות
                                      </span>
                                    </div>
                                </div>
                                <div class="value">
                                    <div class="num faint-2">
                                        <span class="bold">999,9</span>
                                    </div>
                                    <div class="text">
                                        <span>
                                            סך שיחות כפולות
                                        </span>
                                    </div>
                                </div>
                            </div>
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
                                <div class="value">
                                    ww
                                </div>
                                <div class="value">
                                    www
                                </div>
                                <div class="value">
                                    www
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
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

        .chart-values {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .value {
                display: flex;
                align-items: center;

                .num {
                    //width: 100%;
                    padding: 10px;
                    margin-top: 3px;
                    margin-bottom:  3px;
                    background-color: $accent-orange;

                    &.faint-1 {
                        background-color: transparentize($color: $accent-orange, $amount: 0.2);
                    }
                    
                    &.faint-2 {
                        background-color: transparentize($color: $accent-orange, $amount: 0.5);
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
    }
</style>