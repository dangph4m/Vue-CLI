import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/contactbook",
        name: "ContactBook",
        component: () => import("../views/ContactBook.vue"),
    },
    {
        path: "/contacts/:id",
        name: "EditContact",
        component: () => import("../views/ContactEdit.vue")
    },
    {
        path: "/add",
        name: "AddContact",
        component: () => import("../views/ContactAdd.vue")
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;