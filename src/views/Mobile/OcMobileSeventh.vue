<template>
    <div class="ocMobile">
        <div class="title">
            <div class="firstTitle text-center">צהריים טובים</div>
            <div class="secondTitle">מה תרצו לעשות כעת?</div>
        </div>
        <div class="detailsBox">
            <div class="details">
                <div class="secondDetail">
                    מספר מפעיל
                </div>
                <div class="firstDetail">
                    073-2681986
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                   מספר מזוהה בשיחה יוצאת
                </div>
                <div class="firstDetail">
                    073-2681986
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                    פעולה טלפונית בשיחה נכנסת
                </div>
                <div class="firstDetail special">
                    תפריט הקשות
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                   סך רשומות פתוחות
                </div>
                <div class="firstDetail">
                    השמע סטטוס כמות רשומות
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                   הקראת מספר לחיוג
                </div>
                <div class="firstDetail">
                    אל תקריא מספר לחיוג
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                    משך זמן חיוג
                </div>
                <div class="firstDetail">
                  30 שניות
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                   הקלטת שיחות
                </div>
                <div class="firstDetail">
                   שמור הקלטת שיחות 4 חודשים
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <div class="detailsBox mt-2">
            <div class="details">
                <div class="secondDetail">
                   כל הגדרה שתרצה
                </div>
                <div class="firstDetail">
                   כל אפשרות שתבחר
                </div>
            </div>
            <div class="menu-icon">
                <icon name="menu-down" size="1.5"/>
            </div>
        </div>
        <bottom-icon active="key"></bottom-icon>
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
            color:#4085cd;
        }
    }
    .detailsBox{
        width: 90%;
        height: 70px;
        border: 1px solid $text-disabled;
        padding: 0 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .menu-icon{
            cursor: pointer;
        }
        // text-align: center;
        .details{
            .special{
                opacity: 0.3;
            }
            .firstDetail{
                font-size: 18px;
                font-weight: 700;
            }
            .secondDetail{
                font-size: 14px;
            }
        }
    }
}
</style>