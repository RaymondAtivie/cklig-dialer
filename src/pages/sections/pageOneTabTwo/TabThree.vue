<template>
	<div>
		<div class="border-primary-bg-right mb-4">
			<ck-box class="mb" stretch primary>איזה מספר יראה הנציג אשר מקבל את השיחה?</ck-box>
			<div class="d-flex mb">
				<ck-box stretch select>מספר קבוע ומוגדר מראש לצורך זיהוי קל</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box primary>המספר שיוצג</ck-box>
				<ck-box stretch mr>088-8888888</ck-box>
				<ck-box select br-light>
					<div class="ltr">+972</div>
				</ck-box>
			</div>
		</div>

		<div class="border-primary-bg-right mb-4">
			<ck-box class="mb" stretch primary>חיווי קולי לנציג בעסק</ck-box>
			<div class="d-flex mb">
				<ck-box stretch select>השמיעו לנציג פתיח קולי לפני מענה וקישור ללקוח</ck-box>
			</div>
			<ck-audio label="שיחה נכנסת ממספר וירטואלי - עברית - משה" />
		</div>

		<div class="border-primary-bg-right mb-4">
			<ck-box class="mb" stretch primary>הקלטת הודעה קולית מהמתקשר</ck-box>
			<div class="d-flex mb">
				<ck-box stretch select>120 שניות</ck-box>
			</div>
			<ck-audio />
		</div>

		<ck-info-box />
	</div>
</template>
