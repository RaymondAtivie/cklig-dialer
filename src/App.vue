<template>
<div>
    <div id="app">
        <NavBar />

        <div class="content">
            <router-view/>
        </div>

        <FooterBar />
    </div>
</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
    components: {
        NavBar,
        FooterBar,
    }
}
</script>

<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    & .content{
        flex: 1;
        padding: $basePx*2;
    }
}
</style>
