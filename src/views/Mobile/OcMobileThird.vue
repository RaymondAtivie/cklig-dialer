<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">צהריים טובים</div>
        <div class="secondTitle">הקלד מספר לרשימת חיוג</div>
    </div>
    <div class="box">
        <div class="dialer">
            <div class="dialerFirst">הוסף מספר לחיוג</div>
            <div class="dialerSecond mt-2">____052-663</div>
            <div class="keys mt-5">
                <div class="keypad">3</div>
                <div class="keypad mr-2">2</div>
                <div class="keypad mr-2">1</div>
            </div>
            <div class="keys mt-2">
                <div class="keypad">6</div>
                <div class="keypad mr-2">5</div>
                <div class="keypad mr-2">4</div>
            </div>
            <div class="keys mt-2">
                <div class="keypad">9</div>
                <div class="keypad mr-2">8</div>
                <div class="keypad mr-2">7</div>
            </div>
            <div class="keys mt-2">
                <div class="keypad">#</div>
                <div class="keypad mr-2">0</div>
                <div class="keypad mr-2"><icon name="asterisk" /></div>
            </div>
             <div class="lastDetails">
                <div class="borderRound"><img src="../../assets/israel-flag.png" alt="flag"> 972 + </div> <button>+  הוסף לרשימת חיוג</button> 
            </div>
        </div>
    </div>
    <bottom-icon active="dialpad"></bottom-icon>
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
        position: relative;
        // height: 700px;
        border: 2px solid $text-disabled;
        margin-bottom: 40px;
        padding-bottom: 20px;

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
            .keys{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                .keypad{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background-color: $color-light;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                }
            }
            .lastDetails{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                padding: 0 10px;
                position: absolute;
                bottom: -20px;
                width: 100%;
                button{
                    width: 170px;
                    height: 40px;
                    background-color: $color-success;
                    border-radius: 500px;
                    color: white;
                    border:none;
                    &:focus{
                        outline: none;
                    }
                }
                .borderRound{
                    cursor: pointer;
                    border: 2px solid $text-disabled;
                    border-radius: 500px;
                    background-color: white;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 15px;
                    width: 120px;
                    height: 40px;
                }
            }
        }
    }
}
</style>