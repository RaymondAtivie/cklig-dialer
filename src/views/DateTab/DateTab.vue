<template>
  <div class="dateTab">
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-10 text-center">
            <div class="headings">
                <div class="firstHeading">מספרים וירטואלים - בחר את המסלול</div>
                <div class="secondHeading">הנוח ביותר עבורך</div>
            </div>
            <div class="bigBody">
                <div class="tabs">
                    <div class="tabSecond">מסלול שקט נפשי - תשלום חודשי קבוע</div>
                    <div class="tabFirst">מסלול קל - תשלום לפי שימוש</div>
                </div>
                <div class="alignedNumbers">
                    <div class="title">
                        אלעזר ידידי היקר, אולי תרצה לכתוב כאן מספר מילים אודות המסלול הנבחר
                    </div>
                    <div class="numbersHolder">
                        <div class="circleHolder">
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab8')" class="circle"><number-circle :active="clickedCircleTab=='tab8'" :number=400 text="מספרים"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab8'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 3,600 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab7')" class="circle"><number-circle :active="clickedCircleTab=='tab7'" :number=200 text="מספרים"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab7'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 2,000 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab6')" class="circle"><number-circle :active="clickedCircleTab=='tab6'" :number=100 text="מספרים"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab6'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 1,300 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab5')" class="circle"><number-circle :number=25 text="מספרים" :active="clickedCircleTab=='tab5'"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab5'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 450 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab4')"  class="circle"><number-circle :number=10 text="מספרים" :active="clickedCircleTab=='tab4'"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab4'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 200 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails">
                                <div @click="ChangeCircleTab('tab3')" class="circle"><number-circle :number=5 text="מספרים" :active="clickedCircleTab=='tab3'"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab3'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 145 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails" >
                                <div  @click="ChangeCircleTab('tab2')" class="circle"><number-circle :number=3 text="מספרים" :active="clickedCircleTab=='tab2'"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab2'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 99 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                            <div class="circleDetails"  >
                                <div @click="ChangeCircleTab('tab1')" class="circle"><number-circle :number=1 text="מספרים" :active="clickedCircleTab=='tab1'"/></div>
                                <div :class="{'activeDetails': clickedCircleTab =='tab1'}" class="details mt-2">
                                    <div> <span class="secondDetail"> 69 </span> <span class="symbol"> ₪ </span></div>
                                    <div class="firstDetail">תשלום חודשי</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="circleBottom">
                        <div class="circleBottomDetails pr-4">
                            <div class="second">סה״כ מספרים בחבילה</div>
                            <div class="first">35 מספרים</div>
                        </div>
                        <div class="circleBottomDetails bords pr-4">
                            <div class="second">זמן שימוש סביר לחבילה זו לכל המספרים</div>
                            <div class="first">3,830 דקות</div>
                        </div>
                        <div class="circleBottomDetails bords pr-4">
                            <div class="second">תקציב דקות חיוג שיחות יוצאות</div>
                            <div class="first">1,363 דקות</div>
                        </div>
                        <div class="circleBottomDetails bords pr-4">
                            <div class="second">תקציב הודעות סמס</div>
                            <div class="first">1,000 הודעות </div>
                        </div>
                        <div class="circleBottomDetails bords pr-4">
                            <div class="second">תקציב חייגן ותקשורת בינלאומי</div>
                            <div class="first">ללא חייגן ללא סמס</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4"><box/></div>
                <div class="col-md-4"><box/></div>
                <div class="col-md-4"><box/></div>
            </div>
            <div class="row mt-4">
                <div class="col-md-4"><box :disabled="true"/></div>
                <div class="col-md-4"><box :disabled="true"/></div>
                <div class="col-md-4" ><box box='second'/></div>
            </div>
            <button>עבור לבחירת מספרים</button>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import NumberCircle from './NumbersinCircle'
import Box from './DateTabBox'
export default {
    components: {
        numberCircle: NumberCircle,
        box: Box
    },
    data() {
        return {
            clickedCircleTab: 'tab1'
        }
    },
    methods: {
        ChangeCircleTab(tab){
            this.clickedCircleTab = tab
        }
    }
}
</script>

<style lang="scss" scoped>
    .dateTab{
        padding: 50px 0;
        button{
            margin-top: 50px;
            width: 500px;
            border: none;
            height: 80px;
            background-color: #f26f3b;
            font-size: 25px;
            font-weight: 700;
            color: white;
            border-radius: 10px;
            &:focus{
                outline: none;
            }
        }
        .firstHeading{
            font-size: 30px;
            color: #4183c4;
            font-weight: 700;
        }
        .secondHeading{
            font-size: 55px;
            color: #4183c4;
            font-weight: 700;
        }
        .bigBody{
            margin: 40px 0 ;
            .tabs{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .tabFirst{
                    width: 49.9%;
                    background-color: #e0e1e0;
                    padding: 30px 0;
                    font-size: 25px;
                    font-weight: 600;
                    color: #ffffff;
                    border-top-right-radius: 30px;
                    border-top-left-radius: 30px;
                    cursor: pointer;
                }
                .tabSecond{
                    width: 49.9%;
                    background-color:#75b2e1;
                    padding: 30px 0;
                    font-size: 25px;
                    font-weight: 600;
                    color: #ffffff;
                    border-top-right-radius: 30px;
                    border-top-left-radius: 30px;
                    cursor: pointer;
                }
            }
            .alignedNumbers{
                width: 100%;
                // height: 150px;
                border: 2px solid #f1f1f1;
                border-top: none;
                .title{
                    padding: 30px 0;
                    font-size: 20px;
                    font-weight: 600;
                }
                .numbersHolder{
                    position: relative;
                    width: 90%;
                    margin:auto;
                    border-top: 2px solid #e2e3e2;
                    margin-bottom: 150px;
                    margin-top: 100px;
                    padding: 50px 0;
                    .circleHolder{
                        width: 100%;
                        // height: 300px;
                        // background-color: red;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        position: absolute;
                        top: -65px;
                        .circleDetails{
                            .circle{
                                width: 130px;
                                height: 130px;
                                border-radius: 50%;
                                background-color: white;
                                border: 2px solid #e2e3e2;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;
                            }
                            .details{
                                color: #e0e1e0;
                                .symbol{
                                    font-size: 12px;
                                    font-weight: 600;
                                }
                                .firstDetail{
                                    font-size: 14px;
                                }
                                .secondDetail{
                                    font-size: 25px;
                                    font-weight: 600
                                }
                            }
                            .activeDetails{
                                color: #75b2e1;
                            }
                        }
                    }
                }
                .circleBottom{
                    width: 90%;
                    margin: auto;
                    border-top: 2px solid #e2e3e2;
                    // padding: 150px 0;
                    display: flex;
                    align-items: center;
                    .circleBottomDetails{
                        width: 20%;
                        text-align: right;
                        margin: 15px 0;
                        height: 100px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        .second{
                            font-size: 13px;
                        }
                        .first{
                            font-size: 25px;
                            font-weight: 700;
                        }
                    }
                    .bords{
                        border-right: 1px solid #e2e3e2;
                    }
                }
            }
        }
    }
</style>