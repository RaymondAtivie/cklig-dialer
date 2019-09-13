<template>
    <div>
        <!-- <h1>Audio</h1> -->

        <div class="d-flex">
            <div class="stretch">
                <ck-box block primary class="mb">
                    שיחה נכנסת ממספר וירטואלי - עברית - משה
                </ck-box>
                <ck-box block>
                    <ck-button small tile outline class="py-1">
                        הקלטה החלף
                    </ck-button>
                    <div class="text-left stretch pr-5">
                        <div class="d-flex fs-07 t-primary justify-content-between">
                            <div class="ltr">
                                - 00:12
                            </div>
                            <div>
                                FileName.wav
                            </div>
                        </div>
                        <div class="seaker">
                            <div class="seaker-fill"></div>
                        </div>
                    </div>
                </ck-box>
            </div>
            <div>
                <ck-box primary mr class="play-btn" @click.native="play()">
                    <icon v-if="trigger" name="play" size="3" />
                    <icon v-if="!trigger" name="pause" size="3" />
                </ck-box>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            trigger: true,
        }
    },
    methods: {
        play(){
            this.trigger = !this.trigger;
        }
    }
}
</script>

<style lang="scss" scoped>
.play-btn{
    width: 105px;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.seaker{
    margin-top: $basePx/2;
    direction: ltr;
    height: 7px;
    background-color: $text-disabled;
    .seaker-fill{
        height: 100%;
        width: 30%;
        background-color: $primary;
    }
}
</style>