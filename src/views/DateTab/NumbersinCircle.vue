<template>
  <div :class="{'active': active}" class="numberCircle">
      <div class="number">{{number}}</div>
      <div class="text">{{text}}</div>
  </div>
</template>
<script>
export default {
    props: {
        number: {
            type: Number,
            required: true
        },
        text: {
            type: String,
        },
        active: {
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
    .numberCircle{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: #fbfcfd;
        color: #e0e1e0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .number{
            font-weight: 700;
            font-size: 35px;
        }
        .text{
            font-size: 14px;
        }
        
    }
    .active{
        background-color: #75b2e1;
        color: white;
    }
</style>