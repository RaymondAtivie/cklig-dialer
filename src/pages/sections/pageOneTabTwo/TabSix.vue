<template>
	<div>
        <ck-box-toggle br class="mb-5" label="בצע פעולה כאשר זמן ההמתנה לנציג מתארכת" />

		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class="mb" label="בצע פעולה כאשר זמן ההמתנה לנציג מתארכת" />
			<ck-box mb block primary>הגדירו את רמת השירות במענה הטלפוני - זמן המתנת הלקוח</ck-box>
			<div class="d-flex mb">
				<ck-box primary ml>זמן ההמתנה המקסימלי למענה של נציג</ck-box>
				<ck-box stretch select>
					<div class="ltr">60 שניות</div>
				</ck-box>
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