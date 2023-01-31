<template>
  <h1>Iconify Sample</h1>
  <hr />
  <p>Iconify Sample page</p>
  <hr />
  <div class="i-ep-lock"></div>
  <i-ep-edit />
  <i-ep-search></i-ep-search>
  <div style="margin: 50px">
    <el-space direction="vertical" alignment="left">
      <!-- 直接使用 -->
      <el-space>
        <!-- 使用class -->
        <div class="i-ep-lock"></div>
        <!-- 使用标签 -->
        <i-ep-edit />
      </el-space>

      <!-- 组件里使用 -->
      <el-button icon="i-ep-avatar">Button</el-button>

      <el-input prefix-icon="i-ep-search" suffix-icon="i-ep-pointer"></el-input>

      <el-menu>
        <el-menu-item>
          <el-icon class="i-ep-menu"></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
      </el-menu>
    </el-space>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
</style>
