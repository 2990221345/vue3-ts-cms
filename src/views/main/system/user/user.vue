<template>
  <div class="user">
    <div class="search">
      <HyForm :formItems="formItem"></HyForm>
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script lang="ts" setup>
import HyForm, { IFormItem } from '@/base-ui/form'
const formItem: IFormItem[] = [
  {
    type: 'input',
    label: '用户名',
    rules: [],
    placeholder: '请输入用户名'
  },
  {
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请输入喜欢的运动',
    options: [
      { title: '篮球', value: 'basketball' },
      { title: '足球', value: 'football' }
    ]
  },
  {
    type: 'datepicker',
    label: '创建时间',
    placeholder: '请选择创建时间范围',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]
</script>

<style lang="less" scoped></style>
