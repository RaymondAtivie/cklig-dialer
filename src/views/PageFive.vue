<template>
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-11">
				<h1 class="my-4">הגדרות למספר וירטואלי -073-2681986</h1>

				<div class="row mb-4">
					<div class="col-4">
						<ck-input label="שם ייחודי למספר" />
					</div>

					<div class="col text-left">
						<ck-button tile class="px-4">שיחות יוצאות</ck-button>
						<ck-button light tile flat class="px-4">שיחות יוצאות</ck-button>
						<ck-button light tile flat class="px-4">שיחות יוצאות</ck-button>
						<ck-button light tile flat class="px-4">שיחות יוצאות</ck-button>
					</div>
				</div>

				<ck-tabs v-model="selectedTab" :tabs="tabs">
					<div class="border-bottom mb-4">
						<div class="d-flex align-items-center mb-3">
							<div class="stretch">
								<h3 v-if="selectedTab == 1">הגדרות שיחה נכנסת</h3>
								<h3 v-if="selectedTab == 2">פעולה טלפונית - השארת מספר טלפון לחזרה - בכל שעות היממה</h3>
							</div>
							<div class="ml-3">
								<p class="t-disabled fs-08">עודכן בתאריך: 1986.8.26 בשעה 45:0</p>
							</div>
							<div class="text-left">
								<ck-button small tile outline success class="px-3">שמור הגדרות</ck-button>
							</div>
						</div>
					</div>

					<div v-show="selectedTab == 1">
						<PageFiveTabOne />
					</div>
					<div v-show="selectedTab == 2">
						<PageFiveTabTwo />
					</div>
				</ck-tabs>
			</div>
		</div>
	</div>
</template>

<script>
import PageFiveTabOne from "./../pages/sections/pageFive/PageFiveTabOne";
import PageFiveTabTwo from "./../pages/sections/pageFive/PageFiveTabTwo";

export default {
	components: {
		PageFiveTabOne,
		PageFiveTabTwo
	},
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ text: "הגדרות שיחה נכנסת", value: 1 },
				{ text: "בכל שעות היממה", value: 2 }
			]
		};
	}
};
</script>