<script setup lang="ts">
import { ref } from "vue";

import "element-plus/es/components/message/style/css";
import { ElButton } from "element-plus";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <hr />
  <el-button type="primary">ELButton</el-button>
  <hr />
  <div class="box"></div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div></div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.card {
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  padding: 30px;
  position: relative;
}
.box {
  width: 100px;
  height: 100px;
  background-color: cyan;
  border-radius: 0.5rem;
  border: #888 1px solid;
}
</style>
