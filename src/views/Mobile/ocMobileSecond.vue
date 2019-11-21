<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">שיחות יוצאות</div>
        <div class="secondTitle">רשימת חיוג לנציג</div>
    </div>
    <div class="box">
        <div class="dialer">
            <div class="dialerFirst">המספר הבא לחיוג</div>
            <div class="dialerSecond mt-2">052-6636199</div>
        </div>
        <div class="secondDialer">
            <button><icon name="phone"/> <div class="mr-2">חייג כעת</div></button>
            <div class='firstDetails text-center'>dועוד 7 רשומות הבאות לחיוג במחסנית</div>
            <div class='secondDetails text-right'>052-9234567 | בעתיד שם-רשומה</div>
            <div class='secondDetails'>052-2233456 | שם אישקשר<div><icon name="phone-cancel" color="#ffb300"/></div></div>
            <div class='secondDetails'>052-9234567 | שם הבא</div>
            <div class='secondDetails'>052-2233456 | לקוח איש קשר<div><icon name="phone-incoming" color="#1cc44f"/></div></div>
            <div class='secondDetails'>052-9234567 | איש קשר נוסף</div>
            <div class="icons">
                <div class="borderRound borderSmall">
                    <div class="icon blue">
                        <icon name="rotate-3d-variant" size="1"/>
                    </div>
                </div>
                <div class="borderRound borderBig">
                    <div class="icon green">
                        <icon name="plus" size="2"/>
                    </div>
                </div>
                <div class="borderRound borderSmall">
                    <div class="icon yellow">
                        <icon name="format-list-numbered" size="1"/>
                    </div>
                </div>
            </div>
            <!-- <div class="transparentize"></div> -->
        </div>
    </div>
    <bottom-icon active="phone"></bottom-icon>
  </div>
</template>

<script>
import BottomIcons from './BottomTabIcons'
export default {
    components: {
        bottomIcon: BottomIcons
    },
}
</script>

<style lang="scss" scoped>
.ocMobile{
    width: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    .active{
        color: $primary;
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
    .box{
        width: 90%;
        // height: 700px;
        border: 2px solid $text-disabled;
        margin-bottom: 40px;
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
        .secondDialer{
            height: 400px;
            border-top: 2px solid $text-disabled;
            position: relative;
            padding: 0 20px;
            // text-align: center;
            button{
                position: absolute;
                top:-20px;
                left: 150px;
                width: 150px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                height: 40px;
                background-color: $color-success;
                border-radius: 500px;
                color: white;
                border:none;
                &:focus{
                    outline: none;
                }
            }
            .firstDetails{
                padding: 40px 0 20px 0;
                border-bottom: 2px solid $color-light;
                font-size: 14px;
            }
            .secondDetails{
                position: relative;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                padding: 20px 0;
                border-bottom: 2px solid $color-light;
                font-size: 14px;
            }
            .icons{
                position: absolute;
                bottom: -170px;
                right: 65px;
                display: flex;;
                height: 200px;
                width: 70%;
                align-items: center;
                justify-content: space-between;
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
                    .green{
                        width: 70px;
                        height: 70px;
                        background-color: $color-success
                    }
                    .yellow{
                        background-color: $color-warning
                    }
                    .blue{
                        background-color: $color-info
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