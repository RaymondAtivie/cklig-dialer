<template>
	<div>
		<div class="border-primary-bg-right mb-4">
			<ck-box class="mb" stretch primary>איזה מספר יראה הנציג אשר מקבל את השיחה?</ck-box>
			<div class="d-flex mb">
				<ck-box stretch select>מספר קבוע ומוגדר מראש לצורך זיהוי קל</ck-box>
			</div>
			<div class="d-flex mb">
				<ck-box stretch primary>המספר שיוצג</ck-box>
				<ck-box mr class="ltr">088-8888888</ck-box>
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

		<div class="border-primary-bg-right mb-3">
			<ck-box class="mb" stretch primary>העברת שיחה מבוקרת</ck-box>
			<div class="d-flex mb">
				<ck-box stretch select>הקישור ללקוח יבוצע רק לאחר הקשה על הספרה 1</ck-box>
			</div>
			<ck-audio label="שיחה מבוקרת לנציג - עברית - משה" />
		</div>

		<ck-info-box />
	</div>
</template>
