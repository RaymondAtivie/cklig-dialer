<template>
	<div>
		<ck-side-tabs v-model="selectedTab" :tabs="tabs">
			<template v-if="selectedTab == 1">
				<TabOne />
			</template>

			<template v-if="selectedTab == 2">
				<TabTwo />
			</template>

			<template v-if="selectedTab == 3">
				<TabThree />
			</template>

			<template v-if="selectedTab == 4">
				<TabFour />
			</template>

			<template v-if="selectedTab == 5">
				<TabFive />
			</template>

			<template v-if="selectedTab == 6">
				<TabSix />
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabOne from "./../sections/pageFiveTabTwo/TabOne";
import TabTwo from "./../sections/pageFiveTabTwo/TabTwo";
import TabThree from "./../sections/pageFiveTabTwo/TabThree";
import TabFour from "./../sections/pageFiveTabTwo/TabFour";
import TabFive from "./../sections/pageFiveTabTwo/TabFive";
import TabSix from "./../sections/pageFiveTabTwo/TabSix";

export default {
	components: {
		TabOne,
		TabTwo,
		TabThree,
		TabFour,
		TabFive,
		TabSix
	},
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ text: "הודעת פתיחה", value: 1 },
				{ text: "זיהוי המתקשר", value: 2 },
				{ text: "הגדרות שיחה נכנסת", value: 3 },
				{ text: "בכל שעות היממה", value: 4 },
				{ text: "הגדרות שיחה נכנסת", value: 5 },
				{ text: "בכל שעות היממה", value: 6 }
			],
			checkOne: true
		};
	}
};
</script>

<style lang="scss" scoped>
.hr {
	width: 100%;
	height: 1px;
	&-accent {
		@extend .hr;
		background-color: $accent-orange;
	}
}
</style>