<template>
    <div class="register-service">
        <div class="custom-container">
             <div class="top-title-area pt-3">
                <span>
                    שירותי המערכת - כיצד תרצה להתחיל?
                </span>
            </div>
            <div class="virtual-number-area">
                <div class="virtual-number-icon">
                    <div class="icon">
                        <icon name="chevron-right" size="3" />
                    </div>
                    <div class="image">
                        <img src="../assets/IncomingCallsIcon.png" class="w-100" />
                    </div>
                    <div class="icon">
                        <icon name="chevron-left" size="3" />
                    </div>
                </div>
                <div class="description-area">
                    <div>
                        <div class="pb-2">
                            <span class="general-text">
                                מהו מספר וירטואלי
                            </span>
                        </div>
                        <div class="bar">
                            <span>
                               מספר טלפון קווי לקבלת שיחות נכנסות, שמעביר את השיחות בעקוב אחרי, לטלפון אחר. ייחודו של מספר וירטואלי הוא ביכולות הנלוות, כמו: דוחות אונליין (פירוט שיחות, מעקב, שינויים), הקלטת שיחות נכנסות, התראות מייל ו SMS ,השמעת הכרזות, הגדרת שעות פעילות ועוד, שהופכים אותו לכלי עסקי שימושי
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="pb-2">
                            <span class="general-text mb-5">
                              כיצד עובד השירות  
                            </span>
                        </div>
                        <div class="bar">
                            <span>
                               תקבלו מספר טלפון קווי מסוג 073) או כמה לפי הצורך), כל שיחה נכנסת למספר הווירטואלי תעבור מיד למספר שתגדירו (אפשר שהשיחה תדלג בין כמה מספרים), כל שיחה נרשמת בדוחות (ממשק ניהול וסטטיסטיקה), מוקלטת (ללא עלות נפרדת), תקבלו התראות במצבי חוסר מענה או ניתוק, אפשר להגביל שיחות לפי שעות פעילות, להשמיע פתיח ומוסיקה בהמתנה, להפעיל תא קולי או שיחה חוזרת למייל, לשלוט על השיחה המזוהה ולהשמיע פתיח למקבל השיחה ("יש לכם שיחה נכנסת ממספר ווירטואלי") וגם  ניתן להוציא שיחה מהמספר הווירטואלי (מקבל השיחה לא ייראה את המספר הנייד או הישיר שלכם)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-area py-4">
                <div class="button-section">
                    slsl
                </div>
                <div class="arrow-section">
                    <div>
                         <ck-button 
                            tile
                            outline
                            style="border: 1px solid #f26f3b; color: #f26f3b;"
                        >
                            מידע מורחב אודות מספרים וירטואלים
                        </ck-button>
                    </div>
                    <div class="mr-2">
                        <ck-button 
                            tile 
                            customBg="#f26f3b" 
                            style="border: 1px solid #f26f3b;"
                        >
                            בחר חבילה מותאמת עבורך
                        </ck-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .register-service {

        .custom-container {
           padding: 0 50px;
        }

        .general-text {
            color: $primary-secondary;
            font-size: 30px;
            font-weight: bold;
        }

        .top-title-area {
            span {
                color: $primary;
                font-size: 35px;
                font-weight: bold;
            }
        }

        .virtual-number-area {
            display: flex;
            padding: 80px 0;


            .virtual-number-icon {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                //flex-direction: column;

                .image {
                    border: 1px solid $text-secondary;
                    width: 300px;
                    height: 300px;
                    border-radius: 50%;
                    box-shadow: -1px 3px 25px 2px rgba(188,216,238,1);
                    padding: 50px;
                    display: flex;
                    align-items: center;
                }

                .icon {
                    color: $accent-orange;
                }

            }

            .description-area {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .bar {
                    border-right: 2px solid #e5f4fb; 
                    padding-right: 20px;

                }
            }
        }

        .bottom-area {
            display: flex;

            .button-section {
                flex: 1;
            }

            .arrow-section {
                flex: 1;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>
