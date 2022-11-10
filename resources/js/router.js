import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import Hello from "./views/Hello";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/hello",
        name: "Hello",
        component: Hello,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;