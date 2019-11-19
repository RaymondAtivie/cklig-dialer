<template>
<div>
    <div>
        <oc-first></oc-first>
    </div>
    <div class="mt-5">
        <oc-second></oc-second>
    </div>
</div>
</template>
<script>
import ocMobileFirst from './ocMobileFirst'
import ocMobileSecond from './ocMobileSecond'
export default {
    components: {
        ocFirst: ocMobileFirst,
        ocSecond: ocMobileSecond
    }
}
</script>
<style lang="scss" scoped>
</style>