<template>
  <button
    @click="handleClick"
    :disabled="buttonDisabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      'b-button',
      `b-button-${type}`,
      {
        'is-plain': plain,
        'is-disabled': buttonDisabled,
        'is-round': round
      }
    ]">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String,
      default: 'button'
    },
    autofocus: Boolean,
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data () {
    return {

    }
  },
  computed: {
    buttonDisabled() {
      // 后续表单组件设置 disabled, 也会影响该组件
      return this.disabled
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '/src/theme/button.scss';

.b-button {
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  background: $--button-default-background-color;
  border: 1px solid $--button-default-border-color;
  user-select: none;
  color: $--button-default-font-color;
  font-size: 14px;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  line-height: 1;
  &:focus, &:hover {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }
  &:active {
    color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
    border-color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
    outline: none;
  }

  &.is-disabled {
    &,
    &:hover,
    &:focus {
      color: $--button-disabled-font-color;
      cursor: not-allowed;
      background-image: none;
      background-color: $--button-disabled-background-color;
      border-color: $--button-disabled-border-color;
    }

    &.el-button--text {
      background-color: transparent;
    }

    &.is-plain {
      &,
      &:hover,
      &:focus {
        background-color: $--color-white;
        border-color: $--button-disabled-border-color;
        color: $--button-disabled-font-color;
      }
    }
  }
  &.is-plain {
    &:hover,
    &:focus {
      background: $--color-white;
      border-color: $--color-primary;
      color: $--color-primary;
    }

    &:active {
      background: $--color-white;
      border-color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      color: mix($--color-black, $--color-primary, $--button-active-shade-percent);
      outline: none;
    }
  }
  &-primary {
    @include button-variant($--button-primary-font-color, $--button-primary-background-color, $--button-primary-border-color);
  }
  &-success {
    @include button-variant($--button-success-font-color, $--button-success-background-color, $--button-success-border-color);
  }
  &-info {
    @include button-variant($--button-info-font-color, $--button-info-background-color, $--button-info-border-color);
  }
  &-warning {
    @include button-variant($--button-warning-font-color, $--button-warning-background-color, $--button-warning-border-color);
  }
  &-danger {
    @include button-variant($--button-danger-font-color, $--button-danger-background-color, $--button-danger-border-color);
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &+.b-button {
    margin-left: 10px;
  }
}
</style>