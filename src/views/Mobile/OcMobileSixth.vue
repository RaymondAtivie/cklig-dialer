<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">ניהול משימות</div>
        <div class="secondTitle">משימות אישיות לביצוע</div>
    </div>
    <div class="box">
        <div class="listHolder">
            <div class="list one">
                <div><icon name="menu"/></div>
                <div class="mr-4 slash">להתקשר לשמאול</div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4">להוסיף טלפון מריקי לשיחות יוצאות</div>
            </div>
            <div class="listDashed">
                <div class="listBordered">
                    <div class="dotlist">
                        <div><icon name="menu"/></div>
                        <div class="mr-4">משימה שנבחרה לשינוי סימון ביצוע</div>
                    </div>
                    <div class="checkbox"><icon name="checkbox-marked-circle" color="#1cc44f"/></div>
                </div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4">עוד משימה לביצוע</div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4">להתקשר ל-%מספר מהרשימה%</div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4 slash">משימה שבוצעה</div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4">אחלה רשימה אההה</div>
            </div>
            <div class="list two">
                <div><icon name="menu"/></div>
                <div class="mr-4">ידוע מה קורה כאשר יש רשימה ארוכה, כן?</div>
            </div>
            <div class="icons">
                <div class="borderRound borderSmall ml-3">
                    <div class="icon blue">
                        <icon name="playlist-remove" size="1"/>
                    </div>
                </div>
                <div class="borderRound borderBig">
                    <div class="icon yellow">
                        <icon name="redo-variant" size="2"/>
                    </div>
                </div>
                <div class="borderRound borderSmall mr-3">
                    <div class="icon red">
                        <icon name="power" size="1"/>
                    </div>
                </div>
            </div>
            <!-- <div class="transparentize"></div> -->
        </div>
    </div>
    <bottom-icon active="list"></bottom-icon>
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
            clicked: false
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
    .slash{
        text-decoration: line-through;
    }
    .active{
        color: $primary;
    }
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
    .box{
        width: 90%;
        // height: 700px;
        border: 2px solid $text-disabled;
        margin-bottom: 50px;
        padding-bottom: 70px;
        .dialer{
            padding: 20px 0 40px 0;
            text-align: center;
            .dialerFirst{
                font-size: 20px;
            }
            .dialerSecond{
                font-size: 30px;
                font-weight: 500;
            }
        }
        .listHolder{
            position: relative;
            height: 450px;
            position: relative;
            padding: 20px 0;
            .list{
                // padding: 0 20px;
                margin: auto;
                width: 90%;
                height: 50px;
                display: flex;
                align-items: center;
                font-size: 16px;
                cursor: pointer;
                
            }
            .one{
                border-top: 2px solid $color-light;
                border-bottom: 2px solid $color-light;
                justify-content: flex-start
            }
            .two{
                border-bottom: 2px solid $color-light;
                justify-content: flex-start
            }
            .three{
                border-bottom: 2px solid $color-light;
                justify-content: space-between;
                .iconList{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start
                }
            }
                .listDashed{
                    border: 1px dashed $text-primary; 
                    padding: 0 20px;
                    cursor: pointer;
                    font-size: 16px;
                    .listBordered{
                        height: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .checkbox{
                            opacity: 0.3;
                        }
                        .dotlist{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start
                        }
                    }
                    .showIcon{
                        margin: auto;
                        height: 50px;
                        display: flex;
                        flex-direction: row-reverse;
                        align-items: center;
                        justify-content: space-between;
                        color: $primary-dark;
                        .iconText{
                            width: 25%;
                            font-size: 14px;
                        }
                    }
                }
            .icons{
                position: absolute;
                bottom: -170px;
                display: flex;
                height: 200px;
                width: 100%;
                align-items: center;
                justify-content: center;
                margin: auto;
                .borderRound{
                    border: 2px solid $text-disabled;
                    border-radius: 50%;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .icon{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40px;
                        height: 40px;
                        font-weight: 600;
                        cursor: pointer;
                        color: white;
                        border-radius: 50%;
                    }
                    .red{
                        background-color: $color-danger;
                    }
                    .yellow{
                        width: 70px;
                        height: 70px;
                        background-color: $color-warning;
                    }
                    .blue{
                        background-color: $color-info;
                    }
                }
                .borderSmall{
                    width: 50px;
                    height: 50px;
                }
                .borderBig{
                    width: 80px;
                    height: 80px;
                }

            }
        }
    }
}
</style>