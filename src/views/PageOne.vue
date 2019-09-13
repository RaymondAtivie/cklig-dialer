<template>
  <div class="px-5 page-one">
    <div class="py-3">
      <h1>הגדרות למספר וירטואלי 073-2681986</h1>
    </div>

    <div class="row justify-content-end mt-3">
      <div class="col-4">
        <ck-input></ck-input>
      </div>
      <div class="col nav-page text-center" v-for="item in items" :key="item.id">
        <div class="body">{{item.title}}</div>
      </div>
    </div>

    <div>
      <div class="row align-items-center mt-5">
        <div class="col">
          <h2 class="t-secondary">פעולה טלפונית - העברת שיחה - בכל שעות היממה</h2>
        </div>
        <div class="col text-left">
          <div class="row">
            <div class="col">
              <p class="field font-weight-light">עודכן בתאריך: 1986.8.26 בשעה 45:03</p>
            </div>
            <div class="col-3">
              <ck-button block outline>Hello there</ck-button>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div class="row my-4">
        <div class="col-md-auto bg-primary-light">
          <p class="t-blue p-2 font-weight-bold">כאשר נכנסת שיחה למספר הוירטואלי</p>
        </div>
        <div class="col-md-auto bg-disabled">
          <p class="t-secondary p-2">החייגן יבצע פעולה אחת בכל שעות היממה</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: 1,
        title: "שיחות יוצאות",
        active: false
      },
      {
        id: 2,
        title: "התראות ועדכונים",
        active: false
      },
      {
        id: 3,
        title: " רשימה לבנה - שחורה",
        active: false
      },
      {
        id: 4,
        title: "שיחות נכנסות",
        active: false
      },
      {
        id: 5,
        title: "נהל הגדרותע",
        active: false
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.nav-page {
  width: 100%;
  border: 1px solid $borderColor;
  padding: $basePx * 3;
}
</style>
