<template>
	<div>
		<ck-side-tabs v-model="selectedTab" :tabs="tabs">
			<template v-if="selectedTab == 1">
				<tab-one />
			</template>

			<template v-if="selectedTab == 2">
				<tab-two />
			</template>

			<template v-if="selectedTab == 3">
				<tab-three />
			</template>

			<template v-if="selectedTab == 4">
				<tab-four />
			</template>

			<template v-if="selectedTab == 5">
				<tab-five />
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabOne from "./pageTwo2TabFive/TabOne";
import TabTwo from "./pageTwo2TabFive/TabTwo";
import TabThree from "./pageTwo2TabFive/TabThree";
import TabFour from "./pageTwo2TabFive/TabFour";
import TabFive from "./pageTwo2TabFive/TabFive";
export default {
	components: {
		TabOne,
		TabTwo,
		TabThree,
		TabFour,
		TabFive
	},
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ value: 1, text: "הודעת פתיחה" },
				{ value: 2, text: "העברת שיחה" },
				{ value: 3, text: "מאפייני העברת שיחה" },
				{ value: 4, text: "ניתוק בזמן העברת שיחה" },
				{ value: 5, text: "עדכוני מנוי" },
				{ value: 6, text: "חוסר מענה ביעד השיחה" }
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.hr {
	width: 100%;
	height: 1px;
	background-color: $text-primary;
	&-accent {
		@extend .hr;
		background-color: $accent-orange;
	}
	&-blue {
		@extend .hr;
		background-color: $primary;
	}
}
</style>