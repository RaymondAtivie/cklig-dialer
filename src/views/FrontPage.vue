<template>
    <div class="front-page">
        <div class="custom-container">
            <div class="pt-4">
                <span class="virtual-number-title">רשימת מספרים וירטואלים בחשבון - צוקה</span>
            </div>
            <div class="row py-3 align-items-center">
                <div class="col">
                    <ck-button small class="py-2 px-4" success>demoee yyyy ttr</ck-button>
                </div>
                <div class="col d-flex justify-content-end">
                    <ck-icon-circle icon="magnify-minus-outline" class="p-4" customBg="#60b4e5"/>
                    <ck-icon-circle icon="filter" class="p-4 mr-2" customBg="#60b4e5"/>
                    <ck-icon-circle icon="chart-gantt" class="p-4 mr-2" customBg="#60b4e5"/>
                </div>
            </div>
            <div class="pt-3 mr-4">
                <span class="group-name-text">שם קבוצת המספרים לדוגמא</span>
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
            <div class="pt-3 mr-4">
                <span class="group-name-text">פרסום בעיתונים</span>
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
                        error
                    />
                </div>
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
                        warning
                    />
                </div>
            </div>
            <div class="row pt-3 mr-4">
                <div class="col">
                    <ck-phone-input 
                        uniqueIdentifier="שירות שיחות נכנסות טרם הוגדר"
                        nameNumber="שיחה מזוהה - שיחות יוצאות"
                        incomingCalls="268"
                        missedCalls="387"
                        cutOffCalls="1923"
                        disabled
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
                        warning
                    />
                </div>
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
                        warning
                    />
                </div>
            </div>
            <div class="pt-3 mr-4">
                <span class="group-name-text">מספרים מנותקים</span>
            </div>
            <div class="row py-3 mr-4">
                <div class="col">
                    <ck-phone-input 
                        uniqueIdentifier="073-2608086"
                        nameNumber="טלפון ראשי למשרד"
                        incomingCalls="268"
                        missedCalls="247"
                        cutOffCalls="13"
                        dark
                        icon="phone-hangup"
                    />
                </div>
                <div class="col-5">
                    <ck-side-phone-input
                        uniqueIdentifier="2,608 הופעות"
                        nameNumber="שיחה מזוהה - שיחות יוצאות"
                        incomingCalls="19"
                        missedCalls="13"
                        cutOffCalls="4"
                        reference
                        referenceText="צפה בכל האיזכורים"
                    />
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
    .front-page {
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
    }
</style>