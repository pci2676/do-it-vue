<template>
  <div id="app">
    <LifeCycle headName="Life Cycle에 대해 알아보자"/>
  </div>
</template>

<script>
  import LifeCycle from "./components/LifeCycle.vue";

  export default {
    name: 'App',
    components: {
      LifeCycle
    }
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
