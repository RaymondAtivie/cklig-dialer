<template>
    <div class="ocMobile">
        <div v-show="clicked=='outgoing'" class="title">
            <div class="firstTitle text-center">אירועים אחרונים</div>
            <div class="secondTitle">שיחות יוצאות</div>
        </div>
        <div v-show="clicked=='incoming'" class="title">
            <div class="firstTitle text-center">אירועים אחרונים</div>
            <div class="secondTitle">שיחות נכנסות</div>
        </div>
        <div v-show="clicked=='cancel'" class="title">
            <div class="firstTitle text-center">אירועים אחרונים</div>
            <div class="secondTitle">שיחות שלא נענו</div>
        </div>
        <div v-show="clicked=='message'" class="title">
            <div class="firstTitle text-center">אירועים אחרונים</div>
            <div class="secondTitle">הודעות כתובות - sms</div>
        </div>
        <div v-show="clicked=='pieChart'" class="title">
            <div class="firstTitle text-center">סטטיסטיקות אישיות לנציג</div>
            <div class="secondTitle">צוק אסראף</div>
        </div>
        <div class="holder">
            <div>
                <div class="searchBar">
                    <div>
                        <div class="secondDetail">
                            חפש וסנן רשומות
                        </div>
                        <!-- <div class="firstDetail">
                            073-2681986
                        </div>
                        <div class="thirdDetail">
                            hjdsbbsdhvs
                        </div> -->
                    </div>
                    <div class="menu-icon">
                        <icon name="magnify" size="1.3"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            היום
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            אתמול
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            יום שלישי
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            יום שני
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            26.8.2019
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00  
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            26.8.2019
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
                <div class="detailsBox">
                    <div class="details">
                        <div class="secondDetail">
                            26.8.2019
                        </div>
                        <div class="firstDetail">
                            052-2233456  (שם מלא)
                        </div>
                        <div class="thirdDetail">
                            משך זמן שיחה: 13:06:00
                        </div>
                    </div>
                    <div class="menu-icon">
                        <icon name="dots-vertical"/>
                    </div>
                </div>
            </div>
            <div class="icons">
                <div class="iconHolder text-center">
                    <div class="borderRound">
                        <div :class="{'blue' : clicked == 'outgoing'}" @click="tabClicked('outgoing')" class="icon">
                            <icon name="phone-outgoing" size="2"/>
                        </div>
                    </div>
                    <div v-show="clicked=='outgoing'" class="text-center mt-3 iconDetails">שיחות יוצאות</div>
                </div>
                <div class="iconHolder">
                    <div class="borderRound">
                        <div :class="{'blue' : clicked == 'incoming'}" @click="tabClicked('incoming')" class="icon">
                            <icon name="phone-incoming" size="2"/>
                        </div>
                    </div>
                    <div v-show="clicked=='incoming'" class="text-center mt-3 iconDetails">שיחות נכנסות</div>
                </div>
                <div class="iconHolder">
                    <div class="borderRound">
                        <div :class="{'blue' : clicked == 'cancel'}" @click="tabClicked('cancel')" class="icon">
                            <icon name="phone-cancel" size="2"/>
                        </div>
                    </div>
                    <div v-show="clicked=='cancel'" class="text-center mt-3 iconDetails">שיחות שלא נענו</div>
                </div>
                <div class="iconHolder">
                    <div class="borderRound">
                        <div :class="{'blue' : clicked == 'message'}" @click="tabClicked('message')" class="icon">
                            <icon name="chat" size="2"/>
                        </div>
                    </div>
                    <div v-show="clicked=='message'" class="text-center mt-3 iconDetails">הודעות כתובות</div>
                </div>
                <div class="iconHolder">
                    <div class="borderRound">
                        <div :class="{'blue' : clicked == 'pieChart'}" @click="tabClicked('pieChart')" class="icon">
                            <icon name="chart-pie" size="2"/>
                        </div>
                    </div>
                    <div v-show="clicked=='pieChart'" class="text-center mt-3 iconDetails">סטטיסטיקות</div>
                </div>
            </div>
        </div>
        <bottom-icon active="clock"></bottom-icon>
    </div>
</template>
<script>
import BottomIcons from './BottomTabIcons'
export default {
    components: {
        bottomIcon: BottomIcons
    },
    data() {
        return {
            clicked: '',
        }
    },
    methods: {
        tabClicked(tab) {
            this.clicked = tab
        },
        isThisTabClicked(tab) {
            if(this.clicked == tab){
                return true
            }else{
                return false
            }
        }
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
    .holder{
        border: 1px solid $text-disabled;
        padding-bottom: 70px;
        margin-bottom: 50px;
        position: relative;
        width: 100%;
    }
    .icons{
        position: absolute;
        bottom: -30px;
        display: flex;
        height: 200px;
        background-color: rgba(255, 255, 255, 0);
        width: 100%;
        align-items: flex-end;
        justify-content: space-around;
        margin: auto;
        .iconHolder{
            height: 70px;
            width: 25%;
            text-align: center;
            .iconDetails{
                color: $primary;
                font-size: 12px;
            }
            .borderRound{
                border: 2px solid $text-disabled;
                border-radius: 50%;
                background-color: white;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                .icon{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    font-weight: 600;
                    background-color: $text-disabled;
                    cursor: pointer;
                    color: white;
                    border-radius: 50%;
                }
                .blue{
                    background-color: $primary;
                }
                
            }
        }
    }
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
    .searchBar{
        width: 100%;
        height: 70px;
        border-bottom: 1px solid $text-disabled;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // align-items: center;
        .secondDetail{
            margin-top: 10px;
            font-size: 12px;
        }
        .menu-icon{
            cursor: pointer;
            margin: auto 0;
        }
    }
    .detailsBox{
        width: 100%;
        height: 70px;
        padding: 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $text-disabled;
        .menu-icon{
            cursor: pointer
        }
        // text-align: center;
        .details{
            .firstDetail{
                font-size: 20px;
                font-weight: 700;
            }
            .secondDetail{
                font-size: 14px;
            }
        }
    }
}
</style>