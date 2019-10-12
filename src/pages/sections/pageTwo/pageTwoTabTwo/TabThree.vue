<template>
	<div>
		<h3>הגדר תפריט הקשות - איזה לחצנים אפשריים ומה יקרה בכל לחיצה, ניתן להקצות פעולה שונה לפי מערך לוח זמנים</h3>

		<div class="row">
			<div class="col-4">
				<div class="d-flex mb-4">
					<ck-box stretch accent br>פעולה טלפונית שתתבצע</ck-box>
				</div>
				<div class="d-flex">
					<ck-dialer />
				</div>
			</div>
			<div class="col">
				<div class="border-light-bg-right">
					<div class="d-flex mb-4">
						<ck-box disabled-dark>
							<icon name="phone-classic" size="1.2" />
						</ck-box>
						<ck-box select class>
							תפריט הקשות אינטרקטיבי
							<span class="pl-5" />
						</ck-box>
					</div>
					<div class="px-3">
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
		</div>
	</div>
</template> 

