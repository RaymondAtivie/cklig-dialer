<template>
<!-- <v-app> -->
    <div>
        <div id="app">

            <div class="content">
                <router-view/>
            </div>
        </div>
    </div>
<!-- </v-app> -->
</template>

<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    & .content{
        flex: 1;
        // padding: $basePx*2;
    }
}
</style>
