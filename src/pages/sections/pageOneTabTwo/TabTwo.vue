<template>
	<div>
		<ck-orange-box
			label="כיצד תועבר השיחה ליעדה?"
			mainText="צור יעד לניתוב"
			subText="העברת השיחה ליעד או יעדים באופן מידי"
		/>

		<div class="border-primary-bg-right mt-4">
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">העברת שיחה אל</ck-box>
				<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
			</div>
			<div class="d-flex mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">מספר יחיד</div>
					</ck-box>
				</div>
				<div class="d-flex flex-column flex-fill border-accent-bg-right">
					<div class="d-flex flex-stretch flex-row mb">
						<ck-box stretch accent>מספר להעברת השיחה</ck-box>
						<ck-box mr class="ltr">052-6636199</ck-box>
						<ck-box select br-light>
							<div class="ltr">+972</div>
						</ck-box>
					</div>

					<div class="d-flex flex-row mb">
						<ck-box disabled ml>ניתיבי הקשה</ck-box>
						<ck-box disabled stretch>הגדר הקשת שלוחות להגעה ליעד</ck-box>
					</div>
					<div class="d-flex flex-row">
						<ck-box stretch accent>משך זמן חיוג למספר עד לנקיטת פעולה</ck-box>
						<ck-box select mr>20 שניות</ck-box>
					</div>
				</div>
			</div>
		</div>

		<hr class="hr my-3" />

		<div class="border-primary-bg-right mt-4">
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">העברת שיחה אל</ck-box>
				<ck-box select stretch>קבוצת חיוג</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">קבוצת החיוג</ck-box>
				<ck-box select stretch>פארמידיקים איזור המרכז</ck-box>
			</div>
			<div class="d-flex flex-row mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">יעד לחיוג 1</div>
					</ck-box>
				</div>
				<div class="d-flex flex-column border-accent-bg-right flex-fill">
					<div class="d-flex flex-row mb">
						<ck-box stretch accent>מספר להעברת השיחה</ck-box>
						<ck-box mr class="ltr">052-6636199</ck-box>
						<ck-box select br-light>
							<div class="ltr">+972</div>
						</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<ck-box disabled ml>ניתיבי הקשה</ck-box>
						<ck-box disabled stretch>הגדר הקשת שלוחות להגעה ליעד</ck-box>
					</div>
					<div class="d-flex flex-row">
						<ck-box stretch accent>משך זמן חיוג למספר עד לנקיטת פעולה</ck-box>
						<ck-box select mr>20 שניות</ck-box>
					</div>
				</div>
			</div>

			<hr class="hr-blue my-3" />

			<div class="d-flex flex-row mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">יעד לחיוג 2</div>
					</ck-box>
				</div>
				<div class="d-flex flex-column border-accent-bg-right flex-fill">
					<div class="d-flex flex-row mb">
						<ck-box stretch accent>מספר להעברת השיחה</ck-box>
						<ck-box mr class="ltr">052-5025002</ck-box>
						<ck-box select br-light>
							<div class="ltr">+972</div>
						</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<ck-box disabled ml>ניתיבי הקשה</ck-box>
						<ck-box disabled stretch>הגדר הקשת שלוחות להגעה ליעד</ck-box>
					</div>
					<div class="d-flex flex-row">
						<ck-box stretch accent>משך זמן חיוג למספר עד לנקיטת פעולה</ck-box>
						<ck-box select mr>20 שניות</ck-box>
					</div>
				</div>
			</div>

			<hr class="hr-blue my-3" />

			<div class="d-flex flex-row mt-4">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">יעד לחיוג 3</div>
					</ck-box>
				</div>
				<div class="d-flex flex-column border-accent-bg-right flex-fill">
					<div class="d-flex flex-row mb">
						<ck-box stretch accent>מספר להעברת השיחה</ck-box>
						<ck-box mr class="ltr">03-9518853</ck-box>
						<ck-box select br-light>
							<div class="ltr">+972</div>
						</ck-box>
					</div>
					<div class="d-flex flex-row mb">
						<ck-box accent ml>ניתיבי הקשה</ck-box>
						<ck-box stretch class>
							2
							<icon iconBlue class="px-2" name="chevron-left" />2
							<icon iconBlue class="px-2" name="chevron-left" />4
							<icon iconBlue class="px-2" name="chevron-left" />103
						</ck-box>
					</div>
					<div class="d-flex flex-row">
						<ck-box stretch accent>משך זמן חיוג למספר עד לנקיטת פעולה</ck-box>
						<ck-box select mr>20 שניות</ck-box>
					</div>
				</div>
			</div>
		</div>

		<hr class="hr my-3" />

		<div class="d-flex mb border-accent-bg-right">
			<ck-box accentDark style="min-width: 180px">הוסף יעד לחיוג</ck-box>
			<ck-box accent mr br>אופן החיוג למספרים</ck-box>
			<ck-box select stretch mr>קבוע - לפי סדר הזנת היעדים</ck-box>
		</div>
	</div>
</template>

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