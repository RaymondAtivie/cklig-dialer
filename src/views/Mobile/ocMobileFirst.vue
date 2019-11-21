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
        <bottom-icon></bottom-icon>
    </div>
</template>
<script>
import BottomIcons from './BottomTabIcons'
export default {
    components: {
        bottomIcon: BottomIcons
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
            color: #4a90da;
        }
        .secondTitle{
            font-size: 30px;
            font-weight: 500;
            color: #4085cd;
        }
    }
    .detailsBox{
        width: 90%;
        height: 100px;
        border: 1px solid $text-disabled;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // text-align: center;
        .firstDetail{
            font-size: 20px;
            font-weight: 700;
        }
        .secondDetail{
            font-size: 14px;
        }
    }
    .phoneplusIcon{
        margin: 40px 0 20px 0;
        img{
            width: 40%;
        }
    }
}
</style>