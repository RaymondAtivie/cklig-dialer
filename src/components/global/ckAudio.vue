<template>
    <div>
        <h1>Audio</h1>

        <div class="d-flex">
            <div class="stretch">
                <ck-box block primary class="mb">
                    שיחה נכנסת ממספר וירטואלי - עברית - משה
                </ck-box>
                <ck-box block>
                    חוסר מענה ביעד השיחה
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
    width: 85px;
    height: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>