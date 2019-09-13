<template>
    <div class="container home">
        <div class="row">
            <div class="col">
                <h1>כותרת ראשית H1 - גודל טקסט 30 פיקסל</h1>
                <h2>כותרת משנה H2 - גודל טקטסט 25 פיקסל</h2>
                <h3>כותרת רמה H3 - גודל טקסט 20 פיקסל</h3>

                <p class="label">
                    תווית לשדה מילוי - בולד 15 פיקסל
                </p>
                <p class="field">
                    תוכן שדה למילוי - לייט 12 פיקסל
                </p>

                <ck-input class="mt-4" />

                <ck-box class="m-1">
                    מערך זמנים לביצוע הפעולה
                </ck-box>
                <ck-box primary block class="m-1">
                    מערך זמנים לביצוע הפעולה
                </ck-box>
                <ck-box accent class="m-1">
                    מערך זמנים לביצוע הפעולה
                </ck-box>
                <ck-box class="m-1">
                    מערך זמנים לביצוע הפעולה
                </ck-box>

                <div class="border-primary-bg-right">
                    <div class="d-flex mb">
                        <ck-box primary ml>sss</ck-box>
                        <ck-box stretch ml>מספר יחיד להעברת שיחה</ck-box>
                        <ck-box stretch accent>sss</ck-box>
                    </div>
                    <div class="d-flex mb">
                        <ck-box primary ml>sss</ck-box>
                        <ck-box stretch accent>sss</ck-box>
                    </div>
                    <div class="d-flex">
                        <ck-box primary ml>sss</ck-box>
                        <ck-box stretch br disabled>חוסר מענה ביעד השיחה</ck-box>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col-12">
                        <ck-audio />
                    </div>
                </div>
            </div>
            <div class="col">
                <p class="body">
                    חברת פון פלוס בע"מ מפתחת, מספקת ומשווקת שירותי ערך מוסף מתקדמים
                    בתחום התקשרות זה מספר שנים. שירותי הערך המוסף של פון פלוס מיועדים לכל
                    סוג עסק, בכל גודל ומיקום. וממוקדים בניהול הקשר בין העסק ללקוח.
                </p>

                <p class="body mt-5">
                    Phone Plus Ltd. has been developing, supplying and marketing
                    advanced services in the field of communications for several years.
                    Phone Plus's Services are designed for any kind of business, of any
                    size and location, and are focused on managing the relationship
                    between the business and the customer
                </p>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col">
                <h3 class="t-secondary">כפתורים</h3>
            </div>
            <div class="col text-left">
                <h3 class="t-secondary">Buttons</h3>
            </div>
        </div>
        <hr />
        <button-section />

        <div class="row mt-5">
            <div class="col">
                <h3 class="t-secondary">התראות</h3>
            </div>
            <div class="col text-left">
                <h3 class="t-secondary">Alerts</h3>
            </div>
        </div>
        <hr />
        <alert-section />

    </div>
</template>

<script>
import ButtonSection from '@/pages/sections/buttons.vue';
import AlertSection from '@/pages/sections/alerts.vue';

export default {
  name: 'home',
  components: {
      ButtonSection,
      AlertSection,
  }
}
</script>

<style lang="scss">
.home {
    padding: $basePx*2;
}
</style>