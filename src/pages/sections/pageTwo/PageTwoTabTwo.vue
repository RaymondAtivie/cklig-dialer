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

			<template v-if="selectedTab == 3.1">
				<tab-three-tab-one />
			</template>

			<template v-if="selectedTab == 3.2">
				<tab-three-tab-two />
			</template>

			<template v-if="selectedTab == 4">
				<tab-four />
			</template>

			<template v-if="selectedTab == 5">
				<tab-five />
			</template>

			<template v-if="selectedTab == 5.2">
				<tab-five-tab-two />
			</template>

			<template v-if="selectedTab == 5.4">
				<tab-five-tab-two-sub-two />
			</template>

			<template v-if="selectedTab == 5.6">
				<tab-five-last-tab-two />
			</template>

			<template v-if="selectedTab == 6">
				<tab-six />
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabOne from "./pageTwoTabTwo/TabOne";
import TabTwo from "./pageTwoTabTwo/TabTwo";

import TabThree from "./pageTwoTabTwo/TabThree";
import TabThreeTabOne from "./pageTwoTabTwo/tabThree/TabThreeTabOne";
import TabThreeTabTwo from "./pageTwoTabTwo/tabThree/TabThreeTabTwo";

import TabFour from "./pageTwoTabTwo/TabFour";

import TabFive from "./pageTwoTabTwo/TabFive";
import TabFiveTabTwo from "./pageTwoTabTwo/tabFive/TabFiveTabTwo";
import TabFiveTabTwoSubTwo from "./pageTwoTabTwo/tabFive/TabFiveTabTwoSubTwo";
import TabFiveLastTabTwo from "./pageTwoTabTwo/tabFive/lastTabs/TabTwo";

import TabSix from "./pageTwoTabTwo/TabSix";

export default {
	components: {
		TabOne,
		TabTwo,
		TabThree,
		TabThreeTabOne,
		TabThreeTabTwo,
		TabFour,
		TabFive,
		TabFiveTabTwo,
		TabFiveTabTwoSubTwo,
		TabFiveLastTabTwo,
		TabSix
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
						{ value: 3.1, text: "3a" },
						{ value: 3.2, text: "3b" }
					]
				},
				{
					value: 4,
					text: "4",
					showTabs: false,
					subTabs: [
						{
							value: 4.1,
							text: "4a",
							showTabs: false,
							subTabs: [
								{ value: 4.3, text: "4a1" },
								{ value: 4.4, text: "4a2" }
							]
						},
						{ value: 4.2, text: "4b" }
					]
				},
				{
					value: 5,
					text: "5",
					showTabs: false,
					subTabs: [
						{ value: 5.1, text: "5a" },
						{
							value: 5.2,
							text: "5b",
							showTabs: false,
							subTabs: [
								{ value: 5.3, text: "5b1" },
								{
									value: 5.4,
									text: "5b2",
									showTabs: false,
									subTabs: [
										{ value: 5.5, text: "5b2_1" },
										{ value: 5.6, text: "5b2_2" }
									]
								}
							]
						}
					]
				},
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