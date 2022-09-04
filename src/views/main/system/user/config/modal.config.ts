export const modalConfig = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      isHidden: false,
      rules: [],
      placeholder: '请输入用户密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      rules: [],
      options: [],
      placeholder: '请选择部门'
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      rules: [],
      options: [],
      placeholder: '请选择角色'
    }
  ],
  colLayout: {
    span: 24
  },
  itemStyle: {
    padding: '10px'
  }
}
