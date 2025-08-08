<template>
  <div>
    <teleport to="#portal-root">
      <PortalRoot />
    </teleport>
    
  </div>
</template>

<script>
import PortalRoot from './components/PortalRoot.vue';

export default {
  name: 'App',
  components: {
    PortalRoot,
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

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
}
</style>
