<template>
   <div class="tabs">
        <div :class="{'active': active == 'list'}" class="tab text-center">
            <icon name="format-list-numbered" size="1.3"/>
            <div>ניהול<br>משימות</div>
        </div>
        <div :class="{'active': active == 'phone'}" class="tab text-center">
            <icon name="phone-log" size="1.3"/>
            <div>ניהול<br>רשומות לחיוג</div>
        </div>
        <div :class="{'active': active == 'dialpad'}" class="tab text-center">
            <icon name="dialpad" size="1.3"/>
            <div>לוח<br>מקשים</div>
        </div>
        <div :class="{'active': active == 'clock'}" class="tab text-center">
            <icon name="clock" size="1.3"/>
            <div>אירועים<br>אחרונים</div>
        </div>
        <div :class="{'active': active == 'key'}" class="tab text-center">
            <icon name="key-variant" size="1.3"/>
            <div>הגדרות<br>שיחה יוצאת</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabs{
        .active{
        color: $primary;
        }
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 92%;
        padding: 20px;
        // height: 100px;
        .tab{
            font-size: 12px;
            cursor: pointer;
        }
    }
</style>