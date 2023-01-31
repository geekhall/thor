
<template>
  <the-header></the-header>
  <the-sidebar></the-sidebar>
  <div class="content-box">
    <div class="content">
      <h1 class="home">Home</h1>
      <hr />
      <p>Home page</p>
      <Counter />
      <hr />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import mainStore from '~/store'
import TheHeader from '../components/layout/TheHeader.vue'
import TheSidebar from '../components/layout/TheSidebar.vue'

const store = mainStore()
const cnt = computed(() => store.count)
</script>

<style lang="less" scoped>
.home {
  color: cyan;
}
</style>
