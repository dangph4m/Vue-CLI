import { createApp } from 'vue'
import App from './App.vue'
import { handle } from "./common/promise";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//createApp(App).use(router).mount('#app');
//createApp(App)
//    .mixin({
//        methods: {
//                handle,
//        }
//    })
//    .mount('#app');
const app=createApp(App);
app.use(router);
app.mixin({methods: {handle}});
app.mount("#app");