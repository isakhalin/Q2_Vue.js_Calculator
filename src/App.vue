<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{ someValue }}
    <MyCalculator msg="Hello World"/>
  </div>
</template>

<script>
import MyCalculator from './components/MyCalculator.vue'

export default {
  name: 'App',
  components: {
    MyCalculator
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
