<template>
  <div>
    <GreetView/>
  </div>
  
</template>

<script>
import GreetView from './components/GreetView.vue';

export default {
  name: 'App',
  omponents: {
    GreetView,
  },
    
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
