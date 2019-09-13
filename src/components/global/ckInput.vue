<template>
    <div class="input-box">
        <div class="label">תווית לשדה מילוי - בולד 15 פיקסל</div>
        <input class="field" />
    </div>
</template>



<style lang="scss" scoped>
.input-box{
    width: 100%;
    border: 1px solid $borderColor;
    padding: $basePx; 
    input{
        width: 100%;
        border: 0px;
        color: $text-primary;
        font-size: 12px;
    }
}
</style>