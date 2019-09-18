<template>
	<div class="container-fluid">
		<div class="row justify-content-center">
			<div class="col-11">
				<h1 class="my-4">הגדרות למספר וירטואלי-073-2681986</h1>

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
								<h3 v-if="selectedTab == 2">פעולה טלפונית - העברת שיחה - בכל שעות היממה</h3>
								<h3 v-if="selectedTab == 3">פעולה טלפונית - %שם הפעולה% - כשאין מענה ביעד השיחה</h3>
								<h3 v-if="selectedTab == 4">פעולה טלפונית - %שם הפעולה% - בכל זמן אחר</h3>
								<h3 v-if="selectedTab == 5">פעולה טלפונית - %שם הפעולה% - בכל זמן אחר</h3>
							</div>
							<div class="ml-3">
								<p class="t-disabled fs-08">עודכן בתאריך: 1986.8.26 בשעה 45:03</p>
							</div>
							<div class="text-left">
								<ck-button small tile outline success class="px-3">שמור הגדרות</ck-button>
							</div>
						</div>
					</div>

					<div v-show="selectedTab == 1">
						<PageTwo2TabOne />
					</div>
					<div v-show="selectedTab == 2">
						<PageTwo2TabTwo />
					</div>
					<div v-show="selectedTab == 3">
						<PageTwo2TabThree />
					</div>
					<div v-show="selectedTab == 4">
						<PageTwo2TabFour />
					</div>
					<div v-show="selectedTab == 5">
						<PageTwo2TabFive />
					</div>
				</ck-tabs>
			</div>
		</div>
	</div>
</template>

<script>
import PageTwo2TabOne from "../pages/sections/pageTwo2/PageTwo2TabOne";
import PageTwo2TabTwo from "../pages/sections/pageTwo2/PageTwo2TabTwo";
import PageTwo2TabThree from "../pages/sections/pageTwo2/PageTwo2TabThree";
import PageTwo2TabFour from "../pages/sections/pageTwo2/PageTwo2TabFour";
import PageTwo2TabFive from "../pages/sections/pageTwo2/PageTwo2TabFive";

export default {
	components: {
		PageTwo2TabOne,
		PageTwo2TabTwo,
		PageTwo2TabThree,
		PageTwo2TabFour,
		PageTwo2TabFive
	},
	data() {
		return {
			selectedTab: 1,
			tabs: [
				{ text: "הגדרות שיחה נכנסת", value: 1 },
				{ text: "שעות פעילות העסק", value: 2 },
				{ text: "מחוץ לשעות פעילות העסק", value: 3 },
				{ text: "כשציפי לא במשרד", value: 4 },
				{ text: "בכל זמן אחר", value: 5 }
			]
		};
	}
};
</script>