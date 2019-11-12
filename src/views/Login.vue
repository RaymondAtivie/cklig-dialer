<template>
    <div class="login">
        <div class="row">
            <div class="col-4 section right text-center">
                <div>
                    <div class="form-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="py-3 px-3">
                                        Login
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-12 text-right pb-1">
                                            <span class="form-text">התחברות למערכת</span>
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="דוא״ל" type="email" class="mb-3" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="טלפון נייד" type="password" class="mb-1" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="סיסמה" class="mb-1" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם משפחה" class="mb-1" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם פרטי" class="mb-1" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="מספר עוסק / ח.פ" class="mb-1" />
                                        </div>
                                        <div class="col-6 text-right">
                                            <ck-input label="שם העסק" class="mb-1" />
                                        </div>
                                        <div class="col-12 text-right">
                                            <ck-input label="שם רצוי לחשבון" class="mb-1" />
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select icon="card" title="כ.אשראי" />
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select icon="paypal" title="פיי-פל PayPal" />
                                        </div>
                                        <div class="col-4">
                                            <ck-card-select icon="cash" title="העברה בנקאית" />
                                        </div>
                                        <div class="col-12 text-center py-3">
                                            <span class="payment-text">The process of setting up the payment method</span>
                                        </div>
                                    </div>
                                    <div class="row align-items-center">
                                        <div class="col text-right">
                                        <ck-check-box label="השאר אותי מחובר"></ck-check-box>
                                        </div>
                                        <div class="col text-left">
                                            <span class="form-bottom-text">כחתי את הסיסמה ש</span>
                                        </div>
                                    </div>
                                    <div class="row py-3">
                                        <div class="col-12">
                                            <div class="form-error">
                                                <p><span class="font-weight-bold">הודעת שגיאה!</span> משהו לא תקין, הטקסט מגיע מדאטבייס.</p>
                                                <p> התוכן יכול להכיל עד 2 שורות.</p>
                                            </div>
                                            <div class="form-success">
                                                <p><span class="font-weight-bold">הודעת שגיאה!</span> משהו לא תקין, הטקסט מגיע מדאטבייס.</p>
                                                <p> התוכן יכול להכיל עד 2 שורות.</p>
                                            </div>
                                            <div class="form-success">
                                                <p><span class="font-weight-bold">הודעת הצלחה!</span> התשלום בכרטיס אשראי הוגדר בהצלחה</p>
                                                <p>הטקסט מגיע מדאטבייס. התוכן יכול להכיל עד 2 שורות.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row pt">
                                        <div class="col-10">
                                            <span class="ml-3">חזור ובטל</span> <ck-button customBg='#f26f3b'>כניסה למערכת</ck-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer">
                                <p> ?בסביבה חדשים <span style="font-weight: 400">www.phoneplus.co.il</span></p>
                                <p>אנחנו מכירים? הירשמו עכשיו למערכת</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col p-0">
                <div class="main-background">
                    wqw
                </div>
            </div>
            <div class="col-1 section">
                www
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.login {
    height: 100vh;
    .main-background {
        background-image: url('https://hackernoon.com/hn-images/1*jFyawcsqoYctkTuZg6wQ1A.jpeg');
        height: 100vh;
        background-position: center;
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
                font-size: 12px;
            }

            .form-success {
                border: 1px solid #84ca7d;
                background-color: #c8e4c5;
                color: #84ca7d;
                font-size: 12px;
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
            font-size: 12px;
        }
    }
    
    .footer {
        color: #ffffff;
        font-size: 15px;
    }
}
</style>