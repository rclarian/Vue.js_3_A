<template>
  <div>
    <CardView></CardView>
    <CardView>Card content</CardView>
    <CardView>
      <h2>Card content</h2>
    </CardView>
    <CardView>
      <img src="https://picsum.photos/200" alt="">
    </CardView>
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
