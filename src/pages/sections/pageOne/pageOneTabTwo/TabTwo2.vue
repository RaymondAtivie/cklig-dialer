<template>
	<div>
		<ck-orange-box
			mainText="צור מערך זמנים"
			label="כיצד תועבר השיחה ליעדה?"
			subText="העברת השיחה ליעד או יעדים לפי מערך זמנים לניתוב"
		/>

		<div class="border-primary-bg-right mt-4">
			<div class="d-flex mb">
				<ck-box primary stretch ml>מערך זמנים לביצוע הפעולה</ck-box>
				<ck-box select stretch>שעות פעילות העסק</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">העברת שיחה אל</ck-box>
				<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
			</div>
			<div class="d-flex flex-row mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">מספר יחיד</div>
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
						<ck-box accent ml>check here</ck-box>
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

		<div class="border-primary-bg-right mt-4">
			<div class="d-flex mb">
				<ck-box stretch primary ml>מערך זמנים לביצוע הפעולה</ck-box>
				<ck-box select stretch>כשציפי לא במשרד</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">העברת שיחה אל</ck-box>
				<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
			</div>

			<div class="d-flex flex-row mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start">מספר יחיד</div>
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
		</div>
		<hr class="hr my-3" />
		<div class="border-primary-bg-right">
			<div>
				<div class="d-flex mb">
					<ck-box stretch primary ml>מערך זמנים לביצוע הפעולה</ck-box>
					<ck-box select stretch>מחוץ לשעות הפעילות</ck-box>
				</div>
				<div class="d-flex mb">
					<ck-box stretch primary ml>העברת שיחה אל</ck-box>
					<ck-box select stretch>קבוצת חיוג</ck-box>
				</div>
				<div class="d-flex mb">
					<ck-box stretch primary ml>קבוצת החיוג</ck-box>
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
			</div>

			<hr class="hr-blue my-3" />

			<div class="d-flex flex-row mt-4">
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
						<div class="mb-2 align-self-start">עד לחיוג 3</div>
					</ck-box>
				</div>
				<div class="d-flex flex-column border-accent-bg-right flex-fill">
					<div class="d-flex flex-row mb">
						<ck-box stretch accent>מספר להעברת השיחה</ck-box>
						<ck-box mr class="ltr">058-1018101</ck-box>
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

		<div class="d-flex mb border-light-bg-right">
			<ck-box disabled-dark accentDark style="min-width: 180px">הוסף יעד לחיוג</ck-box>
			<ck-box accent mr br>אופן החיוג למספרים</ck-box>
			<ck-box select stretch mr>חיוג במקביל לכל היעדים</ck-box>
		</div>

		<ck-orange-banner>הוסף מערך זמנים</ck-orange-banner>

		<div class="border-primary-bg-right mt-4">
			<div class="d-flex mb">
				<ck-box stretch primary ml>מערך זמנים לביצוע הפעולה</ck-box>
				<ck-box stretch>בכל זמן אחר</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">העברת שיחה אל</ck-box>
				<ck-box select stretch>מספר יחיד להעברת שיחה</ck-box>
			</div>
			<div class="d-flex flex-row mb">
				<div class="d-flex flex-column">
					<ck-box primary ml style="min-width: 180px; height: 100%">
						<div class="mb-2 align-self-start"></div>
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