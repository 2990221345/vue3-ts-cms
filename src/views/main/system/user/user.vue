<template>
  <div class="user">
    <div class="search">
      <el-form label-width="120px">
        <el-row>
          <el-col :span="8">
            <el-form-item label="用户名">
              <el-input style="width: 100%"></el-input> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="密码">
              <el-input style="width: 100%"></el-input> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="你喜欢的运动">
              <el-select style="width: 100%">
                <el-option>篮球</el-option>
                <el-option>足球</el-option>
              </el-select>
            </el-form-item></el-col
          >
          <el-col :span="8">
            <el-form-item label="创建时间">
              <el-date-picker
                style="width: 100%"
              ></el-date-picker> </el-form-item
          ></el-col>
        </el-row>
      </el-form>
    </div>
    <div class="content">内容</div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped></style>
