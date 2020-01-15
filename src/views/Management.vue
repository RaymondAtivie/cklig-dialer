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
                                <span class="light-title-content">מספר פעיל ewtwfewww</span>
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
                                        :width="600" 
                                        :height="300"
                                    />
                                </div>
                                <div class="line-chart-bottom-section">
                                    <div class="box-content-area">
                                        <div class="box-text">
                                            <div>
                                                <icon name="clock-outline" size="2" />
                                            </div>
                                        </div>
                                        <div class="box-icon">
                                            <div>
                                                <span class="block-title">00:06:12</span>
                                            </div>
                                            <div>
                                                <span class="block-sub-title small">
                                                    משך זמן שיחה ממוצע
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="box-content-area">
                                        <div class="box-text">
                                            <div>
                                                <icon name="clock-outline" size="2" />
                                            </div>
                                        </div>
                                        <div class="box-icon">
                                            <div>
                                                <span class="block-title">00:06:12</span>
                                            </div>
                                            <div>
                                                <span class="block-sub-title small">
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
            <div class="border my-4 d-flex">
                <div class="box-content-area" style="flex: 1;">
                    <div class="box-text">
                        <div>
                            <icon name="cellphone-iphone" size="2" />
                        </div>
                    </div>
                    <div class="box-icon">
                        <div>
                            <span class="block-sub-title small">
                               סך sms שנשלחו
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                </div>
                <div class="box-content-area" style="flex: 1;">
                    <div class="box-text">
                        <div>
                            <icon name="cellphone-iphone" size="2" />
                        </div>
                    </div>
                    <div class="box-icon">
                        <div>
                            <span class="block-sub-title small">
                               סך sms שהתקבלו
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                </div>
                <div class="box-content-area" style="flex: 1;">
                    <div class="box-text">
                        <div>
                            <icon name="email-outline" size="2" />
                        </div>
                    </div>
                    <div class="box-icon">
                        <div>
                            <span class="block-sub-title small">
                                סך מיילים שקיבל המנוי
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border my-4 p-3 bar-chart-area-section">
                <div class="top-section pb-2 pr-1">
                    <div>
                        <span class="light-title">
                            סוג הנתונים
                        </span>
                    </div>
                    <div>
                        <span class="light-title-content">זמנים וממוצעים</span>
                    </div>

                </div>
                <div class="middle-section">
                    <div class="row align-items-center mt-2 mb-3 border-top border-bottom mx-1 py-3">
                        <div class="col text-center">
                            <div class="timer-area">
                                <div>
                                    <span class="light-title-content">00:00:26</span>
                                </div>
                                <div>
                                    <span class="light-title">
                                       משך זמן שיחה ממוצע בין נציג ללקוח
                                    </span>
                                </div>
                            </div>
                            <div class="chart-section">
                                <ck-bar-chart 
                                    :chartData="barChartData"
                                    :options="barChartOptions"
                                    :width="100" 
                                    :height="70"
                                />
                                <div class="pt-3">
                                    <span class="light-title-content">
                                        סך שיחות לפי זמן נטישה
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center border-right">
                            <div class="timer-area">
                                <div>
                                    <span class="light-title-content">00:00:26</span>
                                </div>
                                <div>
                                    <span class="light-title">
                                       משך זמן שיחה ממוצע בין נציג ללקוח
                                    </span>
                                </div>
                            </div>
                            <div class="chart-section">
                                <ck-bar-chart 
                                    :chartData="barChartData"
                                    :options="barChartOptions"
                                    :width="100" 
                                    :height="70"
                                />
                                <div class="pt-3">
                                    <span class="light-title-content">
                                         סך שיחות לפי זמן נטישה
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col text-center border-right">
                            <div class="timer-area">
                                <div>
                                    <span class="light-title-content">00:00:51</span>
                                </div>
                                <div>
                                    <span class="light-title">
                                       משך זמן שיחה ממוצע בין נציג ללקוח
                                    </span>
                                </div>
                            </div>
                            <div class="chart-section">
                                <ck-bar-chart 
                                    :chartData="thridBarChartData"
                                    :options="barChartOptions"
                                    :width="100" 
                                    :height="70"
                                />
                                <div class="pt-3">
                                    <span class="light-title-content">
                                        סך שיחות לפי זמן נטישה
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="box-content-area" style="flex: 1;">
                            <div class="box-text">
                                <div>
                                    <icon name="clock-outline" size="2" />
                                </div>
                            </div>
                            <div class="box-icon">
                                <div>
                                    <span class="block-sub-title small">
                                   זמן שיחה כולל בדקות - בין נציג ללקוח
                                    </span>
                                </div>
                                <div>
                                    <span class="block-title">00:43:56</span>
                                </div>
                            </div>
                        </div>
                        <div class="box-content-area" style="flex: 1;">
                            <div class="box-text">
                                <div>
                                    <icon name="timer-sand" size="2" />
                                </div>
                            </div>
                            <div class="box-icon">
                                <div>
                                    <span class="block-sub-title small">
                                    זמן המתנה כולל בדקות - למענה של נציג
                                    </span>
                                </div>
                                <div>
                                    <span class="block-title">00:26:08</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="box-content-area" style="flex: 1;">
                            <div class="box-text">
                                <div>
                                    <icon name="deskphone" size="2" />
                                </div>
                            </div>
                            <div class="box-icon">
                                <div>
                                    <span class="block-sub-title small">
                                        משך זמן ניתוב לקווי
                                    </span>
                                </div>
                                <div>
                                    <span class="block-title">00:11:20</span>
                                </div>
                            </div>
                        </div>
                        <div class="box-content-area" style="flex: 1;">
                            <div class="box-text">
                                <div>
                                    <icon name="cellphone-iphone" size="2" />
                                </div>
                            </div>
                            <div class="box-icon">
                                <div>
                                    <span class="block-sub-title small">
                                        משך זמן ניתוב לנייד
                                    </span>
                                </div>
                                <div>
                                    <span class="block-title">00:44:41</span>
                                </div>
                            </div>
                        </div>
                        <div class="box-content-area" style="flex: 1;">
                            <div class="box-text">
                                <div>
                                    <icon name="earth" size="2" />
                                </div>
                            </div>
                            <div class="box-icon">
                                <div>
                                    <span class="block-sub-title small">
                                        משך זמן ניתוב בינלאומי
                                    </span>
                                </div>
                                <div>
                                    <span class="block-title">00:00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center my-3">
                <div class="border py-3 d-flex">
                    <div class="text-center px-5">
                        <div>
                            <icon name="email" size="2" />
                        </div>
                        <div>
                            <span class="light-title">
                                שלח דוח זה <br /> לדוא״ל
                            </span>
                        </div>
                    </div>
                    <div class="text-center px-5 border-right">
                        <div>
                            <icon name="file-pdf" size="2" />
                        </div>
                        <div>
                            <span class="light-title">
                                הורד דוח זה <br /> כקובץ PDF 
                            </span>
                        </div>
                    </div>
                    <div class="text-center px-5 border-right">
                        <div>
                            <icon name="chart-bar" size="2" />
                        </div>
                        <div>
                            <span class="light-title">
                               צפה בדוח <br /> סטטיסטיקות
                            </span>
                        </div>
                    </div>
                    <div class="text-center px-5 border-right">
                        <div>
                            <icon name="cellphone-iphone" size="2" />
                        </div>
                        <div>
                            <span class="light-title">
                                שלח sms <br /> ממספר זה
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex my-3">
                <div style="flex: 1;">
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
                        >  שיחות יוצאות
                    </ck-button>
                </div>
                <div>
                    <ck-button 
                        outline
                        small
                        accent
                        style="border-radius: 30px;"
                        class="py-2 px-4 ml-1"
                    >   חזור אל כל המספרים
                    </ck-button>
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
            <div class="border my-3 p-3 table-area-section">
                <div class="top-section d-flex justify-content-between pb-3">
                    <div>
                        <div>
                            <span class="light-title">דוח רשומות</span>
                        </div>
                        <div>
                            <span class="light-title-content">פירוט רשומות שיחות נכנסות</span>
                        </div>
                    </div>
                    <div>
                        <div class="text-center">
                            <span class="light-title">דוח רשומות שיחות נכנסות</span>
                        </div>
                        <div>
                            <span class="light-title-content">מציג 4 רשומות מתוך 103</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span class="light-title">טווח תאריכים - <u>החלף טווח תאריכים</u></span>
                        </div>
                        <div>
                            <span class="light-title-content">01.01.2019 - 31.01.2019</span>
                        </div>
                    </div>
                </div>
                <div class="middle-section py-3 d-flex">
                    <div class=" ml-1" style="flex: 1;">
                        <div class="search-record p-3">
                            <span>
                                חפש רשומה באופן חופשי
                            </span>
                        </div>
                    </div>
                    <div class="d-flex" style="flex: 2;">
                        <div class="d-flex align-items-center px-3 py-1 filter-box">
                            <icon name="filter" size="1.5" />
                            <span class="pr-1">סנן רשומות</span>
                        </div>
                        <div class="mr-1">
                            <div class="mb-1">
                                <ck-button
                                    tile
                                    small
                                    customBg="#e5f4fb"
                                    class="border-0 py-1"
                                    block
                                    style="color: #4183c4;"
                                >
                                    <div class="d-flex align-items-center">
                                         <icon name="close" /> <span> צוק אסראף</span>
                                    </div>
                                </ck-button>
                            </div>
                            <div>
                                <ck-button
                                    tile
                                    small
                                    customBg="#e5f4fb"
                                    class="border-0 py-1"
                                    block
                                    style="color: #4183c4;"
                                >
                                    <div class="d-flex align-items-center">
                                         <icon name="close" /> <span> שיחות מיעד נייד</span>
                                    </div>
                                </ck-button>
                            </div>
                        </div>
                        <div class="mr-1">
                            <div class="mb-1">
                                <ck-button
                                    tile
                                    small
                                    customBg="#e5f4fb"
                                    class="border-0 py-1"
                                    block
                                    style="color: #4183c4;"
                                >
                                    <div class="d-flex align-items-center">
                                         <icon name="close" /> <span> שיחות שנענו</span>
                                    </div>
                                </ck-button>
                            </div>
                            <div>
                                <ck-button
                                    tile
                                    small
                                    customBg="#e5f4fb"
                                    class="border-0 py-1"
                                    block
                                    style="color: #4183c4;"
                                >
                                    <div class="d-flex align-items-center">
                                         <icon name="close" /> <span> זמן המתנה עד 30</span>
                                    </div>
                                </ck-button>
                            </div>
                        </div>
                        <div class="mr-1">
                            <div class="mb-1">
                                <ck-button
                                    tile
                                    small
                                    customBg="#e5f4fb"
                                    class="border-0 py-1"
                                    block
                                    style="color: #4183c4;"
                                >
                                    <div class="d-flex align-items-center">
                                         <icon name="close" /> <span> פעולת העברת שיחה</span>
                                    </div>
                                </ck-button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ck-button
                            tile
                            small
                            customBg="#fbfcfd"
                            class="border-0"
                            style="color: #e0e1e0; height: 100%;"
                        >
                            <icon name="format-list-checkbox" /> בחירה מרובה
                        </ck-button>
                    </div>
                </div>
                <div class="bottom-section">
                    <table class="table">
                        <caption>List of users</caption>
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            barChartData: {
                datasets: [
                    {   
                        backgroundColor: ['#c8e4c5', '#faccd1'],
                        borderWidth: 0,
                        barPercentage: 0.9,
                        barThickness: 70,
                        data: [75, 10],
                        order: 0,
                    }
                ],
                labels: ['מעל 30 שניות', 'עד 30 שניות'],
            },
            barChartOptions: {
                // maintainAspectRatio:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                },
                legend: false,
            },
            thridBarChartData: {
                datasets: [
                    {   
                        backgroundColor: ['#c8e4c5', '#faccd1', '#c8e4c5'],
                        borderWidth: 0,
                        barPercentage: 0.9,
                        barThickness: 70,
                        data: [10, 10, 15],
                        order: 0,
                    }
                ],
                labels: ['עד 60 שניות', 'עד 60 שניות', 'עד 30 שניות'],
            },
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

            &.small {
                font-size: 13px;
            }
        }


        .box-content-area {
             //border: 1px solid #e0e1e0;
            //padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: auto;

            .box-text {
                background-color: #fbfcfd;
                padding: 25px 25px;
                //margin: 5px;
                height: auto;
                //height: 100%;
            }

            .box-icon {
                background-color: #fbfcfd;
                flex: 1;
                padding: 25px 25px;
                margin: 5px;
                height: auto;
                //height: 100%;
                // display: flex;
                // flex-direction: column;
                // justify-content: center;
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

            .bottom-section {

                .line-chart-bottom-section {
                    display: flex;

                }
            }
        }

        .bar-chart-area-section {
            .top-section {
                //border-bottom: 1px solid #e0e1e0;
            }

            .middle-section {
                .timer-area {
                    border-bottom: 1px solid #e0e1e0;
                    padding: 25px 0 40px;
                }

                .chart-section {
                    padding: 70px;
                }
            }
        }
        

        .table-area-section {
            .top-section {
                border-bottom: 1px solid #e0e1e0;
            }

            .middle-section { 
                border-bottom: 1px solid #e0e1e0;

                .filter-box {
                    background-color: #e5f4fb;
                    color: #4183c4;

                    span {
                        font-size: 15px;
                    }
                }

                .search-record {
                    background-color: #fbfcfd;
                    color: #e0e1e0;
                    height: 100%;
                }
            }

            .bottom-section {

            }
        }

    }
</style>