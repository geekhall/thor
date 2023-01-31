<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      text-color="#bfc3dd"
      background-color="#324455"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-menu-item index="unocss">unocss</el-menu-item>
      <el-menu-item index="about">about</el-menu-item>
      <el-menu-item index="icon">icon</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.sidebar {
  background-color: #333;
  .sidebar-el-menu {
    background-color: #324157;
  }
}
</style>
