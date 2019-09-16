<template>
	<div>
		<h1 class="mb-2">עדכוני לקוח - שלח סמס למתקשר</h1>
		<ck-box-toggle br class="mb-4" label="שלח סמס למתקשר שניתק בזמן ההמתנה" />

		<div class="border-primary-bg-right mb">
			<ck-box-toggle class="mb" label="שלח סמס למתקשר שניתק בזמן ההמתנה" />
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">שדה ״שולח״ ההודעה</ck-box>
				<ck-box stretch class="ltr">088-88888</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary ml style="min-width: 180px">
					<div class="mb-2">
						תוכן ההודעה
						<div class="fs-07 mt-3" style="font-weight: 300">
							<div>מונה תווים: 74</div>
							<div>ח׳ חיוב: 2</div>
						</div>
					</div>
				</ck-box>
				<ck-box stretch>
					<div class="mb-2">
						לצערנו נקטעה השיחה לפני שקיבלת מענה,
						<div>
							<div>אנו נתקשר אליך בקרוב שוב.</div>
							<div>תודה, צוקה.</div>
						</div>
					</div>
				</ck-box>
			</div>
		</div>
	</div>
</template>