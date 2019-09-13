<template>
  <div>
    <div class="row">
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