<template>
	<div>
		<h3>הגדר תפריט הקשות - איזה לחצנים אפשריים ומה יקרה בכל לחיצה, ניתן להקצות פעולה שונה לפי מערך לוח זמנים</h3>

		<div class="row">
			<div class="col-4">
				<div class="d-flex justify-content-center">
					<ck-dialer />
				</div>
			</div>
			<div class="col">
				<div class="px-3 border-light-bg-right">
					<div class="d-flex mb">
						<ck-box accent style="width: 200px">בעת הקשה על הסיפרה</ck-box>
						<ck-box accentDark style="width: 40px; font-weight: 500;">1</ck-box>
						<ck-box accent>תתבצע פעולה טלפונית</ck-box>
						<ck-box accentDark select stretch>בכל זמן לחיצה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box accent style="width: 200px">בעת הקשה על הסיפרה</ck-box>
						<ck-box accentDark style="width: 40px; font-weight: 500;">2</ck-box>
						<ck-box accent>תתבצע פעולה טלפונית</ck-box>
						<ck-box accentDark select stretch>בכל זמן לחיצה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">3</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">4</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">5</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">6</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">7</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">8</ck-box>
						<ck-box disabled>לא הוגדרה</ck-box>
						<ck-box disabled stretch />
					</div>
					<div class="d-flex mb">
						<ck-box accent style="width: 200px">בעת הקשה על הסיפרה</ck-box>
						<ck-box accentDark style="width: 40px; font-weight: 500;">9</ck-box>
						<ck-box accent>תתבצע פעולה טלפונית</ck-box>
						<ck-box accentDark select stretch>בכל זמן לחיצה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box disabled style="width: 200px">הקשה</ck-box>
						<ck-box disabled-dark style="width: 40px; font-weight: 500;">0</ck-box>
						<ck-box disabled>תתבצע פעולה טלפונית</ck-box>
						<ck-box disabled stretch />
					</div>
				</div>
			</div>
		</div>

		<div class="border-primary my-5 mx-4" style="position: relative">
			<div class="p-4 text-center">
				<p>
					<span style="font-weight: 500">יש להקליט תפריט הקשות בהתאם ללחצנים שנבחרו,</span>
					<span>לשם כך הם מוארים בצבע כתום.</span>
				</p>
				<p>אנא וודא כי כלל ההקשות מועברות ללקוח בהקלטה - אין למערכת יכולת לבדוק התאמה בין ההקלטה לתפריט שהוגדר,</p>
				<p class="pb-4">האחריות לתקינות התפריט חלה עליך בלבד.</p>
			</div>
			<div
				class="d-flex justify-content-center"
				style=" width: 100%; position: absolute; bottom: -27px;"
			>
				<ck-box primary class="border-primary">
					<div
						class="px-3 py-2"
						style="font-size: 28px; font-weight: 500"
					>העלה או צור קובץ הקלטת תפריט הקשות</div>
				</ck-box>
			</div>
		</div>
	</div>
</template> 

