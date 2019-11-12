<template>
	<nav>
		<div class="py-1">
			<div class="mx-4 fs-09 t-secondary">
				<span>03:45</span>
				<span class="mx-1">&middot;</span>
				<span>03:45</span>
				<span class="mx-1">&middot;</span>
				<span class="ltr">26 September 2021</span>
			</div>
		</div>
		<div class="py-3 px-4 bg-primary">
			<div class="row align-items-center t-white">
				<div class="col" style="font-size: 1.5rem">
					<div class="d-flex align-items-center">
						<icon name="menu" size="1.5" class="pointer ml-3" @click.native="showNav" />
						<span>מספרים וירטואלים</span>
					</div>
				</div>
				<div class="nav-menu-area" :class="{ 'show': show }" @click="show = false">
					<div class="nav-menu">
						<div class="custom-container">
							<div class="row py-5">
								<div class="col-12">
									<span class="title">
										תפריט ניווט שירותים
									</span>
								</div>
							</div>
							<div class="row pt-5 pb-4">
								<div class="col-12">
									<span class="sub-title">
										מספר וירטואלי
									</span>
									<div class="pr-3 pt-3">
										<div class="pb-2">
											<span class="item">
												כל המספרים
											</span>
										</div>
										<div class="pb-2">
											<span>
												ניהול שיחות נכנסות
											</span>
										</div>
										<div class="pb-4">
											<span> הוספת מספר</span>
										</div>
									</div>
								</div>
								<div class="col-12">
									<div class="border-top"></div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<span class="sub-title">
										שיחות יוצאות
									</span>
									<div class="pr-3 pt-3">
										<div class="pb-2">
											<span class="item">
												כל הממשקים
											</span>
										</div>
										<div class="pb-2">
											<span>
												ניהול רשימת חיוג
											</span>
										</div>
										<div class="pb-4">
											<span> הוספת ממשק</span>
										</div>
									</div>
								</div>
								<div class="col-12">
									<div class="border-top"></div>
								</div>
							</div>
							<div class="row pt-5 pb-4">
								<div class="col-12">
									<span class="sub-title">
										הפצת הודעות
									</span>
									<div class="pr-3 pt-3">
										<div class="pb-2">
											<span class="item">
												כל ההודעות
											</span>
										</div>
										<div class="pb-2">
											<span>
												ניהול הודעות
											</span>
										</div>
										<div class="pb-4">
											<span>  הוספת הודעה</span>
										</div>
									</div>
								</div>
								<div class="col-12">
									<div class="border-top"></div>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<span class="sub-title">
										קוד מעקב
									</span>
									<div class="pr-3 pt-3">
										<div class="pb-2">
											<span class="item">
												כל המספרים
											</span>
										</div>
										<div class="pb-2">
											<span>
												ניהול פלטפורמות
											</span>
										</div>
										<div class="pb-4">
											<span>הוספת מספר</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col text-left" style="font-size: 1rem">
					<router-link to="/" class="t-white mr-3">Comps</router-link>
					<router-link to="/one" class="t-white mr-3">P 1</router-link>
					<router-link to="/two" class="t-white mr-3">P 2</router-link>
					<router-link to="/two2" class="t-white mr-3">P 2 2</router-link>
					<router-link to="/three" class="t-white mr-3">P 3</router-link>
					<router-link to="/four" class="t-white mr-3">P 4</router-link>
					<router-link to="/five" class="t-white mr-3">P 5</router-link>
					<router-link to="/login" class="t-white mr-3">Login</router-link>
					<router-link to="/login/next" class="t-white mr-3">Login Next</router-link>
				</div>
			</div>
		</div>
		<div class="py-2 bg-primary-secondary">
			<div class="mx-4 t-white">שם החשבון / עולם נוכחי / קטגוריית פעילות / עמוד נוכחי</div>
		</div>
	</nav>
</template>
<script>
export default {
	data(){
		return {
			show: false
		}
	},
	methods: {
		close(){
			this.show = false;
		},
		showNav(){
			
			this.show = !this.show;
			console.log(this.show);
		}
	}
}
</script>
<style lang="scss" scoped>

	.custom-container {
        padding: 0 50px;
	}
	
	.nav-menu-area {
		display: none;
		position: absolute;
		height: 100vh;
		width: 100%;
		top: 0;
		right: 0;
		z-index: 30000;
		background-color: transparent;
		background: linear-gradient(90deg, rgba(255,255,255,0.18391106442577032) 0%, rgba(255,255,255,1) 97%);

		&.show {
			display: block;
		}
	}
	.nav-menu {
		background: linear-gradient(90deg, rgba(2,0,36,0.7) 0%, rgba(255,255,255,0) 0%, rgba(35,132,200,0.7) 90%);
		width: 50%;
		height: 100vh;

		.title {
			font-weight: bold;
			font-size: 30px;
		}

		.item {
			font-size: 20px;
		}

		.sub-title {
			font-weight: bold;
			font-size: 23px;
		}
	}
</style>