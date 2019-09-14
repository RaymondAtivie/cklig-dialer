<template>
	<div>
		<h1 class="mb-2">הגדרות שיחה נכנסת</h1>
		<ck-box-toggle class="mb-4" label="שלח סמס למתקשר שהודעתו נקלטה בהצלחה" />

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
					<textarea
						placeholder="type here..."
						value="לצערנו נקטעה השיחה לפני שקיבלת מענה,
אנו נתקשר אליך בקרוב שוב.
מונה תווים: 74 ת"
					/>
				</ck-box>
			</div>
		</div>
	</div>
</template>