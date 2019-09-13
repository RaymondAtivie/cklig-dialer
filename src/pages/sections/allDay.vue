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
				<hr class="hr-blue my-3" />

				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box stretch light>השמיעו למתקשר הודעה קולית לפני העברת השיחה</ck-box>
					</div>
					<ck-audio />
				</div>

				<div class="d-flex justify-content-center align-items-center my-4">
					<div class="flex-fill">
						<div class="hr-accent" />
					</div>
					<div class>
						<ck-box accentDark>צור הקלטה נוספת לרצף ההשמעות</ck-box>
					</div>
					<div class="flex-fill">
						<div class="hr-accent"></div>
					</div>
				</div>

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
				<div v-if="false" class="border-primary-bg-right">
					<ck-box class="mb" stretch primary>האם לבקש מהלקוח להקיש טלפון נייד</ck-box>
					<ck-box class="mb" stretch>כן, המערכת תבקש להקיש מספר נייד ד</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון חסוי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון קווי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון נייד (פחות ממולץ)
					</ck-box>

					<ck-audio class="mb" />
					<ck-audio class="mb" />
					<ck-audio class="mb" />
				</div>
				<div class="border-primary-bg-right mt">
					<ck-orange-box class="mb" />
				</div>

				<div class="border-primary-bg-right mt-4">
					<div class="d-flex mb">
						<ck-box primary stretch ml class="even">העברת שיחה אל</ck-box>
						<ck-box stretch light>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex">
						<ck-box class="even" stretch primary>מספר יחיד</ck-box>
						<div class="d-flex flex-stretch mb">
							<ck-box>מספר להעברת השיחה</ck-box>
							<ck-box>052-6636199</ck-box>
							<ck-box>2+</ck-box>
						</div>
					</div>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון חסוי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון קווי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון נייד (פחות ממולץ)
					</ck-box>
				</div>
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedTab: 2,
			tabs: [
				{ text: "הודעת פתיחה", value: 1 },
				{ text: "זיהוי המתקשר", value: 2 },
				{ text: "הקראת מספר המתקשר", value: 3 },
				{ text: "הקלטה וסיום השיחה", value: 4 },
				{ text: "עדכוני לקוח מתקשר", value: 5 },
				{ text: "התראות מנוי", value: 6 },
				{ text: "מתקשר לא מגיב", value: 7 }
			],
			checkOne: true
		};
	}
};
</script>

<style lang="scss" scoped>
.hr {
	height: 1px;
	width: 100%;
	&-blue {
		@extend .hr;
		background-color: $primary;
	}
	&-accent {
		@extend .hr;
		background-color: $accent-orange;
	}
}

.even {
	flex-basis: 0;
}
</style>