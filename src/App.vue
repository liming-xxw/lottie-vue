<script setup lang="ts">
import { ref } from 'vue';
import  * as  add from './assets/add account.json'

const iconRef = ref()


</script>

<template>
  <div >
    <lottie-vue :url="add" v-model="iconRef" @mousemove="iconRef.play()" @mouseout="iconRef.stop()" >
 
    </lottie-vue>
  </div>
</template>

<style scoped>
</style>
