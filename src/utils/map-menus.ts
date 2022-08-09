import { RouteRecordRaw } from 'vue-router'

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1.先去加载默认所有的routes  本地路由表
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // console.log(key) //   ----->    ./analysis/dashboard/dashboard.ts
    // const route = require('../router/main/analysis/dashboard/dashboard')
    const route = require('../router/main' + key.split('.')[1]) //拼接路径 引入ts文件 splice切割 .ts可以省略
    allRoutes.push(route.default)
  })
  // console.log('所有的', allRoutes)
  // console.log('后台获取的用户表', userMenus)

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        // 只要二级菜单 chiren
        const route = allRoutes.find((route) => route.path === menu.url) //从本地所有的权限路由表中 筛选对应权限 符合返回本地路由表的配置{}
        // 符合的话直接push进数组  通过addRoute('main',route) 添加进main的子菜单
        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  // console.log('处理完成', routes)

  return routes
}

export function pathMapToMenu(userMenus: any, currentPath: string): any {
  console.log('userMenus', userMenus)
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (menu.type == 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export { firstMenu }
