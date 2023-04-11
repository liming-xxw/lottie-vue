import { App } from "vue";
import lottieVue from "../package/lottie.vue";

export const install = (vue: App) => {
  vue.component("lottieVue", lottieVue);
};

 
export default install