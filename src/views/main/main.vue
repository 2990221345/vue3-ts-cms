<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px ' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @foldChange="handleFoldChage" />
        </el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'
const isCollapse = ref(false)
const handleFoldChage = (value: boolean) => {
  isCollapse.value = value
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  .page-info {
    background: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  cursor: pointer;
  background: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; // firefox
  -ms-overflow-style: none; // ie 10+
  &::-webkit-scrollbar {
    display: none; //隐藏滚动条
  }
}
.el-main {
  color: #333;
  text-align: center;
  background: #f0f2f5;
}
</style>
