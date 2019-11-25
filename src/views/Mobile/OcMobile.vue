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
    <div class="mt-5">
        <oc-sixth></oc-sixth>
    </div>
    <div class="mt-5">
        <oc-seventh></oc-seventh>
    </div>
    <div class="mt-5">
        <oc-eight></oc-eight>
    </div>
    
</div>
</template>
<script>
import OcMobileFirst from './ocMobileFirst'
import OcMobileSecond from './ocMobileSecond'
import OcMobileThird from './OcMobileThird'
import OcMobileFourth from './OcMobileFourth'
import OcMobileFifth from './OcMobileFifth'
import OcMobileSixth from './OcMobileSixth'
import OcMobileSeventh from './OcMobileSeventh'
import OcMobileEight from './OcMobileEight'

export default {
    components: {
        ocFirst: OcMobileFirst,
        ocSecond: OcMobileSecond,
        ocThird: OcMobileThird,
        ocFourth: OcMobileFourth,
        ocFifth: OcMobileFifth,
        ocSixth: OcMobileSixth,
        ocSeventh: OcMobileSeventh,
        ocEight: OcMobileEight,
    }
}
</script>
<style lang="scss" scoped>
.ocM{
    max-width: 500px;
    margin: auto;
}

</style>