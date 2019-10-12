<template>
	<div>
		<ck-side-tabs expand v-model="selectedTab" :tabs="tabs">
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
import TabOne from "./pageTwoTabTwo/TabOne";
import TabTwo from "./pageTwoTabTwo/TabTwo";
import TabThree from "./pageTwoTabTwo/TabThree";
import TabFour from "./pageTwoTabTwo/TabFour";
import TabFive from "./pageTwoTabTwo/TabFive";
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
				{ value: 1, text: "1" },
				{ value: 2, text: "2" },
				{
					value: 3,
					text: "3",
					showTabs: false,
					subTabs: [
						{ value: 8, text: "3a" },
						{ value: 9, text: "3b" }
					]
				},
				{ value: 4, text: "4" },
				{ value: 5, text: "5" },
				{ value: 6, text: "6" },
				{ value: 7, text: "7" }
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