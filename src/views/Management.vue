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
                        uniqueIdentifier="073-2608087"
                        nameNumber="טלפון ראשי למשרד"
                        incomingCalls="268"
                        missedCalls="387"
                        cutOffCalls="1923"
                        active
                        activeStateColor="#4183c4"
                        :activeItems="blueActiveItems"
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
                        active
                        activeStateColor="#4183c4"
                        :activeItems="blueActiveItems"
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
                        active
                        activeStateColor="#ea3523"
                        :activeItems="redActiveItems"
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
                        active
                        activeStateColor="#4183c4"
                        clickable
                        overlayColor="#e5f4fb"
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
                        clickable
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
                    <div class="table-responsive">
                        <table class="table" dir="ltr">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        <span>
                                            פעולות נפוצות
                                        </span>
                                    </th>
                                    <th scope="col">
                                        סטטוס שיחה
                                    </th>
                                    <th scope="col">
                                        משך זמן שהיה כולל
                                    </th>
                                    <th scope="col" class="px-5">
                                        הקלטת שיחה
                                    </th>
                                    <th scope="col">
                                        יעד המתקשר
                                    </th>
                                    <th scope="col">משך זמן שיחה</th>
                                    <th scope="col">יעד הנציג</th>
                                    <th scope="col" class="px-3">נציג שענה לשיחה</th>
                                    <th scope="col">זמן המתנה לנציג</th>
                                    <th scope="col">פעולה טלפונית שהתבצעה</th>
                                    <th scope="col">מספר לחזרה</th>
                                    <th scope="col">מספר המתקשר</th>
                                    <th scope="col">שעת התחלת שיחה</th>
                                    <th scope="col">תאריך כניסת רשומה</th>
                                    <th scope="col" class="px-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="i in 10" :key="i">
                                    <td>
                                        <div class="icon-tooltip-section">
                                            <span v-tooltip="{ content: renderTooltipContent('צפה בדוח רשומה') }">
                                                <icon name="folder-open" />
                                            </span>
                                            <span v-tooltip="{ content: renderTooltipContent('העבר אל שיחות יוצאות') }">
                                                <icon name="phone" />
                                            </span>
                                            <span v-tooltip="{ content: renderTooltipContent('צפה בדוח רשומה') }">
                                                <icon name="paperclip" />
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text">
                                            מענה
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            00:06:38
                                        </span>
                                    </td>
                                    <td>
                                        <div class="audio-section">
                                            <div 
                                                class="audio-icon" 
                                                :class="{ 'blug-bg': showAudio }"
                                                @click="showAudio = !showAudio"
                                            >
                                                <icon name="play" color="white" />
                                            </div>
                                            <div class="d-flex flex-column align-items-end" style="flex: 1">
                                                <span class="text" v-if="!showAudio">
                                                   ה השמע 
                                                </span>
                                                <span class="text" v-else>
                                                  - 00:03:11
                                                </span>
                                                <span class="seaker" v-if="showAudio">
                                                    <div class="current-duration" :style="{ width: (i*10)+'%' }"></div>
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="text">
                                            נייד
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            00:06:12
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            נייד
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            צוק אסראף
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            שניות 26
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            ה העברת
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            0521112222
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            (+972) 52-111-2222
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            03:45:12
                                        </span>
                                    </td>
                                    <td>
                                        <span class="text">
                                            26/8/1986
                                        </span>
                                    </td>
                                    <td>
                                        <icon name="checkbox-blank-outline" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="border my-3 text-center py-4">
               <span class="light-title">Footer Table | Pager | Show 4 from 103</span>
            </div>
            <div class="pt-4">
                <span class="virtual-number-title">
                    #146 דוח רשומת שיחה נכנסת למספר וירטואלי - 2681986-0
                </span>
                <div class="border my-3 p-3">
                    <div class="d-flex">
                        <div class="call-history-side-section">
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        סטטוס נוכחי
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="p-0" style="margin-right': -8px">
                                        <icon 
                                            name="circle-medium" 
                                            success
                                            class="p-0"
                                            size="1.5" 
                                        /> 
                                    </div>
                                    <div>
                                        <span class="light-title-content">מענה</span>
                                    </div>
                                </div>
                            </div>
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        תאריך ושעת התחלה
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="light-title-content">26/08 | 03:45:12</span>
                                    </div>
                                </div>
                            </div>
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        משך שהיה
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="light-title-content">9 דקות 47 שניות</span>
                                    </div>
                                </div>
                            </div>
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        תאריך ושעת סיום
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="light-title-content">03:51:38 | 26/08</span>
                                    </div>
                                </div>
                            </div>
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        מספר המתקשר
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="light-title-content">111-2222 052</span>
                                    </div>
                                </div>
                            </div>
                            <div class="current-status-section">
                                <div>
                                    <span class="light-title">
                                        נציג שענה
                                    </span>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div>
                                        <span class="light-title-content">%שם הנציג או מספר% </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="call-history-section">
                             <div class="top-section mr-3 mb-3">
                                <div class="left pr-3">
                                    <div>
                                        <span class="light-title">
                                            סוג הנתונים
                                        </span>
                                    </div>
                                    <div>
                                        <span class="light-title-content">רצף אירועים בשיחה</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom-section mr-3">
                                <div class="table-responsive pr-3">
                                    <table class="table">
                                        <thead class="border-0">
                                            <tr>
                                                <th scope="col">
                                                    <icon name="clock-outline" color="white" />
                                                </th>
                                                <th scope="col" width="30%" class="text-right">תיאור האירוע</th>
                                                <th scope="col">שעת התחלה</th>
                                                <th scope="col">קבוצת זמנים</th>
                                                <th scope="col">זמן כולל והקלטת שיחה</th>
                                                <th scope="col">פעולות</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <icon name="phone" />
                                                </td>
                                                <td class="event-description">%virtualPhoneNumber% למספר% in/out Call% שיחה</td>
                                                <td>03:45:12</td>
                                                <td rowspan="0">
                                                    <div>
                                                        זמן המתנה<br />
                                                        39 שניות
                                                    </div>
                                                    <div>
                                                        זמן שיחה עם נציג<br />
                                                        00:09:08
                                                    </div>
                                                </td>
                                                
                                                <td rowspan="0">
                                                    <div class="audio-area">
                                                        <div>
                                                            משך זמן שיחה כולל<br />
                                                            00:09:47
                                                        </div>
                                                        <div class="icon-area my-3">
                                                            <icon name="play" color="#616161" size="2.1" />
                                                        </div>
                                                        <div>
                                                            <span>zuka-d2-260819860345... - 04:12</span>
                                                            <div class="seaker mt-1">
                                                                <div class="current-duration" style="background-color: #616161"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td rowspan="0" style="vertical-align: initial;">
                                                    <div style="line-height: 28px;">
                                                        <span>
                                                            שלח דוח במייל<br />
                                                            הורד כ-PDF<br />
                                                            הורד הקלטת שיחה <br />
                                                            שלח הקלטת שיחה <br />
                                                            העבר רשומה לחיוג <br />
                                                            שלח sms לרשומה
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <icon name="magnify-minus-outline" />
                                                </td>
                                                <td class="event-description">%callerID% - מתקשר מספר זיהוי</td>
                                                <td>03:45:27</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <icon name="deskphone" />
                                                </td>
                                                <td class="event-description">%IVR_ActionName% - טלפונית פעולה</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="volume-high" />
                                                </td>
                                                <td class="event-description">%playAudioType% השמעת</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="music" />
                                                </td>
                                                <td class="event-description">%audioType - WaitingMusic%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="phone-classic" />
                                                </td>
                                                <td class="event-description">%typingByClient%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="microphone" />
                                                </td>
                                                <td class="event-description">Record by client %recordDuration</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="eye-off-outline" />
                                                </td>
                                                <td class="event-description">Caller not responding</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="account" />
                                                </td>
                                                <td class="event-description">%callTransferToSingleDestination%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="account-group" />
                                                </td>
                                                <td class="event-description">%callTransferToDialGrouo%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="shuffle-variant" />
                                                </td>
                                                <td class="event-description">%dialingTypeToDialGorup%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="timer-sand" />
                                                </td>
                                                <td class="event-description">Call waiting time - %26 sec</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="key" />
                                                </td>
                                                <td class="event-description">Transferring Controlled Call - Press 1%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="account-card-details-outline" />
                                                </td>
                                                <td class="event-description">Agent get call %agentName% - agentPhoneNumber</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="clock-outline" />
                                                </td>
                                                <td class="event-description">Call duration - % 4min 39sec%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="flag-variant" />
                                                </td>
                                                <td class="event-description">status - %callingStatus%</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="exclamation" />
                                                </td>
                                                <td class="event-description">End Call </td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="cellphone-iphone" />
                                                </td>
                                                <td class="event-description">Send sms - %Destination% - %Type</td>
                                                <td>03:45:28</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                     <icon name="email-outline" />
                                                </td>
                                                <td class="event-description">Send mail - %Destination% - %Type</td>
                                                <td>03:45:28</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex my-3 type-of-data-section">
                <div class="border p-3" style="flex: 1">
                    <div class="top-section">
                        <div class="left pr-3">
                            <div>
                                <span class="light-title">
                                   סוג הנתונים
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">תקשורת מול לקוח</span>
                            </div>
                        </div>
                        <div class="right">
                            <div class="text-left">
                                <ck-button
                                    customBg="#5ebc55"
                                    flat
                                    class="custom-btn"
                                > 
                                   שלח סמס עכשיו
                                </ck-button>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="box-content-area" style="flex: 1;">
                                    <div class="box-text">
                                        <div>
                                            <icon name="cellphone-iphone" size="1.5" />
                                        </div>
                                    </div>
                                    <div class="box-icon">
                                        <div>
                                            <span class="block-title">סמס בסיום שיחה - נשלח בשעה 14:42</span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title small">
                                                נשלח מאת: PhonePlus | נשלח אל: שם הנציג
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-content-area" style="flex: 1; opacity: 0.3;">
                                    <div class="box-text">
                                        <div>
                                            <icon name="cellphone-iphone" size="1.5" />
                                        </div>
                                    </div>
                                    <div class="box-icon">
                                        <div>
                                            <span class="block-title">בשעה התקבל - תגובה סמ 14:43</span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title small">
                                                073-268-1986 :אל נשלח | 052-111-2222 :מאת נשלח
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 border-right mt-3">
                                <div style="height: 300px;">
                                     <div>
                                        <span class="light-title-content">תוכן ההודעה</span>
                                    </div>
                                    <div>
                                        <span class="light-title">
                                            <ul class="pt-3">
                                                <li>תודה שהתקשרת לצוקה,</li>
                                                <li>אנא השב את תשובתך לפי</li>
                                                <li>מידת שביעות רצונך:</li>
                                                <li>1 - טעון שיפור</li>
                                                <li>2 - בסדר</li>
                                                <li>3 - טוב</li>
                                                <li>4 - טוב מאוד</li>
                                                <li>5 - מצויין</li>
                                                <li>תודה</li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border p-3 mr-1" style="flex: 1;">
                    <div class="top-section">
                        <div class="left pr-3">
                            <div>
                                <span class="light-title">
                                   סוג הנתונים
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">תקשורת מול מנוי</span>
                            </div>
                        </div>
                        <div class="right">
                            <div class="text-left">
                                <ck-button
                                    customBg="#5ebc55"
                                    flat
                                    class="custom-btn"
                                > 
                                    שלח סמס למנוי
                                </ck-button>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="box-content-area" style="flex: 1;">
                                    <div class="box-text">
                                        <div>
                                            <icon name="cellphone-iphone" size="1.5" />
                                        </div>
                                    </div>
                                    <div class="box-icon">
                                        <div>
                                            <span class="block-title">סמס בסיום שיחה - נשלח בשעה 14:42</span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title small">
                                                נשלח מאת: PhonePlus | נשלח אל: שם הנציג
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="box-content-area" style="flex: 1; opacity: 0.3;">
                                    <div class="box-text">
                                        <div>
                                            <icon name="email-outline" size="1.5" />
                                        </div>
                                    </div>
                                    <div class="box-icon">
                                        <div>
                                            <span class="block-title">מייל בסיום שיחה - נשלח בשעה 14:43</span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title small">
                                                נשלח מאת: PhonePlus | נשלח אל: 3 משתמשי מערכת
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 border-right mt-3">
                                <div style="height: 300px;">
                                     <div>
                                        <span class="light-title-content">תוכן ההודעה</span>
                                    </div>
                                    <div>
                                        <span class="light-title">
                                        התקיימה שיחה בין נציג ללקוח
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex my-3  type-of-data-section">
                <div class="border p-3" style="flex: 1;">
                    <div class="top-section">
                        <div class="left pr-3">
                            <div>
                                <span class="light-title">
                                   סוג הנתונים
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">נסיונות חיוג ללקוח</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <div class="block-row mt-2">
                            <div class="side-item">
                                <span class="light-title-content">#1</span>
                            </div>
                            <div class="main-item">
                                <div class="top-item">
                                    <div class="sec mr-1">
                                        <div>
                                            <span class="light-title">
                                                מספר לחיוג
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                052-111-2222
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec mx-1">
                                        <div>
                                            <span class="light-title">
                                               תאריך ושעה
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                03:51:38 | 26/08
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec" style="flex: 1;">
                                        <div>
                                            <span class="light-title">
                                                משך זמן
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                20 שניות
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item text-center mr-1 mt-1">
                                    <span class="light-title-content" style="font-size: 13px;">סטטוס חיוג - אין מענה</span>
                                </div>
                            </div>  
                        </div>
                        <div class="block-row mt-2">
                            <div class="side-item">
                                <span class="light-title-content">#2</span>
                            </div>
                            <div class="main-item">
                                <div class="top-item">
                                    <div class="sec mr-1">
                                        <div>
                                            <span class="light-title">
                                                מספר לחיוג
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                052-111-2222
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec mx-1">
                                        <div>
                                            <span class="light-title">
                                               תאריך ושעה
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                03:51:38 | 26/08
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec" style="flex: 1;">
                                        <div>
                                            <span class="light-title">
                                                משך זמן
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                6 שניות
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item text-center mr-1 mt-1">
                                    <span class="light-title-content" style="font-size: 13px;">סטטוס חיוג - אין מענה</span>
                                </div>
                            </div>  
                        </div>
                        <div class="block-row mt-2">
                            <div class="side-item">
                                <span class="light-title-content">#3</span>
                            </div>
                            <div class="main-item">
                                <div class="top-item">
                                    <div class="sec mr-1">
                                        <div>
                                            <span class="light-title">
                                                מספר לחיוג
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                052-111-2222
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec mx-1">
                                        <div>
                                            <span class="light-title">
                                               תאריך ושעה
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                03:51:38 | 26/08
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec" style="flex: 1;">
                                        <div>
                                            <span class="light-title">
                                                משך זמן
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                13 שניות
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item text-center mr-1 mt-1">
                                    <span class="light-title-content" style="font-size: 13px;">סטטוס חיוג - אין מענה</span>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="border p-3 mr-1" style="flex: 1;">
                    <div class="top-section">
                        <div class="left pr-3">
                            <div>
                                <span class="light-title">
                                   סוג הנתונים
                                </span>
                            </div>
                            <div>
                                <span class="light-title-content">נסיונות חיוג למנוי</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-section">
                        <div class="block-row mt-2">
                            <div class="side-item">
                                <span class="light-title-content">#&nbsp;&nbsp;</span>
                            </div>
                            <div class="main-item">
                                <div class="top-item">
                                    <div class="sec mr-1">
                                        <div>
                                            <span class="light-title">
                                                מספר לחיוג
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                קבוצת חיוג
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec mx-1">
                                        <div>
                                            <span class="light-title">
                                               תאריך ושעה
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                03:51:38 | 26/08
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec" style="flex: 1;">
                                        <div>
                                            <span class="light-title">
                                                משך זמן
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                20 שניות
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item text-center mr-1 mt-1">
                                    <span class="light-title-content" style="font-size: 13px;">אופן חיוג - במקביל</span>
                                </div>
                            </div>  
                        </div>
                        <div class="block-row mt-2">
                            <div class="side-item">
                                <span class="light-title-content">#1</span>
                            </div>
                            <div class="main-item">
                                <div class="top-item">
                                    <div class="sec mr-1">
                                        <div>
                                            <span class="light-title">
                                                מספר לחיוג
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                               צוק-0526636199
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec mx-1">
                                        <div>
                                            <span class="light-title">
                                               תאריך ושעה
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                03:51:38 | 26/08
                                            </span>
                                        </div>
                                    </div>
                                    <div class="sec" style="flex: 1;">
                                        <div>
                                            <span class="light-title">
                                                משך זמן
                                            </span>
                                        </div>
                                        <div>
                                            <span class="light-title-content">
                                                20 שניות
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bottom-item text-center mr-1 mt-1">
                                    <span class="light-title-content" style="font-size: 13px;">סטטוס חיוג - מענה</span>
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
                        uniqueIdentifier="073-2608087"
                        nameNumber="טלפון ראשי למשרד"
                        incomingCalls="268"
                        missedCalls="387"
                        cutOffCalls="1923"
                        error
                    />
                </div>
                <div class="col-5">
                    <ck-side-phone-input
                        uniqueIdentifier="073-2608087"
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
</template>
<script>
export default {
    data(){
        return {
            redActiveItems: [
               {
                    icon: 'phone-incoming',
                    text: 'הגדר מספר',
                    bgColor: '#faccd1',
                },
                {
                    icon: 'trash-can',
                    text: 'מחק מספר',
                    bgColor: '#faccd1',
                },
                {
                    icon: 'sync',
                    text: 'החלף מספר',
                    bgColor: '#faccd1',
                },
                {
                    icon: 'sync',
                    text: 'החלף מספר',
                    bgColor: '#faccd1',
                },
            ],
            blueActiveItems: [
                {
                    icon: 'chart-pie',
                    text: ' ניהול מספר',
                    bgColor: '#e5f4fb',
                },
                {
                    icon: 'phone-incoming',
                    text: 'הגדרות שיחה נכנסת',
                    bgColor: '#e5f4fb',
                },
                {
                    icon: 'phone-outgoing',
                    text: 'הגדרות שיחה יוצאת',
                    bgColor: '#e5f4fb',
                },
                {
                    icon: 'close-circle',
                    text: ' ניהול מספר',
                    bgColor: '#e5f4fb',
                },
                {
                    icon: 'sync',
                    text: ' שיחות נותקו',
                    bgColor: '#e5f4fb',
                },
            ],
            showAudio: false,
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
    },
    methods: {
        renderTooltipContent(content){
            return `
                <span class="general-text">${content}</span>
            `;
        }
    },
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

        .seaker {
            height: 5.5px;
            background-color: $text-disabled;
            width: 100%;

            .current-duration {
                width: 30%;
                background-color: #4183c4;
                height: 100%;
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
                .table {
                    border: none;
                    th {
                        background-color: #4183c4;
                        color: $color-light;
                        text-align: center;
                        font-size: 15px;
                        font-weight: 400;
                        border-left: 2px solid white;
                        padding: 10px;
                        vertical-align: inherit;
                        // align-items: center;
                    }

                    td {
                        text-align: center;
                        vertical-align: inherit;

                        .text {
                            font-size: 17px;
                            font-weight: lighter;
                        }

                        .icon-tooltip-section {
                            display: flex;
                            justify-content: space-around;
                        }

                        .audio-section {
                            display: flex;
                            align-items: center;
                            .audio-icon {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                background-color: #9e9e9e;
                                width: 25px;
                                height: 25px;
                                margin-right: 10px;

                                &.blug-bg {
                                     background-color: #4183c4;
                                }
                            }
                        }
                    }
                }
            }
        }

        .call-history-side-section {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            //justify-content: space-between;

            .current-status-section {
                border-bottom: 1px solid #e0e1e0;
                padding-top: 20px;
                padding-bottom: 20px;


                &:first-child {
                    padding-top: 0;
                    padding-bottom: 0;
                }

                &:last-child {
                    border-bottom: none;
                }
            }
        }

        .call-history-section {
            flex: 1;
            border-right: 1px solid #e0e1e0;

            .top-section {
                display: flex;
                padding-bottom: 10px;
                border-bottom: 1px solid #e0e1e0;

                .left {
                    flex: 1;
                }

            }

            .bottom-section {
                .table {
                    border: none;
                }

                th {
                    background-color: #616161;
                    color: $color-light;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 400;
                    border-left: 2px solid white;
                    padding: 10px;
                    vertical-align: inherit;
                    border: 2px solid #ffffff;
                }

                td {
                    text-align: center;
                    vertical-align: inherit;

                    background-color: #fbfcfd;
                    border: 2px solid #ffffff;

                    &.event-description {
                        direction: ltr;
                        text-align: right;
                    }
                }

                .audio-area {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    direction: ltr;

                    .icon-area {
                        background-color: $text-disabled;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

            }
        }


        .type-of-data-section {
            .top-section {
                display: flex;
                padding-bottom: 10px;
                border-bottom: 1px solid #e0e1e0;

                .left {
                    flex: 1;
                }

                .right {
                    flex: 1;
                }

                .custom-btn {
                    border-radius: 20px; 
                    padding: 10px 35px; 
                    color: #ffffff;
                }

            }

            .bottom-section {
                .block-row {
                    display: flex;
                    .side-item {
                        display: flex;
                        align-items: center;

                        background-color: #fbfcfd;
                        padding: 20px;
                    }
                    .main-item {
                        flex: 1;
                        //border: 1px solid red;

                        .top-item {
                            display: flex;
                            //border: 1px solid red;

                            .sec {
                                background-color: #fbfcfd;
                                padding: 20px;
                                flex: 2;
                                //border: 1px solid red;
                            }

                        }

                        .bottom-item {
                            padding: 3px;
                            background-color: #fbfcfd;
                           // border: 1px solid red;
                        }
                    }
                }
            }
        }

    }
</style>