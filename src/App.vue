<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ someValue }}
    <HelloWorld msg="Hello World"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      arr: [],
      obj: {
        data: null
      }
    }
  },
  computed: {
    someValue(){
      return this.obj?.data?.value;
    }
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
