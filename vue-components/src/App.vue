<template>
  <div>
    <GreetView userName="Ryan Clarian" heroName="Batman"/>
    <GreetView userName="Joanne Clarian" heroName="SuperMan"/>
    <GreetView userName="Kulit Quilop" heroName="Wonder Woman"/>
    <GreetView :userName="name" :heroName="channel"/>
    <ArticleView title="Article Title" :likes="50" :isPublished="true"/>
  </div>
  
</template>s

<script>
import GreetView from './components/GreetView.vue';
import ArticleView from './components/ArticleView.vue';

export default {
  name: 'App',
  components: {
    GreetView,
    ArticleView,
  },
  data() {
    return {
      name: 'Vishwas',
      channel: 'Codevolution'
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
