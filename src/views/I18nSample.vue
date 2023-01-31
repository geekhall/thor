<template>
  <h1 class="home">{{ $t('sitename') }}</h1>
  <hr />
  <p>{{ $t('header.content') }}</p>
  <hr />
  <el-select v-model="$i18n.locale">
    <el-option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
      {{ lang }}
    </el-option>
  </el-select>
</template>

<script setup lang="ts">
const langs = ['cn', 'en']
</script>

<style lang="less" scoped>
.home {
  color: cyan;
}
</style>
