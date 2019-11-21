<template>
<div class="ocM">
    <div>
        <oc-first></oc-first>
    </div>
    <div class="mt-5">
        <oc-second></oc-second>
    </div>
    <div class="mt-5">
        <oc-third></oc-third>
    </div>
    <div class="mt-5">
        <oc-fourth></oc-fourth>
    </div>
    <div class="mt-5">
        <oc-fifth></oc-fifth>
    </div>
</div>
</template>
<script>
import ocMobileFirst from './OcMobileFirst'
import ocMobileSecond from './OcMobileSecond'
import ocMobileThird from './OcMobileThird'
import ocMobileFourth from './OcMobileFourth'
import ocMobileFifth from './OcMobileFifth'

export default {
    components: {
        ocFirst: ocMobileFirst,
        ocSecond: ocMobileSecond,
        ocThird: ocMobileThird,
        ocFourth: ocMobileFourth,
        ocFifth: ocMobileFifth
    }
}
</script>
<style lang="scss" scoped>
.ocM{
    max-width: 500px;
    margin: auto;
}
</style>