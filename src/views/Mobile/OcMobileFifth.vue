<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">שיחות יוצאות</div>
        <div class="secondTitle">ערוך רשימת חיוג</div>
    </div>
    <div class="box">
        <div class="listHolder">
            <div class="list one">
                <div @click="listClicked('tab1')">
                    <icon :name="clicked.indexOf('tab1') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab1') !== -1? '#2384c8':'#616161'"/>
                </div>
                <div class="mr-4">052-9234567  |  שם ראשון ברשימה</div>
            </div>
            <div class="list two">
                <div @click="listClicked('tab2')">
                    <icon :name="clicked.indexOf('tab2') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab2') !== -1? '#2384c8':'#616161'"/>
                </div>
                <div class="mr-4">052-2233456  |  לקוח איש קשר</div>
            </div>
            <div class="listBordered">
                <div @click="listClicked('tab3') ">
                    <icon :name="clicked.indexOf('tab3')!== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab3') !== -1? '#2384c8':'#616161'"/>
                </div>
                <div class="mr-4">052-2233456  |  איש קשר נוסף</div>
            </div>
            <div class="list two">
                <div @click="listClicked('tab4')">
                    <icon :name="clicked.indexOf('tab4') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab4') !== -1? '#2384c8':'#616161'"/>
                </div>
                <div class="mr-4">052-9234567   |  בעתיד שם-רשומה</div>
            </div>
            <div class="list three">
                <div class="iconList">
                    <div @click="listClicked('tab5') ">
                        <icon :name="clicked.indexOf('tab5')!== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab5') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-4">052-2233456   |  שם אישקשר</div>
                </div>
                <div><icon name="phone-cancel" color="#ffb300"/></div>
            </div>
            <div class="list two">
                <div @click="listClicked('tab6')">
                    <icon :name="clicked.indexOf('tab6') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab6') !== -1? '#2384c8':'#61616'"/>
                </div>
                <div class="mr-4">052-9234567   |  שם הבא</div>
            </div>
            <div class="list three">
                <div class="iconList">
                    <div @click="listClicked('tab7')">
                        <icon :name="clicked.indexOf('tab7') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab7') !== -1? '#2384c8':'#61616'"/>
                    </div>
                    <div class="mr-4">052-2233456   |  לקוח איש קשר</div>
                </div>
                <div><icon name="phone-incoming" color="#1cc44f"/></div>
            </div>
            <div class="list two">
                <div @click="listClicked('tab8')">
                    <icon :name="clicked.indexOf('tab8') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab8') !== -1? '#2384c8':'#61616'"/>
                </div>
                <div class="mr-4">052-9234567   |  איש קשר נוסף</div>
            </div>
            <div class="icons">
                <div class="borderRound borderSmall">
                    <div class="icon blue">
                        <icon name="clipboard-check" size="1"/>
                    </div>
                </div>
                <div class="borderRound borderBig">
                    <div class="icon yellow">
                        <icon name="redo-variant" size="2"/>
                    </div>
                </div>
                <div class="borderRound borderSmall">
                    <div class="icon red">
                        <icon name="power" size="1"/>
                    </div>
                </div>
            </div>
            <!-- <div class="transparentize"></div> -->
        </div>
    </div>
    <div class="tabs">
        <div class="tab text-center">
            <icon name="format-list-numbered" size="1.3"/>
            <div>ניהול<br>משימות</div>
        </div>
        <div class="tab text-center active">
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
export default {
    data() {
        return {
            clicked: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5', 'tab6', 'tab7', 'tab8']
        }
    },
    methods: {
        listClicked(tab){
            let index = this.clicked.indexOf(tab)
            if(index !== -1){
                this.clicked.splice(index,1);
            } else {
                this.clicked.push(tab);
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
            .listBordered{
                padding: 0 16px;
                margin: auto;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                border: 1px dashed $text-primary; 
            }
            .icons{
                position: absolute;
                bottom: -170px;
                right: 65px;
                display: flex;
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