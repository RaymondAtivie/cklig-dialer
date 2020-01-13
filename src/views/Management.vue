<template>
    <div class="management">
        <div class="custom-container">
            <div class="pt-4">
                <span class="virtual-number-title">רשימת מספרים וירטואלים בחשבון - צוקה</span>
            </div>
            <div class="row py-3 align-items-center">
                <div class="col">
                    <ck-button small class="py-2 px-4" success>הזמן מספר נוסף</ck-button>
                </div>
                <div class="col d-flex justify-content-end">
                    <ck-icon-circle icon="format-list-checkbox" class="p-4" customBg="#60b4e5"/>
                    <ck-icon-circle icon="magnify-minus-outline" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="filter" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                </div>
            </div>
            <div class="pt-3 mr-4">
                <span class="group-name-text">כללי - מספרים צוקה</span>
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
                        uniqueIdentifier="073-2681986"
                        nameNumber="אישי צוקה"
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
                        success
                    />
                </div>
            </div>
            <div class="pt-4">
                <span class="virtual-number-title">רשימת מספרים וירטואלים בחשבון - צוקה</span>
            </div>
            <div class="row py-3 align-items-center">
                <div class="col">
                    <ck-button small class="py-2 px-4" success>הזמן מספר נוסף</ck-button>
                </div>
                <div class="col d-flex justify-content-end">
                    <ck-icon-circle icon="format-list-checkbox" class="p-4" customBg="#60b4e5"/>
                    <ck-icon-circle icon="magnify-minus-outline" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="filter" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                </div>
            </div>
            <div class="pt-3 mr-4">
                <span class="group-name-text">כללי - מספרים צוקה</span>
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
                        uniqueIdentifier="073-2681986"
                        nameNumber="אישי צוקה"
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
                        uniqueIdentifier="שירות שיחות יוצאות לא פעיל "
                        disabled
                        icon="phone-outgoing"
                    />
                </div>
            </div>
            <div class="pt-4">
                <span class="virtual-number-title">רשימת מספרים וירטואלים בחשבון - צוקה</span>
            </div>
            <div class="row py-3 align-items-center">
                <div class="col">
                    <ck-button small class="py-2 px-4" success>הזמן מספר נוסף</ck-button>
                </div>
                <div class="col d-flex justify-content-end">
                    <ck-icon-circle icon="format-list-checkbox" class="p-4" customBg="#60b4e5"/>
                    <ck-icon-circle icon="magnify-minus-outline" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="filter" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                </div>
            </div>
            <div class="pt-3 mr-4">
                <span class="group-name-text">כללי - מספרים צוקה</span>
            </div>
            <div class="row py-3 mr-4">
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
            <div class="row py-3 mr-4">
                <div class="col">
                    <ck-phone-input 
                        uniqueIdentifier="073-2681986"
                        nameNumber="אישי צוקה"
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
            <div class="pt-4 d-flex">
                <span class="virtual-number-title">ניהול מספר וירטואלי - 073-2681986</span>
                <div class="pr-5" style="flex: 1">
                    <ck-button 
                        outline
                        small
                        light
                        style="border-radius: 30px;"
                        class="py-2 px-4 ml-1"
                    >   נתונים כלליים
                    </ck-button>
                    <ck-button 
                        outline
                        small
                        light
                        style="border-radius: 30px;"
                        class="py-2 px-4 ml-1"
                    >   שיחות נכנסות
                    </ck-button>
                    <ck-button 
                        outline
                        small
                        light
                        style="border-radius: 30px;"
                        class="py-2 px-4"
                        >   שיחות יוצאות
                    </ck-button>
                </div>
                <div class="d-flex">
                    <ck-icon-circle icon="square-edit-outline" class="p-3" warning />
                    <ck-icon-circle icon="close" class="p-3 mr-2" error/>
                    <ck-icon-circle icon="plus" class="p-3 mr-2" success />
                </div>
            </div>
            <div class="border my-4 p-3 d-flex">
                <div class="virtual-number-first-section">
                    <div class="current-status-section"  v-for="i in 6" :key="i">
                        <div>
                            <span class="light-title">
                                סטטוס נוכחי
                            </span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="p-0" :style="{'margin-right': i === 1 && '-8px'}">
                                <icon 
                                    v-if="i === 1"
                                    name="circle-medium" 
                                    success
                                    class="p-0"
                                    size="1.5" 
                                /> 
                            </div>
                            <div>
                                <span class="light-title-content">מספר פעיל ffffffff</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="virtual-number-second-section">
                    <div class="top-section mr-3 mb-3">
                        <div class="left pr-3">
                            <div>
                                <span class="light-title">
                                    סוג הנתונים
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">נתוני שיחות נכנסות</span>
                            </div>
                        </div>
                        <div class="right text-left">
                             <div class="text-right">
                                <span class="light-title">
                                  טווח תאריכים - <u>החלף טווח תאריכים</u>
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">31.01.2019 - 01.01.2019</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-section mr-3">
                        <div class="row">
                            <div class="col">
                                <div class="border-bottom">
                                    <div class="row">
                                        <div class="col-4">
                                            <ck-pie-chart
                                                :chartData="firstPieChartData"
                                                :options="pieChartOptions"
                                                :width="150"
                                                :height="150"
                                            />
                                        </div>
                                        <div class="col-md-7 d-flex align-items-center">
                                            <ck-chart-values-indicator
                                                color="#4183c4"
                                                :values="firstChartData"
                                                :customColors="['#4183c4', '#75b2e1']"
                                                :fade="false"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="row">
                                        <div class="col-4">
                                            <ck-pie-chart
                                                :chartData="secondPieChartData"
                                                :options="pieChartOptions"
                                                :width="150"
                                                :height="150"
                                            />
                                        </div>
                                        <div class="col-md-7 d-flex align-items-center">
                                            <ck-chart-values-indicator
                                                color="#0045a7"
                                                :values="secondChartData"
                                                :customColors="['#1cc44f', '#ffb300', '#ff0e00']"
                                                :fade="false"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex flex-column align-items-center justify-content-center border-right">
                                <div>
                                    <ck-line-chart
                                        :chartData="lineChartData"
                                        :options="lineChartOptions" 
                                        :width="700" 
                                        :height="300"
                                    />
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="caller-id-area">
                                            <div class="fifth-section">
                                                <div>
                                                    <icon name="clock-outline" size="2" />
                                                </div>
                                            </div>
                                            <div class="sixth-section">
                                                <div>
                                                    <span class="block-title">00:06:12</span>
                                                </div>
                                                <div>
                                                    <span class="block-sub-title">
                                                        משך זמן שיחה ממוצע
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="caller-id-area">
                                            <div class="fifth-section">
                                                <div>
                                                    <icon name="clock-outline" size="2" />
                                                </div>
                                            </div>
                                            <div class="sixth-section">
                                                <div>
                                                    <span class="block-title">00:06:12</span>
                                                </div>
                                                <div>
                                                    <span class="block-sub-title">
                                                        משך זמן שיחה ממוצע
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    data(){
        return {
            firstPieChartData: {
                datasets: [
                    {   
                        data: [60, 30],
                        backgroundColor: ['#4183c4', '#75b2e1'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ],
                labels: [
                    'סך שיחות נכנסות',
                    'מתוכם יוניק ',
                ]
            },
            secondPieChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#1cc44f', '#ffb300', '#ff0e00'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ],
                labels: [
                    'סך שיחות נכנסות',
                    'מתוכם יוניק ',
                    'סך שיחות שנתקו',
                ]
            },
            pieChartOptions: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    rtl: true,
                    textDirection: 'ltr'
                },
            },
            firstChartData: [
                {
                    text: 'סך שיחות נכנסות',
                    num: '9,999'
                },
                {
                    text: 'מתוכם יוניק ) חיוג בפעם הראשונה)',
                    num: '9,999'
                },
            ],
            secondChartData: [
                {
                    text: 'סך שיחות שקיבלו מענה של נציג',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות שלא נענו ועברו לפעולה',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות שנתקו',
                    num: '9,999'
                }
            ],
            lineChartData: {
                labels: [1.8, 8.8, 15.8, 23.8, 30.8, 6.9, 13.9, 20.9, 23.9, 27.9, 29.9, 31.9],
                datasets: [
                    {
                        label: 'Chart',
                        showLine: true,
                        spanGaps: true,
                        lineTension: 0,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: '0.5',
                        backgroundColor: [
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)',
                            'rgba(139,203,241,1)'
                        ],
                        borderColor: [
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4',
                            '#0090d4'
                        ],
                        borderWidth: 4,
                        data: [
                            {x: 1.8, y: 4},
                            {x: 8.8, y: 2}, 
                            {x: 15.8, y: 5}, 
                            {x: 23.8, y: 4}, 
                            {x: 30.8, y: 2}, 
                            {x: 6.9, y: 4}, 
                            {x: 13.9, y: 6}, 
                            {x: 20.9, y: 3},
                            {x: 23.9, y: 0},
                            {x: 27.9, y: 0},
                            {x: 29.9, y: 0},
                            {x: 31.9, y: 0}
                        ]
                    }
                ]
            },
            lineChartOptions: {
                legend: false,
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true,
                            padding: 25,
                        }
                    }]
                },
                responsive: true,
                lineTension: 0
            },
        }
    }
}
</script>
<style lang="scss" scoped>
    .management {
        .custom-container {
           padding: 0 50px;
        }

        .virtual-number-title {
            color: $primary;
            font-size: 30px;
            font-weight: bold;
        }

        .group-name-text {
            color: $primary-secondary;
            font-size: 30px;
            font-weight: bold;
        }


        .light-title {
            font-size: 15px;
        }

        .light-title-content {
            font-size: 20px;
            font-weight: bold;
        }


        .block-title {
            font-size: 20px;
            font-weight: bold;
        }

        .block-sub-title {
            font-size: 15px;
        }


        .caller-id-area {
             //border: 1px solid #e0e1e0;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;

            .fifth-section {
                background-color: #fbfcfd;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }

            .sixth-section {
                background-color: #fbfcfd;
                flex: 1;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }   
        }

        .virtual-number-first-section {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .current-status-section {
                border-bottom: 1px solid #e0e1e0;

                &:last-child {
                    border-bottom: none;
                }
            }
        }
        .virtual-number-second-section {
            flex: 1;
            border-right: 1px solid #e0e1e0;

            .top-section {
                display: flex;
                padding-bottom: 10px;
                border-bottom: 1px solid #e0e1e0;

                .left {
                    flex: 1;
                }

                .right {
                    //flex: 1;
                }

            }
        }


    }
</style>