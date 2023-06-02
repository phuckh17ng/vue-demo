import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../src/App.vue";
import "./styles/main.scss";
const app = createApp(App);

app.use(createPinia());

app.mount("#app");
