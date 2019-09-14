<template>
	<div>
		<ck-side-tabs v-model="selectedTab" :tabs="tabs">
			<template v-if="selectedTab == 1">1</template>
			<template v-if="selectedTab == 2">2</template>
			<template v-if="selectedTab == 3">3</template>
			<template v-if="selectedTab == 4">4</template>
			<template v-if="selectedTab == 5">5</template>
		</ck-side-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ value: 1, text: "פעולה ראשונה" },
				{ value: 2, text: "פעולה טלפונית עיקרית" },
				{ value: 3, text: "מאפייני פעולה טלפונית" },
				{ value: 4, text: "ניתוק בזמן פעולה טלפונית" },
				{ value: 5, text: "חוסר מענה בזמן פעולה" }
			]
		};
	}
};
</script>