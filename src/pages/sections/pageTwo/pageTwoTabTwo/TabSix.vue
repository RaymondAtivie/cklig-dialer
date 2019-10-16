<template>
	<div>
		<div class="row">
			<div class="col-8">
				<div class="border-primary-bg-right mb-5">
					<ck-box-toggle class="mb" label="שלח סמס למתקשר שמספרו נקלט בהצלחה" />
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
								לצערנו הקלטת ההודעה לא הושלמה
								<div>
									<div>נשמח לשמוע ממך שוב, צוקה</div>
								</div>
							</div>
						</ck-box>
					</div>
				</div>

				<h1 class="mb-2" style="margin-top: 200px">עדכוני מנוי - משתמשי מערכת פון פלוס</h1>

				<div class="border-primary-bg-right mb">
					<ck-box-toggle class="mb" label="שלח מייל כאשר לקוח סיים פעולה בהצלחה" />
					<ck-box-toggle class="mb" label="שלח סמס כאשר לקוח סיים פעולה בהצלחה" />
					<ck-box-toggle class="mb" label="שלח מייל עם פרטי הרשומה שלא הסתיימה כהלכה" />
					<ck-box-toggle class="mb" label="שלח סמס עם פרטי הרשומה שלא הסתיימה כהלכה" />

					<ck-box mb stretch primary>שלח התראה אל המשתמשים הבאים</ck-box>

					<ck-box stretch select>
						<icon class="ml-1" name="account-circle" />צוק אסראף ,
						<icon class="ml-1 mr-2" name="account-circle" />אלעזר קיי
					</ck-box>
				</div>
			</div>
		</div>
	</div>
</template>