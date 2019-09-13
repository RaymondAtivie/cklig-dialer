<template>
    <div>
        <ck-side-tabs v-model="selectedTab" :tabs="tabs">

            <template v-if="selectedTab == 1">
                <div class="border-primary-bg-right">
                    <div class="d-flex mb">
                        <ck-box stretch primary>
                            השמעת פתיח למתקשר
                        </ck-box>
                    </div>
                    <ck-audio />
                </div>
            </template>

            <template v-if="selectedTab == 2">
                <div class="border-primary-bg-right">
                    <ck-box class="mb" stretch primary>
                        האם לבקש מהלקוח להקיש טלפון נייד
                    </ck-box>
                    <ck-box class="mb" stretch>
                        כן, המערכת תבקש להקיש מספר נייד ד
                    </ck-box>
                    <ck-box class="mb" stretch>
                        <!-- <Checkbox  class="m-0 w-none" v-model="checkOne" /> -->
                        למתקשרים מטלפון חסוי
                    </ck-box>

                    <ck-audio class="mb" />
                    <ck-audio class="mb" />
                    <ck-audio class="mb" />
                </div>
            </template>
        </ck-side-tabs>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedTab: 2,
            tabs: [
                {text: "הודעת פתיחה", value: 1},
                {text: "זיהוי המתקשר", value: 2},
                {text: "הקראת מספר המתקשר", value: 3},
                {text: "הקלטה וסיום השיחה", value: 4},
                {text: "עדכוני לקוח מתקשר", value: 5},
                {text: "התראות מנוי", value: 6},
                {text: "מתקשר לא מגיב", value: 7},
            ],
            checkOne: true,
        }
    },
}
</script>