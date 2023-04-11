<template>
  <div
    class="lottieBox"
    ref="lottieRef"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import lottieIcon from "lottie-web";
// 传输props值
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  option: {
    type: Object,
    default: () => {},
  },
  width: {
    type: String || Number,
    default: "20",
  },
  height: {
    type: String || Number,
    default: "20",
  },
  url: {
    type: Object,
  },
});
//
const emit = defineEmits(["update:modelValue"]);

// 为了保持数据响应式 转换为Ref
const { modelValue, option, width, height, url } = toRefs(props);
// 绑定需要渲染的Dom
const lottieRef = ref<HTMLDivElement | any>(null);
//
const lottieValue = ref();

// 加载lottie
const lottieLoad = () => {
  const option: any = {
    container: lottieRef.value,
    renderer: "svg",
    loop: false,
    autoplay: false,
    animationData: (url?.value as any).default,
  };

  lottieValue.value = lottieIcon.loadAnimation(option);
  emit("update:modelValue", lottieValue.value);
};

onMounted(() => {
  lottieLoad();
});
</script>

<style scoped></style>
