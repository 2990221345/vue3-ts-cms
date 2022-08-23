<template>
  <div class="hy-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="label">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!-- <el-col :span="8"> -->
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  style="width: 100%"
                  @model-value="modelValue[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.title"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  @model-value="modelValue[`${item.field}`]"
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                >
                </el-date-picker>
              </template> </el-form-item
          ></el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, defineEmits } from 'vue'
import { IFormItem } from '../types/index'
const props = defineProps({
  // 父组件使用v-model 绑定的是modelValue的值
  modelValue: {
    type: Object,
    required: true
  },
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  label: {
    type: String,
    default: '100px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => {
      return {
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      }
    }
  }
})

const emit = defineEmits(['update:modelValue'])
// 这里使用浅拷贝 父组件的数据 通过watch监听emit派发
// const formData = ref({ ...props.modelValue })

// watch(
//   formData,
//   (newValue) => {
//     // console.log(newValue)
//     emit('update:modelValue', newValue)
//   },
//   {
//     deep: true
//   }
// )

// 事件触发
const handleValueChange = (value: any, field: string) => {
  emit('update:modelValue', { ...props.modelValue, [field]: value })
}
</script>

<style lang="less" scoped>
.hy-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
