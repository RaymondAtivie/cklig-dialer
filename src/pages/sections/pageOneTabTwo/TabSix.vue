<template>
	<div>
		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class label="שלח סמס למתקשר שהודעתו נקלטה בהצלחה" />
		</div>

		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class="mb" label="שלח סמס למתקשר שהודעתו נקלטה בהצלחה" />
			<ck-box mb block primary>הגדירו את רמת השירות במענה הטלפוני - זמן המתנת הלקוח</ck-box>
			<div class="d-flex mb">
				<ck-box primary ml>כאשר המתקשר אינו מגיב</ck-box>
				<ck-box stretch select>עבור לפעולה הבאה ברצף</ck-box>
			</div>
			<div class="d-flex">
				<ck-box primary ml>בתום זמן ההמתנה - בצע פעולה</ck-box>
				<ck-box stretch select>מעבר לתא קולי</ck-box>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>