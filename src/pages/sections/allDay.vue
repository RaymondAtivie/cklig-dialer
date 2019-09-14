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
			</template>

			<template v-if="selectedTab == 1">
				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
					</div>
					<ck-audio label="שם ההקלטה ברוכים הבאים - עברית - משה" />
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
			</template>

			<template v-if="selectedTab == 2">
				<div class="border-primary-bg-right">
					<ck-box class="mb" stretch primary>האם לבקש מהלקוח להקיש טלפון נייד</ck-box>
					<ck-box class="mb" stretch select>כן, המערכת תבקש להקיש מספר נייד ד</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון חסוי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון קווי
					</ck-box>
					<ck-box class="mb" stretch>
						<ck-box-checkbox />למתקשרים מטלפון נייד (פחות ממולץ)
					</ck-box>

					<ck-audio class="mb" label="בקשת מספר לחזרה - עברית - משה" />
					<ck-audio class="mb" label="הקראת המספר שהוקש - עברית - משה" />
					<ck-audio class="mb" label="אישור המספר שהוקש - עברית - משה" />
				</div>
			</template>

			<template v-if="selectedTab == 3">
				<div class="border-primary-bg-right">
					<ck-box class="mb" stretch primary>האם להקריא למתקשר מנייד את המספר ממנו הוא מחייג</ck-box>
					<ck-box class="mb" stretch select>כן, המערכת תקריא את המספר ותאפשר להחליף מספר</ck-box>

					<ck-audio class="mb" label="הקראת מספר טלפון נייד מזוהה - עברית - משה" />
					<ck-audio class="mb" label="אישור המספר שהוקרא - עברית - משה" />
					<ck-audio class="mb" label="בקשה להקשת מספר לחזרה - עברית - משה" />
				</div>
			</template>

			<template v-if="selectedTab == 4">
				<div class="border-primary-bg-right mb-4">
					<ck-box class="mb" stretch primary>הקלטת הודעה קולית מהמתקשר</ck-box>
					<div class="d-flex mb">
						<ck-box primary ml>משך זמן מקסימלי להשארת הודעה</ck-box>
						<ck-box stretch select>120 שניות</ck-box>
					</div>
				</div>

				<div class="border-primary-bg-right mb-4">
					<ck-box-toggle class="mb" label="השמע הודעה קולית לפני הקלטת הלקוח" />

					<ck-audio label="אנא הקלט את הודעתך - עברית - משה" />
				</div>

				<div class="mb-4 d-flex">
					<div class="bg-primary align-items-center justify-content-center d-flex" style="width: 42px">
						<icon name="source-branch" class="t-white" size="1.2" />
					</div>
					<ck-box stretch primary>
						<span class="stretch">השמע הודעה קולית לפני הקלטת הלקוח</span>
					</ck-box>
				</div>

				<div class="border-primary-bg-right mb-4">
					<ck-audio label="השמעת הודעת סיום - קליטת ההודעה" />
				</div>

				<div class="mb-4 d-flex">
					<div class="bg-primary align-items-center justify-content-center d-flex" style="width: 42px">
						<icon name="source-branch" class="t-white" size="1.2" />
					</div>
					<ck-box stretch primary>
						<span class="stretch">פעולת סיום שיחה וניתוק השיחה עם המתקשר</span>
					</ck-box>
				</div>
			</template>

			<template v-if="selectedTab == 5">
				<h1 class="mb-2">עדכוני לקוח - שלח סמס למתקשר</h1>
				<div class="border-primary-bg-right mb">
					<ck-box-toggle class="mb" label="שלח סמס למתקשר שהודעתו נקלטה בהצלחה" />
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">שדה ״שולח״ ההודעה</ck-box>
						<ck-box stretch class="ltr">088-88888</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">
							<div class="mb-2">
								תוכן ההודעה
								<div class="fs-07 mt-3" style="font-weight: 300">
									<div>מונה תווים: 74</div>
									<div>ח׳ חיוב: 2</div>
								</div>
							</div>
						</ck-box>
						<ck-box stretch>
							<textarea placeholder="type here..." />
						</ck-box>
					</div>
				</div>

				<div class="border-primary-bg-right mb-4">
					<ck-box-toggle class="mb" label="שלח סמס למתקשר שלא השאיר הודעה" />
					<div class="d-flex mb">
						<ck-box primary ml>שדה ״שולח״ ההודעה</ck-box>
						<ck-box stretch class="ltr">088-88888</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml style="min-width: 220px">
							<div class="mb-2">
								תוכן ההודעה
								<div class="fs-07 mt-3" style="font-weight: 300">
									<div>מונה תווים: 74</div>
									<div>ח׳ חיוב: 2</div>
								</div>
							</div>
						</ck-box>
						<ck-box stretch>
							<textarea placeholder="type here..." />
						</ck-box>
					</div>
				</div>
			</template>

			<template v-if="selectedTab == 6">
				<h1 class="mb-2">עדכוני מנוי - משתמשי מערכת פון פלוס</h1>
				<div class="border-primary-bg-right mb-4">
					<ck-box-toggle class="mb" label="שלח מייל כאשר לקוח הקליט הודעה בהצלחה" />
					<ck-box-toggle class="mb" label="שלח סמס כאשר לקוח הקליט הודעה בהצלחה" />
					<ck-box-toggle class="mb" label="שלח מייל עם פרטי הרשומה שלא הסתיימה כהלכה" />
					<ck-box-toggle class="mb" label="שלח סמס עם פרטי הרשומה שלא הסתיימה כהלכה" />
					<ck-box stretch primary class="mb">שלח התראה אל המשתמשים הבאים</ck-box>
					<ck-box stretch select>
						<icon class="ml-1" name="account-circle" />צוק אסראף,
						<icon class="ml-1 mr-2" name="account-circle" />אלעזר קיי
					</ck-box>
				</div>
			</template>

			<template v-if="selectedTab == 7">
				<div class="border-primary-bg-right mb-4">
					<div class="d-flex mb">
						<ck-box primary ml>כאשר המתקשר אינו מגיב</ck-box>
						<ck-box stretch select>עבור לפעולה הבאה ברצף</ck-box>
					</div>
				</div>
			</template>
		</ck-side-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			selectedTab: 1,
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
	width: 100%;
	height: 1px;
	&-accent {
		@extend .hr;
		background-color: $accent-orange;
	}
}
</style>