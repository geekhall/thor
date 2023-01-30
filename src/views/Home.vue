
<template>
  <h1 class="home">Home</h1>
  <hr />
  <p>Home page</p>
  <Counter />
  <hr />
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import mainStore from '~/store'

const store = mainStore()
const cnt = computed(() => store.count)
</script>

<style lang="less" scoped>
.home {
  color: cyan;
}
</style>
