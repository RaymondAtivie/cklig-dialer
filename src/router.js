import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Main from "./views/Main.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "main",
			component: Main,
			children: [
				{
					path: "",
					name: "home",
					component: Home,
				},
				{
					path: "/one",
					name: "one",
					component: () =>
						import(/* webpackChunkName: "pageOne" */ "./views/PageOne.vue")
				},
				{
					path: "/two",
					name: "two",
					component: () =>
						import(/* webpackChunkName: "pageTwo" */ "./views/PageTwo.vue")
				},
				{
					path: "/two2",
					name: "two2",
					component: () =>
						import(/* webpackChunkName: "pageTwo" */ "./views/PageTwo2.vue")
				},
				{
					path: "/three",
					name: "three",
					component: () =>
						import(
							/* webpackChunkName: "pageThree" */ "./views/PageThree.vue"
						)
				},
				{
					path: "/four",
					name: "four",
					component: () =>
						import(
							/* webpackChunkName: "pageFour" */ "./views/PageFour.vue"
						)
				},
				{
					path: "/five",
					name: "five",
					component: () =>
						import(
							/* webpackChunkName: "pageFive" */ "./views/PageFive.vue"
						)
				}
			]
		},
		{
			path: "/login",
			name: "login",
			component: () => import(/* webpackChunkName: "Login" */ "./views/Login.vue")
		}, 
		{
			path: "/login/next",
			name: "loginnext",
			component: () => import(/* webpackChunkName: "LoginNext" */ "./views/LoginNext.vue")
		}
	]
});
