<template>
	<div>
		<ck-side-tabs v-model="selectedTab" :tabs="tabs">
			<template v-if="selectedTab == 1">
				<tab-one />
			</template>

			<template v-if="selectedTab == 2">
				<tab-two />
				<div class="bg-accent my-5" style="height: 20px"></div>
				<tab-two-2 />
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

			<template v-if="selectedTab == 6">
				<tab-six />
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabOne from "./pageOneTabTwo/TabOne";
import TabTwo from "./pageOneTabTwo/TabTwo";
import TabTwo2 from "./pageOneTabTwo/TabTwo2";
import TabThree from "./pageOneTabTwo/TabThree";
import TabFour from "./pageOneTabTwo/TabFour";
import TabFive from "./pageOneTabTwo/TabFive";
import TabSix from "./pageOneTabTwo/TabSix";
export default {
	components: {
		TabOne,
		TabTwo,
		TabTwo2,
		TabThree,
		TabFour,
		TabFive,
		TabSix
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