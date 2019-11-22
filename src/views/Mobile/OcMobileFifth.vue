<template>
  <div class="ocMobile">
    <div class="title">
        <div class="firstTitle text-center">שיחות יוצאות</div>
        <div class="secondTitle">ערוך רשימת חיוג</div>
    </div>
    <div class="box">
        <div class="listHolder">
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab1')}">
                <div class="list one">
                    <div @click="listClicked('tab1')">
                        <icon :name="clicked.indexOf('tab1') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab1') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-9234567  |  שם ראשון ברשימה</div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab2')}">
                <div  class="list one">
                    <div @click="listClicked('tab2')">
                        <icon :name="clicked.indexOf('tab2') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab2') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-2233456  |  לקוח איש קשר</div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab3')}">
                <div  class="list one">
                    <div @click="listClicked('tab3') ">
                        <icon :name="clicked.indexOf('tab3')!== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab3') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-2233456  |  איש קשר נוסף</div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab4')}">
                <div  class="list one">
                    <div @click="listClicked('tab4')">
                        <icon :name="clicked.indexOf('tab4') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab4') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-9234567   |  בעתיד שם-רשומה</div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab5')}">
                <div  class="list two">
                    <div class="iconList">
                        <div @click="listClicked('tab5') ">
                            <icon :name="clicked.indexOf('tab5')!== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab5') !== -1? '#2384c8':'#616161'"/>
                        </div>
                        <div class="mr-2">052-2233456   |  שם אישקשר</div>
                    </div>
                    <div><icon name="phone-cancel" color="#ffb300"/></div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab6')}">
                <div  class="list one">
                    <div @click="listClicked('tab6')">
                        <icon :name="clicked.indexOf('tab6') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab6') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-9234567   |  שם הבא</div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab7')}">
                <div  class="list two">
                    <div class="iconList">
                        <div @click="listClicked('tab7')">
                            <icon :name="clicked.indexOf('tab7') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab7') !== -1? '#2384c8':'#616161'"/>
                        </div>
                        <div class="mr-2">052-2233456   |  לקוח איש קשר</div>
                    </div>
                    <div><icon name="phone-incoming" color="#1cc44f"/></div>
                </div>
            </div>
            <div class="bActiveTab" :class="{'activeTab': isITClicked('tab8')}">
                <div class="list one">
                    <div @click="listClicked('tab8')">
                        <icon :name="clicked.indexOf('tab8') !== -1? 'checkbox-marked':'crop-free'" :color="clicked.indexOf('tab8') !== -1? '#2384c8':'#616161'"/>
                    </div>
                    <div class="mr-2">052-9234567   |  איש קשר נוסף</div>
                </div>
            </div>
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
export default {
    components: {
        bottomIcon: BottomIcons
    },
    data() {
        return {
            clicked: []
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
            
        },
        isITClicked(tab){
            if(this.clicked.indexOf(tab) !== -1){
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
        font-size: 14px;
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
                justify-content: flex-start
            }
            .two{
                justify-content: space-between;
                .iconList{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start
                }
            }
            .bActiveTab{
                border: 1px dashed transparent; 
                border-top: 1px solid $color-light;
            }
            .activeTab{
                background-color: #60b4e544;
                border: 1px dashed $text-primary; 
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