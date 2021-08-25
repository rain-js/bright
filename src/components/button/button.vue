<template>
  <button
    :class="[
      'b-button',
      `b-button-${type}`
    ]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.b-button {
  padding: 12px 20px;
  background: white;
  border: 1px solid #dcdfe6;
  user-select: none;
  color: #606266;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:focus, &:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }

  &-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:focus, &:hover {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &:active {
      background: #3a8ee6;
      border-color: #3a8ee6;
      color: #fff;
    }
  }
  &-success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:focus, &:hover {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &:active {
      background: #5daf34;
      border-color: #5daf34;
      color: #fff;
    }
  }
  &-info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:focus, &:hover {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &:active {
      background: #82848a;
      border-color: #82848a;
      color: #fff;
    }
  }
  &-warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:focus, &:hover {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &:active {
      background: #cf9236;
      border-color: #cf9236;
      color: #fff;
    }
  }
  &-danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:focus, &:hover {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &:active {
      background: #dd6161;
      border-color: #dd6161;
      color: #fff;
    }
  }
  &+.b-button {
    margin-left: 10px;
  }
}
</style>