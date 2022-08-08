<template>
  <div class="hy-form">
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
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder" style="width: 100%">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder"
                >
                </el-date-picker>
              </template> </el-form-item
          ></el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { IFormItem } from '../types/index'
const props = defineProps({
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
console.log(props.formItems)
</script>

<style lang="less" scoped>
.hy-form {
  padding-top: 22px;
  .form-item {
    padding: 5px 30px;
  }
}
</style>
