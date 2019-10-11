<template>
	<div class="bg-accent p-1">
		<div class="d-flex flex-row align-items-center justify-content-between mb-2 p-2">
			<div class="d-flex flex-column">
				<div class="t-white fs-2">ניהול מערך זמנים</div>
			</div>
			<div class="d-flex flex-column">
				<div class="d-flex flex-row align-items-center">
					<div class="t-white">בטל שינויים וסגור</div>
					<div class="mr-3">
						<ck-box accentLight>שמור והשתמש במערך זמנים נוכחי</ck-box>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-white py-3">
			<div class="row p-2">
				<div class="col-4">
					<ck-input label="שם מערך הזמנים" />
				</div>

				<div class="col t-info">
					<p>כדי להיות מתואמים לכל השעונים בעולם - יום בשבוע מתחיל בשעה 00:00 ומסתיים בשעה 59:23.</p>
					<p>ניתן להגדיר לוח זמנים שאינו רציף, כדי ליישם לוח זמנים ״חוצה ימים״ יש להגדיר את מהלך הלילה בשני הימים בשבוע.</p>
				</div>
			</div>

			<modal />
		</div>
	</div>
</template>

<script>
import Modal from "./pageTwo2TabOne/PageTwo2TabOneModal";
export default {
	components: {
		Modal
	}
};
</script>

<style lang="scss" scoped>
.t-info {
	font-size: 16px;
	font-weight: 300;
}
</style>