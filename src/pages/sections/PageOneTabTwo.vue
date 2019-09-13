<template>
    <div>
        <ck-side-tabs v-model="selectedTab" :tabs="tabs">

            <template v-if="selectedTab == 1">
                1
            </template>

            <template v-if="selectedTab == 2">
                2
            </template>

            <template v-if="selectedTab == 3">
                3
            </template>

            <template v-if="selectedTab == 4">
                4
            </template>

            <template v-if="selectedTab == 5">
                5
            </template>

            <template v-if="selectedTab == 6">
                6
            </template>
        </ck-side-tabs>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            selectedTab: 1,
            tabs: [
                {value: 1, text: "הודעת פתיחה"},
                {value: 2, text: "העברת שיחה"},
                {value: 3, text: "מאפייני העברת שיחה"},
                {value: 4, text: "ניתוק בזמן העברת שיחה"},
                {value: 5, text: "עדכוני מנוי"},
                {value: 6, text: "חוסר מענה ביעד השיחה"},
            ],
        }
    },
}
</script>