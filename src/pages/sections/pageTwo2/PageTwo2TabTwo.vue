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

			<div class="row align-items-center mt-2 p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box label="יום ראשון" />
						<ck-time-box label="החל משעה" time="10:00" />
						<ck-time-box label="ועד לשעה" time="18:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex">
						<ck-icon-circle disabled success />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box label="יום שני" />
						<ck-time-box label="החל משעה" time="10:00" />
						<ck-time-box label="ועד לשעה" time="14:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex align-items-center">
						<ck-icon-circle class="ml-4" disabled />

						<ck-time-box class="ml-2" label="החל משעה" time="17:00" />
						<ck-time-box label="ועד לשעה" time="20:00" />

						<ck-icon-circle class="mx-4" />

						<ck-time-box br class="ml-2" label="החל משעה" time="21:00" />
						<ck-time-box br label="ועד לשעה" time="00:00" />

						<ck-icon-circle class="mx-4" success disabled />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box label="יום שלישי" />
						<ck-time-box label="החל משעה" time="10:00" />
						<ck-time-box label="ועד לשעה" time="18:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex">
						<ck-icon-circle success />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box label="יום רביעי" />
						<ck-time-box label="החל משעה" time="10:00" />
						<ck-time-box label="ועד לשעה" time="18:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex">
						<ck-icon-circle success disabled />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box label="יום חמישי" />
						<ck-time-box label="החל משעה" time="10:00" />
						<ck-time-box label="ועד לשעה" time="18:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex align-items-center">
						<ck-icon-circle class="ml-4" disabled />

						<ck-time-box class="ml-2" label="החל משעה" time="21:30" />
						<ck-time-box label="ועד לשעה" time="23:59" />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box disabled label="יום שישי" />
						<ck-time-box disabled label="החל משעה" time="00:00" />
						<ck-time-box disabled label="ועד לשעה" time="00:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex">
						<ck-icon-circle disabled-total />
					</div>
				</div>
			</div>
			<div class="row align-items-center p-2">
				<div class="col-4">
					<div class="d-flex justify-content-between">
						<ck-tick-box disabled label="שבת" />
						<ck-time-box disabled label="החל משעה" time="00:00" />
						<ck-time-box disabled label="ועד לשעה" time="00:00" />
					</div>
				</div>
				<div class="col">
					<div class="d-flex">
						<ck-icon-circle disabledTotal />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.t-info {
	font-size: 16px;
	font-weight: 300;
}
</style>