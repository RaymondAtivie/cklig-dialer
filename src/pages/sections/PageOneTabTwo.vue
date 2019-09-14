<template>
	<div>
		<ck-side-tabs v-model="selectedTab" :tabs="tabs">
			<template v-if="selectedTab == 1">
				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box stretch light>השמיעו למתקשר הודעה קולית לפני העברת השיחה</ck-box>
					</div>
					<ck-audio />
				</div>

				<hr class="hr my-3" />

				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box stretch light>השמיעו למתקשר הודעה קולית לפני העברת השיחה</ck-box>
					</div>
					<ck-audio />
				</div>

				<ck-orange-banner>צור הקלטה נוספת לרצף ההשמעות</ck-orange-banner>

				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box stretch light>השמיעו למתקשר הודעה קולית לפני העברת השיחה</ck-box>
					</div>
					<ck-audio />
				</div>
			</template>

			<template v-if="selectedTab == 2">
				<tab-two />
			</template>

			<template v-if="selectedTab == 3">3</template>

			<template v-if="selectedTab == 4">4</template>

			<template v-if="selectedTab == 5">5</template>

			<template v-if="selectedTab == 6">6</template>
		</ck-side-tabs>
	</div>
</template>

<script>
import TabTwo from "./pageOneTabTwo/TabTwo";
export default {
	components: {
		TabTwo
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