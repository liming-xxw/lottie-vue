import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import lottievue from './script/index'
createApp(App).use(lottievue).mount("#app");
