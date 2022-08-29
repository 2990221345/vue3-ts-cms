export const contentTableConfig = {
  title: '菜单列表',
  showSelectColumn: false,
  showIndexColumn: false,
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '200' },
    { prop: 'type', label: '级别', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '200' },
    { prop: 'icon', label: '菜单icon', minWidth: '150' },
    { prop: 'sort', label: '排序', minWidth: '100' },
    { prop: 'permission', label: '权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    { prop: '', label: '操作', minWidth: '200', slotName: 'handler' }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
