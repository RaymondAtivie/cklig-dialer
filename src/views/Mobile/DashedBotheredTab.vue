<template>
<div :class="{'dashed' : opened}" class="listDashed tabsBorder">
    <div class="listBordered" @click="$emit('topClicked')">
        <div class="dotlist">
            <div><icon name="menu"/></div>
            <div class="mr-2">{{number}}  |  {{text}}</div>
        </div>
        <div><icon :name="icon" :color="iconColor"/></div>
    </div>
    <div v-show="opened" class="showIcon">
        <div class="text-center iconText"><icon name="close-circle"/><div>בטל חיוג</div></div>
        <div class="text-center iconText"><icon name="format-list-numbered"/><div></div>צור משימה</div>
        <div class="text-center iconText"><icon name="chat"/><div></div>שלח סמס</div>
        <div class="text-center iconText"><icon name="information"/><div></div>פרטי רשומה</div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        number: {
            type: String
        },
        text: {
            type: String
        },
        iconColor: {
            type: String
        },
        opened: {
            type: Boolean,
            default: false,
        }

    },
}
</script>
    

<style  lang="scss" scoped>
    .tabsBorder{
        border-bottom: 2px solid $color-light;
    }
    .dashed{
        border: 1px dashed $text-primary;
    }
    .listDashed{
        padding: 0 20px;
        cursor: pointer;
        .listBordered{
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .dotlist{
                display: flex;
                align-items: center;
                justify-content: flex-start
            }
        }
        .showIcon{
            margin: auto;
            height: 50px;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            color:  #4085cd;
            .iconText{
                width: 25%;
                font-size: 12px;
            }
        }
    }
</style>