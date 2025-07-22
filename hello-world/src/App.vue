<template>
  <div>
    <div>{{ greet }} {{ name }}</div>
    <div v-text="channel"></div>
    <div v-html="channel"></div>
    <div v-html="hack"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      greet: 'Hello',
      name: 'Ryan',
      channel: '<b>Codevolution</b>',
      hack: `<a href="#" onclick="alert('You have been hacked!')">Win a prize!</a>`,
    };
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
