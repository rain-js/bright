<template>
  <i :class="`b-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'BIcon',
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped>
@import '/src/theme/icon.scss';
</style>