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
				<ck-orange-box></ck-orange-box>

				<div class="border-primary-bg-right mt-4">
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">העברת שיחה אל</ck-box>
						<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<div class="d-flex flex-column">
							<ck-box primary ml style="min-width: 220px; height: 100%">
								<div class="mb-2 align-self-start">תוכן ההודעה</div>
							</ck-box>
						</div>
						<div class="d-flex flex-column border-accent-bg-right">
							<div class="d-flex flex-row mb">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block light mr>052-6636199</ck-box>
								<ck-box select light>+972</ck-box>
							</div>
							<div class="d-flex flex-row mb">
								<ck-box disabled ml>העברת שיחה אל</ck-box>
								<ck-box disabled stretch>מספר יחיד להעברת שיחה</ck-box>
							</div>
							<div class="d-flex flex-row">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block select light mr>0 שניות</ck-box>
							</div>
						</div>
					</div>
				</div>
				<hr class="hr-blue my-3" />

				<div class="border-primary-bg-right mt-4">
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">העברת שיחה אל</ck-box>
						<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">העברת שיחה אל</ck-box>
						<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<div class="d-flex flex-column">
							<ck-box primary ml style="min-width: 220px; height: 100%">
								<div class="mb-2 align-self-start">תוכן ההודעה</div>
							</ck-box>
						</div>
						<div class="d-flex flex-column border-accent-bg-right">
							<div class="d-flex flex-row mb">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block light mr>052-6636199</ck-box>
								<ck-box select light>+972</ck-box>
							</div>
							<div class="d-flex flex-row mb">
								<ck-box disabled ml>העברת שיחה אל</ck-box>
								<ck-box disabled stretch>מספר יחיד להעברת שיחה</ck-box>
							</div>
							<div class="d-flex flex-row">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block select light mr>0 שניות</ck-box>
							</div>
						</div>
					</div>
					<hr class="hr-blue my-3" />

					<div class="d-flex flex-row mb">
						<div class="d-flex flex-column">
							<ck-box primary ml style="min-width: 220px; height: 100%">
								<div class="mb-2 align-self-start">תוכן ההודעה</div>
							</ck-box>
						</div>
						<div class="d-flex flex-column border-accent-bg-right">
							<div class="d-flex flex-row mb">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block light mr>052-6636199</ck-box>
								<ck-box select light>+972</ck-box>
							</div>
							<div class="d-flex flex-row mb">
								<ck-box disabled ml>העברת שיחה אל</ck-box>
								<ck-box disabled stretch>מספר יחיד להעברת שיחה</ck-box>
							</div>
							<div class="d-flex flex-row">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block select light mr>0 שניות</ck-box>
							</div>
						</div>
					</div>

					<hr class="hr-blue my-3" />

					<div class="d-flex flex-row mt-4">
						<div class="d-flex flex-column">
							<ck-box primary ml style="min-width: 220px; height: 100%">
								<div class="mb-2 align-self-start">תוכן ההודעה</div>
							</ck-box>
						</div>
						<div class="d-flex flex-column border-accent-bg-right">
							<div class="d-flex flex-row mb">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block light mr>052-6636199</ck-box>
								<ck-box select light>+972</ck-box>
							</div>
							<div class="d-flex flex-row mb">
								<ck-box disabled ml>העברת שיחה אל</ck-box>
								<ck-box disabled stretch class v-text="'103 < 4 < 2 < 2'"></ck-box>
							</div>
							<div class="d-flex flex-row">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block select light mr>0 שניות</ck-box>
							</div>
						</div>
					</div>
				</div>

				<hr class="hr-blue my-3" />

				<div class="d-flex mb border-accent-bg-right">
					<ck-box block accentDark style="min-width: 220px">מספר להעברת השיחה</ck-box>
					<ck-box block accent mr br>052-6636199</ck-box>
					<ck-box select block light>+972</ck-box>
				</div>

				<ck-orange-banner>הוסף מערך זמנים</ck-orange-banner>

				<div class="border-primary-bg-right mt-4">
					<div class="d-flex mb">
						<ck-box stretch primary ml>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">העברת שיחה אל</ck-box>
						<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<div class="d-flex flex-column">
							<ck-box primary ml style="min-width: 220px; height: 100%">
								<div class="mb-2 align-self-start">תוכן ההודעה</div>
							</ck-box>
						</div>
						<div class="d-flex flex-column border-accent-bg-right">
							<div class="d-flex flex-row mb">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block light mr>052-6636199</ck-box>
								<ck-box select light>+972</ck-box>
							</div>
							<div class="d-flex flex-row mb">
								<ck-box disabled ml>העברת שיחה אל</ck-box>
								<ck-box disabled stretch>מספר יחיד להעברת שיחה</ck-box>
							</div>
							<div class="d-flex flex-row">
								<ck-box block accent>מספר להעברת השיחה</ck-box>
								<ck-box block select light mr>0 שניות</ck-box>
							</div>
						</div>
					</div>
				</div>
			</template>

			<template v-if="selectedTab == 3">3</template>

			<template v-if="selectedTab == 4">4</template>

			<template v-if="selectedTab == 5">5</template>

			<template v-if="selectedTab == 6">6</template>
		</ck-side-tabs>
	</div>
</template>

<script>
export default {
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