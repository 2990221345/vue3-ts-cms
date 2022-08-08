type IForm = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IForm
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}
