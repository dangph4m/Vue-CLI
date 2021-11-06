import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import { handle } from "./common/promise";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createApp(App)
    .mixin({
        methods: {
            handle,
        },
    })
    .use(store)
    .use(router)
    .mount("#app");
