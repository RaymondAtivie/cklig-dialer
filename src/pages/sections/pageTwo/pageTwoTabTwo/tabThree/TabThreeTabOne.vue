<template>
	<div>
		<h3 class="t-accent">תפריט הקשות - הקשה 1 - הקשה 1 - השמעת הודעה וסיום שיחה - בכל זמן לחיצה</h3>
		<hr />

		<ck-side-tabs expand accent-active v-model="selectedTab" :tabs="tabs" class="mt-4">
			<template v-if="selectedTab == 1">
				<tab-one />
			</template>

			<template v-if="selectedTab == 2">
				<tab-two />
			</template>

			<template v-if="selectedTab == 3">
				<tab-three />
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabOne from "./tabThreeTabOne/TabOne";
import TabTwo from "./tabThreeTabOne/TabTwo";
import TabThree from "./tabThreeTabOne/TabThree";

export default {
	components: {
		TabOne,
		TabTwo,
		TabThree
	},
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ value: 1, text: "השמעת הודעה וסיום שיחה" },
				{ value: 2, text: "עדכוני לקוח מתקשר" },
				{
					value: 3,
					text: "התראות מנוי"
				}
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