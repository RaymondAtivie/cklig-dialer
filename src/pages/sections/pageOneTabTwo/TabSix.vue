<template>
	<div>
		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class label="בצע פעולה כאשר זמן ההמתנה לנציג מתארכת" />
		</div>

		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class="mb" label="בצע פעולה כאשר זמן ההמתנה לנציג מתארכת" />
			<ck-box mb block primary>הגדירו את רמת השירות במענה הטלפוני - זמן המתנת הלקוח</ck-box>
			<div class="d-flex mb">
				<ck-box stretch primary ml>זמן ההמתנה המקסימלי למענה של נציג</ck-box>
				<ck-box select>60 שניות</ck-box>
			</div>
			<div class="d-flex">
				<ck-box stretch primary ml>בתום זמן ההמתנה - בצע פעולה</ck-box>
				<ck-box select>מעבר לתא קולי</ck-box>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>