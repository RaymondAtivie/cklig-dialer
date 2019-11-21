<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">שיחות יוצאות</div>
        <div class="secondTitle">ערוך רשימת חיוג</div>
    </div>
    <div class="box">
        <div class="listHolder">
            <tab-dashed :opened='isOpened(1)' @topClicked="rowOpen('1')" number="052-9234567" text="שם ראשון ברשימה"></tab-dashed>
            <tab-dashed :opened='isOpened(2)' @topClicked="rowOpen('2')" number="052-2233456" text="לקוח איש קשר"></tab-dashed>
            <tab-dashed :opened='isOpened(3)' @topClicked="rowOpen('3')" number="052-2233456" text="איש קשר נוסף"></tab-dashed>
            <tab-dashed :opened='isOpened(4)' @topClicked="rowOpen('4')" number="052-9234567" text="בעתיד שם-רשומה"></tab-dashed>
            <tab-dashed :opened='isOpened(5)' @topClicked="rowOpen('5')" number="052-2233456" text="שם אישקשר" icon="phone-cancel" iconColor="#ffb300"></tab-dashed>
            <tab-dashed :opened='isOpened(6)' @topClicked="rowOpen('6')" number="052-9234567" text="שם הבא"></tab-dashed>
            <tab-dashed :opened='isOpened(7)' @topClicked="rowOpen('7')" number="052-2233456" text="לקוח איש קשר" icon="phone-incoming" iconColor="#1cc44f"></tab-dashed>
            <tab-dashed :opened='isOpened(8)' @topClicked="rowOpen('8')" number="052-2233456" text="איש קשר נוסף"></tab-dashed>

            <div class="icons">
                <div class="borderRound borderSmall ml-3">
                    <div class="icon blue">
                        <icon name="clipboard-check" size="1"/>
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
    <bottom-icon active="phone"></bottom-icon>
  </div>
</template>

<script>
import BottomIcons from './BottomTabIcons'
import Tabs from './DashedBotheredTab'
export default {
    components: {
        bottomIcon: BottomIcons,
        tabDashed: Tabs,
    },
    data() {
        return {
            clicked: false,
            openedRow: null
        }
    },
    methods: {
        isOpened(row){
            if(this.openedRow == row){
                return true
            }else{
                return false
            }
        },
        rowOpen(row) {
            if(this.openedRow == row){
                this.openedRow = null;
                return;
            }

            this.openedRow = row;
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
            text-align: center;
            height: 450px;
            padding: 20px 0;
            font-size: 14px;
            .icons{
                position: absolute;
                bottom: -170px;
                // right: 65px;
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