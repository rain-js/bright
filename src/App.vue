<template>
  <div id="app">
    <b-button>默认按钮</b-button>
    <b-button type="primary">主要按钮</b-button>
    <b-button type="success">成功按钮</b-button>
    <b-button type="info">信息按钮</b-button>
    <b-button type="warning">警告按钮</b-button>
    <b-button type="danger">危险按钮</b-button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
