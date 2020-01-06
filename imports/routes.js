import { RouterFactory, nativeScrollBehavior } from "meteor/akryum:vue-router2";

// Create router instance
const routerFactory = new RouterFactory({
	mode: "history",
	scrollBehavior: nativeScrollBehavior
});

// import pages for route view
import NotFound from "/imports/ui/pages/NotFound.vue";
import Home from "/imports/ui/pages/Home.vue";
import Register from "/imports/ui/pages/Register.vue";
import Personal from "/imports/ui/pages/Personal.vue";
import Login from "/imports/ui/pages/Login.vue";
import Teams from "/imports/ui/pages/Teams.vue";
RouterFactory.configure(router => {
	router.addRoutes([
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/login",
			name: "login",
			component: Login
		},
		{
			path: "/register",
			name: "register",
			component: Register
		},
		{
			path: "/personal",
			name: "personal",
			component: Personal
		},
		{
			path: "/teams",
			name: "team",
			component: Teams
		},
		{
			path: "*",
			component: NotFound
		}
	]);
}, -1);

export default routerFactory;
