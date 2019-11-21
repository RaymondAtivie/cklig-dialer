<template>
    <div class="ocMobile">
        <div class="title">
            <div class="firstTitle text-center">צהריים טובים</div>
            <div class="secondTitle">מה תרצו לעשות כעת?</div>
        </div>
        <div class="detailsBox">
            <div class="firstDetail">
                חיוג לרשומה
            </div>
            <div class="secondDetail">
                קיימות 8 רשומות לחיוג במחסנית
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="firstDetail">
                ניהול משימות אישיות
            </div>
            <div class="secondDetail">
                קיימות 2 משימות לביצוע
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="firstDetail">
                עריכת רשומות לחיוג
            </div>
            <div class="secondDetail">
               הוספה, מחיקה ושינוי סדר חיוג
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="firstDetail text-center">
                צפה באירועים אחרונים
            </div>
            <div class="secondDetail">
               סטטיסטיקות דוחות ותקשורת על לקוחות
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="firstDetail">
                הגדרות שיחה
            </div>
            <div class="secondDetail">
               ניהל שיחה מזוהה והגדרות מערכת
            </div>
        </div>
        <div class="phoneplusIcon text-center">
            <img src="../../assets/phoneplus.png">
        </div>
        <div class="tabs">
            <div class="tab text-center">
                <icon name="format-list-numbered" size="1.3"/>
                <div>ניהול<br>משימות</div>
            </div>
            <div class="tab text-center">
                <icon name="phone-log" size="1.3"/>
                <div>ניהול<br>רשומות לחיוג</div>
            </div>
            <div class="tab text-center">
                <icon name="dialpad" size="1.3"/>
                <div>לוח<br>מקשים</div>
            </div>
            <div class="tab text-center">
                <icon name="clock" size="1.3"/>
                <div>אירועים<br>אחרונים</div>
            </div>
            <div class="tab text-center">
                <icon name="key-variant" size="1.3"/>
                <div>הגדרות<br>שיחה יוצאת</div>
            </div>
        </div>
    </div>
</template>
<script>
import icon from '../../components/global/icon'
export default {
    components: {
        icon: icon
    }
}
</script>
<style lang="scss" scoped>
.ocMobile{
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .title{
        margin: 30px 0;
        .firstTitle{
            font-size: 20px;
            color: $color-info;
        }
        .secondTitle{
            font-size: 35px;
            font-weight: 500;
            color: $primary-dark
        }
    }
    .detailsBox{
        width: 90%;
        height: 100px;
        border: 1px solid $text-secondary;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // text-align: center;
        .firstDetail{
            font-size: 30px;
            font-weight: 700;
        }
        .secondDetail{
            font-size: 16px;
        }
    }
    .phoneplusIcon{
        margin: 40px 0 20px 0;
        img{
            width: 40%;
        }
    }
    .tabs{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 92%;
        padding: 20px;
        // height: 100px;
        .tab{
            font-size: 12px;
            cursor: pointer;
        }
    }
}
</style>