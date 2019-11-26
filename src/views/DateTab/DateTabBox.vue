<template>
  <div class="box" :style="[disabled? {'color': '#e0e1e1'} : {}]">
      <div class="head" :style="[disabled? {'background-color': '#e0e1e0'} : {}]">
            {{disabled? 'הודעות בינלאומי - סמס לחו״ל' : 'שליחת הודעות סמס'}}
      </div>
      <div v-if="!disabled" class="bodyFirst">
          <div class="firstDetail">תשלום לפי יחידת חיוב - כל 70 תווים</div>
          <div class="secondDetail">3 אג׳ להודעה</div>
          <div class="iconHolder">
            <div class="icon"><icon name="checkbox-marked" size="2"/></div>
          </div>
      </div>
      <div v-else class="bodyFirst">
          <div class="firstDet">תשלום לפי יחידת חיוב</div>
          <div class="secondDet">צפה במחירון יחידות חיוב לפי מדינה</div>
          <div class="iconHolder">
            <div class="icon" style="background-color: #e0e1e0;"><icon name="remove" size="2"/></div>
          </div>
      </div>
      <div :style="[disabled? {'padding': '106px 0'} : {}]" class="bodySecond">
          <div v-if="!disabled">
            <div class="title">
                קבע תקציב
            </div>
            <div class="secondData">
                <div class="box">
                    <div class="boxData">
                        <div class="one">לפי סכום</div>
                        <div class="two">30</div>
                    </div>
                    <div class="boxDataFirst align-self-end">הודעות</div>
                </div>
                <div class="box">
                    <div class="boxData">
                        <div class="one">לפי כמות</div>
                        <div class="two">1,000</div>
                    </div>
                    <div class="boxDataFirst align-self-end">הודעות</div>
                </div>
            </div>
            <input type="range">
            
          </div>
            <div v-else>ללא הודעות סמס בינלאומי</div>
       </div>
  </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    
    .head{
        padding: 30px 0;
        background-color: #75b2e1;
        color: white;
        font-size: 25px;
        font-weight: 700;
    }
    .bodyFirst{
        position: relative;
        border: 2px solid #e2e3e2;
        border-top: none;
        padding: 30px 0 70px 0;
        .secondDetail{
            font-weight: 700;
            font-size: 25px;
        }
        .iconHolder{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #e2e3e2;
            position: absolute;
            bottom: -40px;
            left: 45%;
            .icon{
                background-color: #f26f3b;
                color: white;
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
        }
    }
    .bodySecond{
        padding: 50px 30px 30px 30px;
        border:  2px solid #e2e3e2;
        border-top: none;
        input{
            width: 100%;
        }
        
        .title{
            text-align: right;
        }
        .secondData{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            .box{
                width: 48.5%;
                padding: 5px 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border:  2px solid #e2e3e2;
                .boxDataFirst{
                    font-size: 16px;
                    font-weight: 700;
                }
                .boxData{
                    .one{
                        font-size: 14px;
                        font-weight: 0;
                        text-align: right;
                    }
                    .two{
                        font-size: 25px;
                        font-weight: 900;
                    }
                }
            }
        }
    }
}
</style>