<template>
  <div>
    <CardView content="Card content 1"/>
    <CardView content="Card content 2"/>
  </div>
  
</template>

<script>
import CardView from './components/CardView.vue';

export default {
  name: 'App',
  components: {
    CardView,
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
