<template>
	<div>
		<div class="border-primary-bg-right">
			<ck-box mb stretch primary>האם לבקש מהלקוח להקיש טלפון נייד</ck-box>
			<ck-box mb stretch select>כן, המערכת תבקש להקיש מספר נייד</ck-box>
			<ck-box mb stretch>
				<ck-box-checkbox />למתקשרים מטלפון חסוי
			</ck-box>
			<ck-box mb stretch>
				<ck-box-checkbox />למתקשרים מטלפון קווי
			</ck-box>
			<ck-box mb stretch>
				<ck-box-checkbox />למתקשרים מטלפון נייד (פחות ממולץ)
			</ck-box>

			<ck-audio class="mb" label="הקראת מספר טלפון נייד מזוהה - עברית - משה
" />
			<ck-audio class="mb" label="אישור המספר שהוקרא - עברית - משה" />

			<ck-audio label="בקשה להקשת מספר לחזרה - עברית - משה" />
		</div>
	</div>
</template>