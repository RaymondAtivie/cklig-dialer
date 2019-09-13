<template>
    <div class="container home">
        <h1>כותרת ראשית H1 - גודל טקסט 30 פיקסל</h1>
        <h2>כותרת משנה H2 - גודל טקטסט 25 פיקסל</h2>
        <h3>כותרת רמה H3 - גודל טקסט 20 פיקסל</h3>

        <p class="label">
            תווית לשדה מילוי - בולד 15 פיקסל
        </p>
        <p class="field">
            תוכן שדה למילוי - לייט 12 פיקסל
        </p>

        <div class="row">
            <div class="col">
                <div class="card m-2">
                    <div class="bg-primary box"></div>
                </div>

                <div class="card m-2">
                    <div class="bg-primary-secondary box"></div>
                </div>
            </div>
        </div>

        <div class="my-5">
            <div class="input-box" style="width: 100%">
                <div class="label">תווית לשדה מילוי - בולד 15 פיקסל</div>
                <input class="field" />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card ma-2">
                    <div class="bg-primary-light box"></div>
                </div>
            </div>
            <div class="col">
                <div class="card ma-2">
                    <div class="bg-primary-light box"></div>
                </div>
            </div>
            <div class="col">
                <div class="card ma-2">
                    <div class="bg-primary-light box"></div>
                </div>
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
    </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>

<style lang="scss">
.home {
    padding: $basePx*2;
//   background-color: $primary-light;
    .box{
        height: 50px;
        width: 50px;
    }

    .input-box{
        width: 100%;
        border: 1px solid $borderColor;
        padding: $basePx; 
        input{
            width: 100%;
            border: 0px;
        }
    }
}
</style>