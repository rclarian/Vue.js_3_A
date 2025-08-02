<template>
  <div>
    <button @click="showPopup = true">Show Popup</button>
    <PopUpView v-show="showPopup" @close="closePopup"/>
  </div>
  
</template>

<script>
import PopUpView from './components/PopUpView.vue';

export default {
  name: 'App',
  components: {
    PopUpView,
  },
  data() {
    return {
      name: 'Vishwas',
      showPopup: false,
    }
  },
  provide() {
    return {
      username: this.name,
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false;
      console.log('name', name);
    }
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
