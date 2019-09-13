<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <div class="border-light-bg-left pb-5">
          <div class="pl-2 d-flex" v-for="item in items" :key="item.id">
            <ck-box
              @click.native="activateBox(item.id)"
              primary
              class="action-item"
              :disabled="!item.active"
              block
              mb
              br
            >{{ item.title }}</ck-box>
          </div>
        </div>
        <div class="d-flex align-content-start bg-light mt-5">
          <div class="info-icon p-2 ml-2">
            <icon name="lightbulb" size="1" />
          </div>
          <div class="p-3">
            כל מענה של נתב שיחות / מענה קולי / תא קולי נחשב כמענה לשיחה
            כלומר, הרשומה טופלה.
            במקרה כזה השיחה קיבלה מענה טכנולוגי, וזאת למרות שלא ענה
            נציג אנושי בפועל - ולכן זה נחשב כמענה לשיחה.
            אם יש לכם נתב שיחות / מענה קולי / תא קולי, מומלץ שהנציג יבצע
            פעולה כדי לקבל את השיחה - הנציג חייב להקיש 1.
            חשוב – כל עוד נציג לא הקיש 1 ,זמן ההמתנה ממשיך להיספר
            ו
          </div>
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
        active: true
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
  }),
  methods: {
    activateBox(id) {
      this.items.forEach(item => {
        return item.id === id ? (item.active = true) : (item.active = false);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-icon {
  background-color: $primary;
  height: 100%;
  color: white;
}
</style>