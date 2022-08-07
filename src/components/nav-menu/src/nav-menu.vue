<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!props.collapse">Vue3+Ts</span>
    </div>
    <el-menu
      default-active="1-106"
      :collapse="props.collapse"
      :unique-opened="true"
      class="el-menu-vertical-demo"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      background-color="#001529"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 一级菜单 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.sort + ''">
            <template #title>
              <el-icon><Checked /></el-icon>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}{{ item.sort }}</span>
            </template>
            <!-- 二级菜单 -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="item.sort + '-' + subItem.sort"
                @click="handleMenuItemClick(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
          <!-- 渲染级联列表 -->
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
import { useStore } from '@/store'
const store = useStore()
const router = useRouter()
const props = defineProps({
  collapse: {
    type: Boolean,
    default: () => false
  }
})
const userMenus = computed(() => store.state.login.userMenus)

const handleMenuItemClick = (item: any) => {
  console.log(item)
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
