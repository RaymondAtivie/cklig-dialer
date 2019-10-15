<template>
	<div>
		<h3 class="t-accent">תפריט הקשות - הקשה 9 - לפי מערך לוחות זמנים</h3>
		<hr />

		<div class="row mt-4">
			<div class="col-4">
				<div class="d-flex">
					<div class="border-light-bg-right ml-2">
						<ck-box stretch mb>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch>פעולה טלפונית שתתבצע</ck-box>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="d-flex">
					<div class="flex-fill">
						<ck-box-icon select class="mb ml-7" light icon="timer">שם מערך זמנים</ck-box-icon>
						<ck-box-icon select icon="phone-classic" light class="ml-7">העברת שיחה</ck-box-icon>
					</div>
				</div>
			</div>
		</div>
		<hr />

		<div class="row">
			<div class="col-4">
				<div class="d-flex">
					<div class="border-accent-bg-right ml-2">
						<ck-box accent stretch mb>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box accent stretch>פעולה טלפונית שתתבצע</ck-box>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="d-flex">
					<div class="flex-fill">
						<ck-box-icon accent br select class="mb ml-7" light icon="timer">שם מערך זמנים</ck-box-icon>
						<div class="border-light-bg-right">
							<ck-box-icon select icon="phone-classic ml-7" light class="ml-7">העברת שיחה</ck-box-icon>
							<div class="p-3">
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
		</div>
		<hr class="my-3" />

		<div class="row">
			<div class="col-4">
				<div class="d-flex">
					<div class="border-light-bg-right ml-2">
						<ck-box stretch mb>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch>פעולה טלפונית שתתבצע</ck-box>
					</div>
				</div>
			</div>
			<div class="col">
				<div class="d-flex">
					<div class="flex-fill">
						<ck-box-icon select class="mb ml-7" light icon="timer">בכל שעה אחרת</ck-box-icon>
						<ck-box-icon select icon="phone-classic" light class="ml-7">השארת מספר טלפון לחזרה</ck-box-icon>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.ml-7 {
	margin-left: 170px;
}
</style>