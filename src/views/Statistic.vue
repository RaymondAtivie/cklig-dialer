<template>
    <div>
        <div class="statistic">
            <div class="container">
                <ck-virtual-number-card-selection />
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
                                <ck-pie-chart
                                    :chartData="pieChartData"
                                    :options="pieChartOptions"
                                    :width="150"
                                    :height="150"
                                />
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
                                <ck-custom-doughnut-chart
                                     :chartData="firstDoughnutChartData"
                                     title="סך שיחות נכנסות"
                                     value="9,999"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#ff6430"
                                    :values="secondChartData"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col">
                                <ck-custom-doughnut-chart
                                     :chartData="secondDoughnutChartData"
                                     title="סך שיחות מזוהות"
                                     value="90%"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="firstChartData"
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
                            <ck-bar-chart 
                                :chartData="barChartData"  
                                :width="500" 
                                :height="200"
                                :options="barChartOptions" 
                            />
                        </div>
                        <div class="pt-3">
                            <span class="block-title">
                                תקשורת מנוי לקוח והתראות
                            </span>
                        </div>
                    </div>
                </div>
                <div class="pt-3 pb-2 ">
                    <span class="general-text">זיהוי המתקשר</span>
                </div>
                <div class="caller-id-area">
                    <div class="first-section">
                        <div>
                            <icon name="account-card-details-outline" size="2" />
                        </div>
                    </div>
                    <div class="second-section">
                        <div>
                            <span class="block-sub-title">
                                סך שיחות בהם נקלטו ר של מזהים פרט
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                    <div class="third-section">
                        <div>
                            <icon name="bell" size="2" />
                        </div>
                    </div>
                    <div class="fourth-section">
                        <div>
                            <span class="block-sub-title">
                               סך שיחות בהם נקלטו פרטים מזהים ונשלחה בגינם התראת מערכת
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                    <div class="fifth-section">
                        <div>
                            <icon name="eye-off-outline" size="2" />
                        </div>
                    </div>
                    <div class="sixth-section">
                        <div>
                            <span class="block-sub-title">
                              סך שיחות בהם לא נקלטות פרטים מזהים של המתקשר    
                            </span>
                        </div>
                        <div>
                            <span class="block-title">9,999</span>
                        </div>
                    </div>
                </div>
                <div class="pt-3 pb-2 ">
                    <span class="general-text">זמנים ומשכי שהיה</span>
                </div>
                <div class="row border py-5 px-5">
                    <div class="col">
                        <div class="row justify-content-between">
                            <div class="col d-flex align-items-centerw justify-content-center flex-column">
                                <div class="row my-1">
                                    <div class="col time-area-background p-4 d-flex align-items-center justify-content-center">
                                        <icon name="timer" size="2" />
                                    </div>
                                </div>
                                <div class="row myw-1">
                                     <div class="col time-area-background p-4 d-flex align-items-center justify-content-center">
                                        <icon name="account-group" size="2" />
                                    </div>
                                </div>
                                <div class="row my-1">
                                     <div class="col time-area-background p-4 d-flex align-items-center justify-content-center">
                                        <icon name="exclamation" size="2" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-9 d-flex flex-column justify-content-between">
                                <div class="row my-1 px-1">
                                    <div class="col time-area-background d-flex justify-content-center align-items-center flex-column p-4">
                                        <div>
                                            <span class="block-title">
                                                00:49:56
                                            </span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title">משך זמן המתנה עד למענה נציג</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-w1 px-1">
                                    <div class="col time-area-background d-flex justify-content-center align-items-center flex-column p-4">
                                        <div>
                                            <span class="block-title">
                                                02:54:37
                                            </span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title">משך זמן שיחה בין נציג ללקוח</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row my-1 px-1">
                                    <div class="col time-area-background d-flex justify-content-center align-items-center flex-column p-4">
                                        <div>
                                            <span class="block-title">
                                                04:44:33
                                            </span>
                                        </div>
                                        <div>
                                            <span class="block-sub-title">משך זמן שיחה שהייה של המתקשר בקו</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-between flex-column">
                                <div class="row mt-1 flex-fill">
                                    <div class="col time-area-background p-4  d-flex align-items-center justify-content-center">
                                        <icon name="link-variant" size="2" />
                                    </div>
                                </div>
                                <div class="row my-1">
                                    <div class="col time-area-background p-4 d-flex align-items-center justify-content-center">
                                        <icon name="phone" size="2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row py-5">
                            <div class="col">
                                <ck-line-chart
                                    :chartData="lineChartData"
                                    :options="lineChartOptions" 
                                    :width="300" 
                                    :height="150"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-5 d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col">
                                <ck-custom-doughnut-chart
                                     :chartData="thirdDoughnutChartData"
                                     title="משך זמן כולל"
                                     value="00:00:00"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="thirdChartData"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-4 pb-2">
                    <div class="call-forwarding-area m">
                        <span>פעולה ראשית - העברת שיחה</span>
                    </div>
                </div>
                <div class="row border py-5 px-5">
                    <div class="col d-flex justify-content-center align-items-centewr flex-column">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                <ck-custom-doughnut-chart
                                     :chartData="fourthDoughnutChartData"
                                     title="סך שיחות שהועברו לנציג וקיבלו מענה"
                                     value="9,999"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col-5 p-1">
                                <ck-chart-percentage-card
                                    percentage="99%"
                                    description="שיעור נטישה"
                                    color="#2384c8"
                                />
                            </div>
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="fourChartData"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center align-items-centewr flex-column">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                <ck-custom-doughnut-chart
                                     :chartData="fifthDoughnutChartData"
                                     title="סך שיחות שניתקו בהמתנה למענה"
                                     value="9,999"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col-5 p-1">
                                <ck-chart-percentage-card
                                    percentage="99%"
                                    description="שיעור נטישה"
                                    color="#ff0e00"
                                />
                            </div>
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#ff0e00"
                                    :values="fifthChartData"
                                    :customColors="['#606060']"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="unresolved-rate-area my-3">
                    <div class="section">
                        <div>
                            <span>סך שיחות שלא נענו והועברו לפעולה משנית</span>
                        </div>
                        <div>
                            <span class="num">9,999</span>
                        </div>
                    </div>
                    <div class="section second-section">
                        <div>
                            <span class="num">9,999</span>
                        </div>
                        <div>
                            <span>שיעור חוסר מענה</span>
                        </div>
                    </div>
                    <div class="section">
                        <div>
                            <span>סך שיחות שלא נענו והועברו לפעולה משנית</span>
                        </div>
                        <div>
                            <span class="num">תא קולי חכם</span>
                        </div>
                    </div>
                </div>
                <div class="row border py-5 px-5">
                    <div class="col">
                        <div class="row pb-2">
                            <div class="col">
                                <ck-side-phone-time
                                    topText="משך זמן שיחה ממוצע בין נציג ללקוח"
                                    time="00:06:12"
                                    totalCallOverThirty="9,999"
                                    totalCallBelowThirty="1,111"
                                />
                            </div>
                        </div>
                        <div class="row pb-2">
                            <div class="col">
                                <ck-side-phone-time
                                    topText="משך זמן המתנה ממוצע עד למענה של נציג"
                                    time="00:00:00"
                                    rightIcon="help"
                                    totalCallOverThirty="9,999"
                                    totalCallBelowThirty="1,111"
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <ck-side-phone-time
                                    topText="משך זמן המתנה ממוצע עד לניתוק של המתקשר"
                                    time="00:00:00"
                                    rightIcon="exclamation"
                                    totalCallOverThirty="9,999"
                                    totalCallBelowThirty="1,111"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="col d-flex justify-content-center align-items-center flex-column">
                        <div class="row">
                            <div class="col">
                                <ck-custom-doughnut-chart
                                     :chartData="sixthDoughnutChartData"
                                     title="משך זמן שיחה כולל"
                                     value="00:00:00"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="sixthChartData"
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="pt-4 pb-2">
                    <div class="voicemail-area">
                        <span>פעולה משנית - תא קולי</span>
                    </div>
                </div>
                <div class="row border py-5 px-5 mb-3">
                    <div class="col d-flex justify-content-center align-items-centewr flex-column">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                 <ck-custom-doughnut-chart
                                     :chartData="seventhDoughnutChartData"
                                     title="סך שיחות שנקלטו בהם פרטים מזהים של מתקשר"
                                     value="9,999"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col-5 p-1">
                                <ck-chart-percentage-card
                                    percentage="99%"
                                    description="שיעור נטישה"
                                    color="#ffb300"
                                />
                            </div>
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#ffb300"
                                    :values="seventhChartData"
                                    :customColors="['#606060']"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col d-flex justify-content-center align-items-centewr flex-column">
                        <div class="row">
                            <div class="col d-flex justify-content-center">
                                 <ck-custom-doughnut-chart
                                     :chartData="eighthDoughnutChartData"
                                     title="סך שיחות שנקלטו בהם פרטים מזהים של מתקשר"
                                     value="9,999"
                                />
                            </div>
                        </div>
                        <div class="row pt-5">
                            <div class="col-5 p-1">
                                <ck-chart-percentage-card
                                    percentage="9"
                                    description="שיעור נטישה"
                                    color="#e2f4fc"
                                />
                            </div>
                            <div class="col">
                                <ck-chart-values-indicator
                                    color="#0045a7"
                                    :values="eighthChartData"
                                />
                            </div>
                        </div>
                    </div>
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
                            <ck-bar-chart 
                                :chartData="barChartData"  
                                :width="500" 
                                :height="200"
                                :options="barChartOptions" 
                            />
                        </div>
                        <div class="pt-3">
                            <span class="block-title">
                                תקשורת מנוי לקוח והתראות
                            </span>
                        </div>
                    </div>
                </div>
                <div class="row border py-5 px-5 mt-3 justify-content-center">
                    <div class="col-6">
                        <ck-side-phone-time
                            topText="משך זמן שהייה ממוצע של מתקשר בתא הקולי"
                            time="00:00:52"
                            totalCallOverThirty="9,999"
                            totalCallBelowThirty="1,111"
                        />
                    </div>
                </div>
                <div class="row px-5 my-3 justify-content-center">
                    <div class="col-5">
                        <div class="bottom-section">
                            <div class="section">
                                <div>
                                    <icon name="email" size="1.3" />
                                </div>
                                <div>
                                    <span class="block-sub-title">
                                        <u>שלח במייל</u>
                                    </span>
                                </div>
                            </div>
                            <div class="section">
                                <div>
                                    <icon name="link-variant" size="1.3" />
                                </div>
                                <div>
                                    <span class="block-sub-title">
                                        <u>שלח כקישור</u>
                                    </span>
                                </div>
                            </div>
                            <div class="section">
                                <div>
                                    <icon name="adobe-acrobat" size="1.3" />
                                </div>
                                <div>
                                    <span class="block-sub-title">
                                        <u>הורד כ-PDF</u>
                                    </span>
                                </div>
                            </div>
                            <div class="section">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
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
            pieChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#1cc44f', '#ffb300', '#ff0e00'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            pieChartOptions: {
                maintainAspectRatio:false
            },
            firstDoughnutChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#ff4100', '#ff6525', '#ffa685'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            secondDoughnutChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            thirdDoughnutChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            fourthDoughnutChartData: {
                datasets: [
                    {   
                        data: [30, 9],
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            fifthDoughnutChartData: {
                datasets: [
                    {   
                        data: [30, 9],
                        backgroundColor: ['#fd0c00', '#ffcad0'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            sixthDoughnutChartData: {
                datasets: [
                    {   
                        data: [60, 30, 10],
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            seventhDoughnutChartData: {
                datasets: [
                    {   
                        data: [30, 9],
                        backgroundColor: ['#ffb300', '#feeea0'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            eighthDoughnutChartData: {
                datasets: [
                    {   
                        data: [60, 30, 14, 7],
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6', '#e2f4fc'],
                        borderWidth: '2',
                        hoverBorderWidth: '4'
                    }
                ]
            },
            doughnutChartOptions: {
                maintainAspectRatio:false
            },
            barChartData: {
                datasets: [
                    {   
                        label: 'Chart',
                        backgroundColor: ['#1046a4', '#2a83ca', '#64b3e6', '#e2f4fc'],
                        borderWidth: 0,
                        barPercentage: 0.9,
                        barThickness: 70,
                        data: [70, 10, 40, 30],
                        order: 0,
                    }
                ],
                labels: ['סמס למתקשר', 'סמס שהתקבל', 'סמס למנוי', 'מייל למנוי'],
            },
            barChartOptions: {
                maintainAspectRatio:false,
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
                }
            },
            firstChartData: [
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
            secondChartData: [
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
            ],
            thirdChartData: [
                {
                    text: 'משך זמן ניתוב לקווי - 60%',
                    num: '00:00:00'
                },
                {
                    text: 'משך זמן ניתוב לנייד - 30%',
                    num: '00:00:00'
                },
                {
                    text: 'משך זמן ניתוב בינלאומי - 10%',
                    num: '00:00:00'
                }
            ],
            fourChartData: [
                {
                    text: 'מספר שלוחה 1',
                    num: '9,999'
                },
                {
                    text: 'מספר שלוחה 2',
                    num: '9,999'
                },
                {
                    text: 'מספר שלוחה 3',
                    num: '9,999'
                }
            ],
            fifthChartData: [
                {
                    text: 'סך הכל',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות שנקלטו פרטים מזהים',
                    num: '9,999'
                },
                {
                    text: 'סך שיחות לא מזוהות',
                    num: '9,999'
                }
            ],
            sixthChartData: [
                {
                    text: 'משך זמן ניתוב לקווי - 60%',
                    num: '00:00:00'
                },
                {
                    text: 'משך זמן ניתוב לנייד - 30%',
                    num: '00:00:00'
                },
                {
                    text: 'משך זמן ניתוב בינלאומי - 10%',
                    num: '00:00:00'
                }
            ],
            seventhChartData: [
                {
                    text: 'סך הכל',
                    num: '9,999'
                },
                {
                    text: 'סך לקוחות שהקליטו הודעה',
                    num: '9,999'
                },
                {
                    text: 'סך לקוחות שלא הקליטו הודעה',
                    num: '9,999'
                }
            ],
            eighthChartData: [
                {
                    text: 'סך מספרים ניידים שנקלטו',
                    num: '9,999'
                },
                {
                    text: 'סך מספרים קווים שנקלטו',
                    num: '9,999'
                },
                {
                    text: 'סך מתקשרים שהקישו מספר לחזרה',
                    num: '9,999'
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
    .statistic {
        
    }
    .statistic-two {
        border-top: 1px solid red;

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
        border-top: 1px solid red;

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
                justify-content: space-around;
                align-items: center;
                padding: 1.7px 40px;

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
                    // width: 60px;
                    // height: 60px;
                    // position: relative;

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

        .caller-id-area {
            border: 1px solid #e0e1e0;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;

            .first-section {
                background-color: #fbfcfd;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }

            .second-section {
                background-color: #fbfcfd;
                flex: 1;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }

            .third-section {
                background-color: #fbfcfd;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }
            .fourth-section {
                background-color: #fbfcfd;
                flex: 1;
                padding: 25px 25px;
                margin: 5px;
                height: 100%;
            }
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

        .time-area-background {
            
            background-color: #fbfcfd;
        }

        .call-forwarding-area {
            background-color: $color-success;
            padding: 15px 15px;
            span {
                font-size: 30px;
                font-weight: bold;
                color: #ffffff;
            }
        }

        .unresolved-rate-area {
            border: 1px solid #e0e1e0;
            padding: 20px 50px;
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .section {
                background-color: $color-warning;
                flex: 2;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 20px 20px;

                span {
                    font-size: 15px;
                    color: #ffffff;

                    &.num {
                        font-size: 30px;
                        font-weight: bold;
                    }
                }
            }

            .second-section {
                flex: 1;
                background-color: #fbfcfd;
                color: $color-warning;
                margin-left: 10px;
                margin-right: 10px;
                padding-top: 20px;
                padding-bottom: 20px;
                
                span {
                    font-size: 15px;
                    color: $color-warning;

                    &.num {
                        font-size: 30px;
                        font-weight: bold;
                    }
                }
            }
        }

        .voicemail-area {
            background-color: $color-warning;
            padding: 15px 15px;
            span {
                font-size: 30px;
                font-weight: bold;
                color: #ffffff;
            }
        }

        .bottom-section {
            border: 1px solid #e0e1e0;
            padding: 20px;
            display: flex;


            .section {
                //flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center; 
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
</style>