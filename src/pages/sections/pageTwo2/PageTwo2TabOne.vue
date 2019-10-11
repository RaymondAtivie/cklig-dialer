<template>
	<div>
		<div class="row">
			<div class="col">
				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box primary ml>כאשר נכנסת שיחה למספר הוירטואלי</ck-box>
						<ck-box stretch select>החייגן יבצע פעולה שונה בהתאם לזמנים המוגדרים</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch select>
							<div class="d-flex flex-fill flex-row align-items-center justify-content-between">
								<div class="d-flex">שעות פעילות העסק</div>
								<div class="d-flex">
									<ck-box accentDark>ערוך זמני פעילות</ck-box>
								</div>
							</div>
						</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch select>מחוץ לשעות פעילות העסק</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml>מערך זמנים לביצוע הפעולה</ck-box>
						<ck-box stretch select>כשציפי לא במשרד</ck-box>
					</div>
				</div>
				<div class="d-flex">
					<ck-box dotted stretch>
						הוסף מערך זמנים
						<icon name="plus" class="mr-2" />
					</ck-box>
				</div>
			</div>
			<div class="col mt-auto">
				<div class="border-primary-bg-right">
					<div class="d-flex mb">
						<ck-box primary ml>פעולה שתתבצע במערך זה</ck-box>
						<ck-box stretch select>העברת שיחה</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml>פעולה שתתבצע במערך זה</ck-box>
						<ck-box stretch select>תפריט הקשות אינטראקטיבי</ck-box>
					</div>
					<div class="d-flex mb">
						<ck-box primary ml>פעולה שתתבצע במערך זה</ck-box>
						<ck-box stretch select>תא קולי חכם</ck-box>
					</div>
					<div class="d-flex">
						<ck-box primary ml>איזו פעולה תתבצע בכל זמן אחר?</ck-box>
						<ck-box stretch select>השמעת הודעה ומשלוח סמס</ck-box>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>