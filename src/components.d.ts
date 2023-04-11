import { lottieVueComponent } from "./script/index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    lottieVue: typeof lottieVueComponent;
  }
}
