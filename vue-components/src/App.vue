<template>
  <div>
    <InputView v-model="name"/>
  </div>
  
</template>

<script>
import InputView from './components/InputView.vue';

export default {
  name: 'App',
  components: {
    InputView
  },
  data() {
    return {
      name: '',
    }
  },
  provide() {
    return {
      
    }
  },
  methods: {
    
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
