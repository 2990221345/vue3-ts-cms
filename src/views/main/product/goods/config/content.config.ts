export const contentTableConfig = {
  title: '商品列表',
  showSelectColumn: true,
  showIndexColumn: true,
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    { prop: 'newPrice', label: '新价格', minWidth: '80' },
    { prop: 'desc', label: '商品描述', minWidth: '100', slotName: 'desc' },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
    { prop: 'imgUrl', label: '商品图片', minWidth: '100', slotName: 'image' },
    // {
    //   prop: 'inventoryCount',
    //   label: '库存',
    //   minWidth: '100',
    //   slotName: 'imgUrl'
    // },
    // { prop: 'saleCount', label: '销量', minWidth: '100', slotName: 'imgUrl' },
    // { prop: 'favorCount', label: '收藏', minWidth: '100', slotName: 'imgUrl' },
    // { prop: 'address', label: '地址', minWidth: '100', slotName: 'imgUrl' },
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
  ]
}
