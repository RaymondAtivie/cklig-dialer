<template>
<div>
    <div class="new-login">
        <div class="right"></div>
        <div class="center">
            <div class="big-circle">
                <div class="circle-content">
                    <div>
                        <div class="mb-4">
                            <img src="../assets/logo.png" style="width: 40%" />
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-9">
                                <div v-if="currentView === 'login-view'">
                                    <div class="row">
                                        <div class="col-12 text-right pb-2">
                                            <span class="form-text">התחברות למערכת</span>
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="דוא״ל" type="email" class="mb-3 white" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="טלפון נייד" type="password" class="mb-1 white" />
                                        </div>
                                    </div>
                                    <div class="row align-items-center">
                                        <div class="col text-right">
                                            <ck-check-box label="השאר אותי מחובר"></ck-check-box>
                                        </div>
                                        <div class="col text-left">
                                            <span class="form-bottom-text" @click="handleViews('forgot-password-view')">כחתי את הסיסמה ש</span>
                                        </div>
                                    </div>
                                    <div class="form-error text-right px-3 mt-2">
                                        <p><span class="font-weight-bold">הודעת שגיאה!</span> משהו לא תקין, הטקסט מגיע מדאטבייס.</p>
                                        <p> התוכן יכול להכיל עד 2 שורות.</p>
                                    </div>

                                    <div class="row justify-content-center mt-4">
                                        <div class="col-10">
                                            <ck-button @click="handleViews('signup-view')" class="px-5 border-0" customBg='#f26f3b'>כניסה למערכת</ck-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="currentView === 'signup-view'">
                                    <div class="row">
                                        <div class="col-12 text-right pb-1">
                                            <span class="form-text">הרשמה למערכת</span>
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="דוא״ל" type="email" class="mb-3 white" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="טלפון נייד" type="password" class="mb-1 white" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="סיסמה" class="mb-1" />
                                        </div>
                                    </div>
                                    <div class="row justify-content-center mt-5">
                                        <div class="col-10">
                                            <span class="ml-3 back-navigation" @click="back">חזור ובטל</span> <ck-button @click="handleViews('signup-view-two')" class="px-5 border-0" customBg='#f26f3b'>הרשמה למערכת</ck-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="currentView === 'signup-view-two'">
                                    <div class="row">
                                        <div class="col-12 text-right pb-2">
                                            <span class="form-text">פרטים אישיים ופרטי העסק</span>
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם משפחה" class="mb-1 white" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם פרטי" class="mb-1 white" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="מספר עוסק / ח.פ" class="mb-1 white" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם העסק" class="mb-1 white" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="שם רצוי לחשבון" class="mb-1 white" />
                                        </div>
                                    </div>
                                    <div class="row justify-content-center mt-5">
                                        <div class="col-10">
                                            <span class="ml-3 back-navigation" @click="back">חזור ובטל</span> <ck-button @click="handleViews('signup-payment-view')" class="px-5 border-0" customBg='#f26f3b'>המשך הרשמה</ck-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="currentView === 'signup-payment-view'">
                                    <div class="row">
                                        <div class="col-12 text-right pb-2">
                                            <span class="form-text">בחר את אופן התשלום</span>
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select @selected="handlePaymentOptions('card')" :active="selectedPaymentOption == 'card'" icon="credit-card" title="כ.אשראי" />
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select @selected="handlePaymentOptions('paypal')" :active="selectedPaymentOption == 'paypal'" icon="paypal" title="פיי-פל PayPal" />
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select @selected="handlePaymentOptions('cash')" :active="selectedPaymentOption == 'cash'" icon="cash" title="העברה בנקאית" />
                                        </div>
                                    </div>
                                    <div class="form-success text-right px-3 mt-2">
                                        <p><span class="font-weight-bold">הודעת הצלחה!</span> התשלום בכרטיס אשראי הוגדר בהצלחה</p>
                                        <p>הטקסט מגיע מדאטבייס. התוכן יכול להכיל עד 2 שורות.</p>
                                    </div>
                                    <div class="row justify-content-center mt-5">
                                        <div class="col-10">
                                            <span class="ml-3 back-navigation" @click="back">חזור ובטל</span> <ck-button :disabled="selectedPaymentOption.length > 1 ? false : true"  class="px-5 border-0" customBg='#f26f3b'>המשך הרשמה</ck-button>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="currentView === 'forgot-password-view'">
                                    <div class="row">
                                        <div class="col-12 text-right pb-1">
                                            <span class="form-text">איפוס סיסמה</span>
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="דוא״ל" type="email" class="mb-3 white" />
                                        </div>
                                    </div>
                                     <div class="form-success text-right px-3 mt-2">
                                        <p><span class="font-weight-bold">הודעת שגיאה!</span> משהו לא תקין, הטקסט מגיע מדאטבייס.</p>
                                        <p> התוכן יכול להכיל עד 2 שורות.</p>
                                    </div>
                                    <div class="row justify-content-center mt-5">
                                        <div class="col-10">
                                            <span class="ml-3 back-navigation" @click="back">חזור ובטל</span> <ck-button class="px-5 border-0" customBg='#f26f3b'>איפוס סיסמה</ck-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="left"></div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            currentView: 'login-view',
            viewHistory: [],
            selectedPaymentOption: ''
        }
    },
    methods: {
        handlePaymentOptions(option){
            if(this.selectedPaymentOption === option){
                this.selectedPaymentOption = "";
                return;
            }
            this.selectedPaymentOption = option;
        },
        handleViews(view){
            this.viewHistory.push(this.currentView);
            this.currentView = view;
        },
        back(){
            this.currentView = this.viewHistory.pop();
        }
    }
}
</script>
<style lang="scss" scoped>
.white{
    background-color: white;
}
.new-login{
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    .left{
        background-color: #548cce;
        width: 50px;
        box-shadow: 0 5px 38px rgba(0,0,0,0.5), 0 5px 12px rgba(0,0,0,0.5);
        border-right: 1px solid #254aa5;
    }
    .right{
        background-color: #548cce;
        width: 600px;
        box-shadow: 0 5px 38px rgba(0,0,0,0.5), 0 5px 12px rgba(0,0,0,0.5);
        position: relative;
        z-index: 2;
        // border-left: 1px solid #254aa5;
    }
    .center{
        background-color: white;
        flex: 1;
        background-image: url('../assets/bg-login.jpg');
        // height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        align-items: center;
        display: flex;
        .big-circle {
            transform: translateX(50%);
            border-radius: 50%;
            width: 700px;
            height: 700px;
            background-color: #fbfbfc;
            position: relative;
            z-index: 4;
            padding: 10px;
            box-shadow: 0 5px 38px rgba(0,0,0,0.5), 0 5px 12px rgba(0,0,0,0.5);
            .circle-content{
                border: 4px solid #548cce;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                text-align: center;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .form-text {
                color: #4183C3;
                font-weight: bold;
            }

            .form-bottom-text {
                cursor: pointer;
                // font-size: 12px;
            }

            .form-error {
                border: 1px solid #ec4f41;
                background-color: #faccd1;
                color: #ec4f41;
                // font-size: 12px;
            }

            .form-success {
                border: 1px solid #84ca7d;
                background-color: #c8e4c5;
                color: #84ca7d;
                // font-size: 12px;
            }

            .back-navigation {
                cursor: pointer;
            }
        }
    }
}
.login {
    height: 100vh;
    .main-background {
        background-image: url('../assets/bg-login.jpg');
        height: 100vh;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .section {
        height: 100vh;
        background-color: #4183C3;

        &.right {
            display: flex;
            //align-items: center;
            justify-content: space-around;
            flex-direction: column;
        }

        .form-area {
            background-color: #ffffff;
            margin-top: 30px;
            border: 1.5px solid #4183c4;
            //border-radius: 50%;
            padding: $basePx * 5 25px;
            box-shadow: 0 0 0 8px #ffffff;

            .form-error {
                border: 1px solid #ec4f41;
                background-color: #faccd1;
                color: #ec4f41;
                // font-size: 12px;
            }

            .form-success {
                border: 1px solid #84ca7d;
                background-color: #c8e4c5;
                color: #84ca7d;
                // font-size: 12px;
            }

            .payment-text {
                color: #4183c4;
                font-weight: bold;
            }
        }

        .form-text {
            color: #4183C3;
            font-weight: bold;
        }

        .form-bottom-text {
            // font-size: 12px;
        }
    }
    
    .footer {
        color: #ffffff;
        font-size: 15px;
    }
}
</style>