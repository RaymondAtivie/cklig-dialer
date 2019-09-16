<template>
	<div>
		<h1 class="mb-2">עדכוני מנוי - משתמשי מערכת פון פלוס</h1>

		<div class="border-primary-bg-right mb-4">
			<ck-box-toggle class="mb" label="שלח מייל עם פרטי הרשומה שנותקה בזמן ההמתנה" />
			<ck-box-toggle label="שלח סמס עם פרטי הרשומה שנותקה בזמן ההמתנה" />
		</div>

		<div class="border-primary-bg-right mb">
			<ck-box-toggle class="mb" label="שלח מייל עם פרטי הרשומה שנותקה בזמן ההמתנה" />
			<ck-box-toggle class="mb" label="שלח סמס עם פרטי הרשומה שנותקה בזמן ההמתנה" />
			<ck-box class="mb" block primary>שלח התראה אל המשתמשים הבאים</ck-box>
			<ck-box stretch select>
				<icon class="ml-1" name="account-circle" />צוק אסראף ,
				<icon class="ml-1 mr-2" name="account-circle" />אלעזר קיי
			</ck-box>
		</div>
	</div>
</template>