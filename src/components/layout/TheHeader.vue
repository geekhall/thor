<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseMenu">
      <i-ep-menu class="icon" />
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="btn-bell">
        <el-tooltip effect="dark">
          <i-ep-user />
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const collapseMenu = () => {
  console.log('collapseMenu')
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: 'border-box';
  width: 100%;
  height: 70px;
  font-size: 1.5rem;
  color: white;
  background-color: darkblue;
  .collapse-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: left;
    padding: 0 20px;
    cursor: pointer;
  }
  .logo {
    float: left;
    line-height: 70px;
    width: 200px;
  }
  .header-right {
    float: right;
    padding-right: 3rem;

    .btn-bell {
      background-color: darkslateblue;
    }
  }
}
</style>
