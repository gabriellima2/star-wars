import type { RouteRecordRaw } from "vue-router";

import Home from "../pages/Home.vue";
import Details from "../pages/Details.vue";

export const routes: Array<RouteRecordRaw> = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/details/:id", name: "Details", component: Details, beforeEnter: (to, _, next) => {
		const { id } = to.params;

		if (Array.isArray(id)) return next({ path: "/" });

		if (isNaN(Number(id))) return next({path: "/"});

		next();
	}},
];
