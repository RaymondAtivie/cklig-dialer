<template>
    <div>
        <div class="login-next">
        <navbar></navbar>
        <div class="container">
            <div class="row py-5">
                <div class="col-12 text-center">
                    <span class="main-text">ברוכים הבאים - בחר שירות אליו תרצה להירשם</span>
                </div>
            </div>
        </div>
        <div class="custom-container">
            <div class="row">
                    <div class="col p-0 service-card">
                        <div v-if="!options.includes('one')">
                            <div class="row py-3">
                                <div class="col-12 text-center">
                                    <span class="card-title">הפצת הודעות קוליות וסמס</span>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div class="col-12 text-center">
                                    <img src="../assets/DistributeIcon.png" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('one')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center">
                                                <icon name="cart" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selected" v-if="options.includes('one')">
                            <div class="row pt-5">
                                <div class="col-12 text-center">
                                    <span class="large bold">שירות שיחות יוצאות</span>
                                </div>
                                <div class="col-12 text-center">
                                     <span>כניסה לניהול השירות</span>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="border-top"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-4 text-left">
                                            <img src="../assets/Bar.png" />
                                        </div>
                                        <div class="col text-right">
                                            <div>
                                                <span class="medium bold">5 מממשקים פעילים</span>
                                            </div>
                                            <div>
                                                <span>ועוד 1 מספרים לשיחות נכנסות</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('one')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center" :style="{'background-color': '#f26f3b'}">
                                                <icon name="check-bold" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-0 service-card">
                        <div v-if="!options.includes('two')">
                            <div class="row py-3">
                                <div class="col-12 text-center">
                                    <span class="card-title">שירות שיחות יוצאות</span>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div class="col-12 text-center">
                                    <img src="../assets/OutgoingCall.png" />
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('two')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center">
                                                <icon name="cart" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selected" v-if="options.includes('two')">
                            <div class="row pt-5">
                                <div class="col-12 text-center">
                                    <span class="large bold">שירות שיחות יוצאות</span>
                                </div>
                                <div class="col-12 text-center">
                                     <span>כניסה לניהול השירות</span>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="border-top"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-4 text-left">
                                            <img src="../assets/Bar.png" />
                                        </div>
                                        <div class="col text-right">
                                            <div>
                                                <span class="medium bold">5 מממשקים פעילים</span>
                                            </div>
                                            <div>
                                                <span>ועוד 1 מספרים לשיחות נכנסות</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('two')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center" :style="{'background-color': '#f26f3b'}">
                                                <icon name="check-bold" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-0 service-card">
                        <div v-if="!options.includes('three')">
                            <div class="row py-3">
                                <div class="col-12 text-center">
                                    <span class="card-title">מספר וירטואלי - שיחות נכנסות</span>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div class="col-12 text-center">
                                    <img src="../assets/IncomingCallsIcon.png" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon"  @click="select('three')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center">
                                                <icon name="cart" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selected" v-if="options.includes('three')">
                            <div class="row pt-5">
                                <div class="col-12 text-center">
                                    <span class="large bold">שירות שיחות יוצאות</span>
                                </div>
                                <div class="col-12 text-center">
                                     <span>כניסה לניהול השירות</span>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="border-top"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-4 text-left">
                                            <img src="../assets/Bar.png" />
                                        </div>
                                        <div class="col text-right">
                                            <div>
                                                <span class="medium bold">5 מממשקים פעילים</span>
                                            </div>
                                            <div>
                                                <span>ועוד 1 מספרים לשיחות נכנסות</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('three')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center" :style="{'background-color': '#f26f3b'}">
                                                <icon name="check-bold" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col p-0 service-card">
                        <div v-if="!options.includes('four')">
                            <div class="row py-3">
                                <div class="col-12 text-center">
                                    <span class="card-title">מספר וירטואלי - קוד מעקב</span>
                                </div>
                            </div>
                            <div class="row pt-4">
                                <div class="col-12 text-center">
                                    <img src="../assets/TrackingCodeIcon.png" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('four')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center">
                                                <icon name="cart" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="selected" v-if="options.includes('four')">
                            <div class="row pt-5">
                                <div class="col-12 text-center">
                                    <span class="large bold">שירות שיחות יוצאות</span>
                                </div>
                                <div class="col-12 text-center">
                                     <span>כניסה לניהול השירות</span>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="border-top"></div>
                                </div>
                            </div>
                            <div class="row justify-content-center pt-4">
                                <div class="col-10">
                                    <div class="row">
                                        <div class="col-4 text-left">
                                            <img src="../assets/Bar.png" />
                                        </div>
                                        <div class="col text-right">
                                            <div>
                                                <span class="medium bold">5 מממשקים פעילים</span>
                                            </div>
                                            <div>
                                                <span>ועוד 1 מספרים לשיחות נכנסות</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-center d-flex flex-column align-items-center">
                                    <div class="bottom-icon" @click="select('four')">
                                        <div class="border-area">
                                            <div class="main-area d-flex align-items-center justify-content-center" :style="{'background-color': '#f26f3b'}">
                                                <icon name="check-bold" size="1.5" iconWhite />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col pr-0">
                        <div class="border py-1 px-4">
                            <div class="row align-items-center" style="min-height: 176px">
                                <div class="col">
                                    <div class="invoice-amount">
                                        <div class="side-border"></div>
                                        <div class="pr-4 text">
                                            <div>
                                                <span class="large">00.00 ₪</span>
                                            </div>
                                            <div>
                                                <span>סכום חשבונית אחרונה</span>
                                            </div>
                                            <div>
                                                <small>מועד חיוב<span class="bold">2018.8.26</span> | <router-link to="/login" tag="a">נהל חשבוניות</router-link></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="invoice-name">
                                        <div class="row">
                                            <div class="col-12">
                                                <span>שם החשבונית לישראל בע״מ</span>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <small><span class="bold"> ח.פ 020202020</span> | <span class="bold">9999  בכ.א שמסתיים ב-</span> | <router-link to="/login" tag="a">ערוך פרטים</router-link></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pl-0">
                        <div class="border py-1 px-5">
                            <div class="row justify-content-center align-items-center" style="min-height: 176px">
                                <div class="col-3 text-center">
                                    <img  src="../assets/IncomingCallsIcon.png" class="w-100" />
                                </div>
                                <div class="col-8">
                                    <div class="row other-card">
                                        <div class="col-12">
                                            <span class="large bold">
                                                פעולות נפוצות או חדשות ועדכונים
                                            </span>
                                            <br />
                                            <span class="large bold">
                                                או כל דבר שתרצה במסך הראשי
                                            </span>
                                            <br />
                                            <span>השארתי קוביה ריקה למידע שאולי תרצה להוסיף</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        'navbar': NavBar
    },
    data(){
        return {
            options: []
        }
    },
    watch: {
        options(x){
            console.log(x);
        }
    },
    methods:{
        select(option){
            if(this.options.includes(option)) {
                const index = this.options.findIndex(element => element === option);
                this.options.splice(index, 1);
                return;
            }
            this.options.push(option);
        
        }
    }
}
</script>
<style lang="scss" scoped>
    .login-next {
        min-height: 100vh;
        .main-text {
            font-weight: bold;
            font-size: 25px;
            color: $primary;
        }

        .custom-container {
           padding: 0 50px;
        }

        .service-card {
            border: 1px solid #e0e1e0;
            border-right: none;
            height: 300px;
        
            &:first-child {
                border-right: 1px solid #e0e1e0 !important;
            }
            .card-title {
                color: $primary-secondary;
                font-weight: 600;
                font-size: 20px;
            }

            img {
                width: 120px;
                height: 120px;
            }

            .selected {
                span {
                    font-size: 15px;

                    &.large {
                        font-size: 25px;
                    }

                    &.medium {
                        font-size: 20px;
                    }

                    &.bold {
                        font-weight: bold;
                    }
                }

                img {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        .invoice-amount {
            display: flex;
            align-items: center;

            .side-border {
                width: 7px;
                height: 95px;
                background-color: $primary-secondary;
            }

            .text {
                flex: 1;

                span {
                    font-size: 20px;
                    font-weight: bold;
                    &.large {
                        font-size: 30px;
                    }
                }

                small {
                    font-size: 13px;

                    span {
                        font-size: 13px !important;
                         &.bold {
                            font-weight: 300;
                        }

                        &.primary {
                            color: $primary-secondary;
                        }
                    }
                }
            }
        }

        .invoice-name {
            padding-top: 42px;

            span {
                font-size: 20px;
                font-weight: bold;
            }

            small {
                    font-size: 13px;

                    span {
                        font-size: 13px !important;
                         &.bold {
                            font-weight: 300;
                        }

                        &.primary {
                            color: $primary-secondary;
                        }
                    }
            }
        }

        .other-card {
            span {
                font-size: 15px;
                color: $primary-secondary;

                &.large {
                    font-size: 25px;
                }

                &.bold {
                    font-weight: bold;
                }
            }
        }

        .bottom-icon {
            margin-top: 55px;
            text-align: center;
            cursor: pointer;

            .border-area {
                height: 70px;
                width: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 1px solid #e0e1e0;
                background-color: #ffffff;

                .main-area {
                    background-color: #e0e1e0;
                    height: 60px;
                    width: 60px;
                    border-radius: 50%;
                }
            }
        }
    }
</style>