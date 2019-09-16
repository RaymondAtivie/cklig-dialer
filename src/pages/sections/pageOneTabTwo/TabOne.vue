<template>
	<div>
		<div class="border-primary-bg-right">
			<div class="d-flex mb">
				<ck-box stretch primary>השמעת פתיח למתקשר</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box select stretch>השמיעו למתקשר הודעה קולית לפני העברת השיחה</ck-box>
			</div>
			<ck-audio label="שם ההקלטה ברוכים הבאים - עברית - משה" />
		</div>

		<hr class="hr-blue my-3" />

		<div class="border-primary-bg-right">
			<div class="d-flex mb">
				<ck-box stretch primary>השמעת הודעה קולית נוספת למתקשר</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box stretch>ההודעה קולית תושמע מיד ברצף ההקלטות</ck-box>
			</div>
			<ck-audio label="אנו מטפלים בפניות קודמות - עברית - משה" />
		</div>

		<ck-orange-banner>צור הקלטה נוספת לרצף ההשמעות</ck-orange-banner>

		<div class="border-primary-bg-right">
			<div class="d-flex mb">
				<ck-box stretch primary>מוזיקת המתנה</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box stretch light>הגדירו מה יושמע ללקוח בעת ההמתנה לנציג</ck-box>
			</div>
			<ck-audio label="ארבע עונות, ויואלדי - מוזיקת המתנה" />
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