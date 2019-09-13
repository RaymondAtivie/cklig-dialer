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
			</div>

			<div class="col-6">
				<h2>Switch Me {{active.id}}</h2>

				<div v-if="active.id == 4">
					<ck-info-box />
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
	computed: {
		active() {
			return this.items.find(i => i.active);
		}
	},
	methods: {
		activateBox(id) {
			this.items.forEach(item => {
				return item.id === id
					? (item.active = true)
					: (item.active = false);
			});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>