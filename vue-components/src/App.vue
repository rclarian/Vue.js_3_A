<template>
  <div>
    <ProvideInject/>
    
  </div>
</template>

<script>
import ProvideInject from './components/ProvideInject.vue';

export default {
  name: 'App',
  components: {
    ProvideInject,
    
  },
  data() {
    return {

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
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
.content {
  max-width: 400px;
  position: relative;
}

</style>
