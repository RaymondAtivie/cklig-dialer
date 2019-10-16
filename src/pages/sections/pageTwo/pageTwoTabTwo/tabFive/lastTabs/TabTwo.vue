<template>
	<div>
		<h3 class="t-accent">תפריט הקשות - הקשה 9 - הקשה 2 - הקשה 4 - הקשה 6 - בכל זמן לחיצה</h3>
		<hr />

		<div class="row mt-4">
			<div class="col-3">
				<div class="d-flex mb-4">
					<ck-box stretch accent br>פעולה טלפונית שתתבצע</ck-box>
				</div>
			</div>
			<div class="col">
				<div class="border-light-bg-right">
					<div class="d-flex mb-4">
						<ck-box disabled-dark>
							<icon name="phone-classic" size="1.2" />
						</ck-box>
						<ck-box select class>
							תפריט הקשות אינטרקטיבי
							<span class="pl-5" />
						</ck-box>
					</div>
				</div>
			</div>
		</div>

		<ck-side-tabs expand accent-active v-model="selectedTab" :tabs="tabs">
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
import TabOne from "./../lastTabs/tabTwo/TabOne";
import TabTwo from "./../lastTabs/tabTwo/TabTwo";
import TabThree from "./../lastTabs/tabTwo/TabThree";

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