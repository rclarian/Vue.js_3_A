<template>
  <div>
    <h2 v-for="(name, index) in names" :key="name">{{ index }} {{ name }}</h2>
    <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>
    <div v-for="actor in actors" :key="actor.name">
      <h2>{{ actor.name }}</h2>
      <h3 v-for="movie in actor.movies" :key="movie">{{ movie }}</h3>
    </div>
    <h2 v-for="(value, key, index) in myInfo" :key="value">{{ index }} {{ key }} {{ value }}</h2>
    <template v-for="name in names" :key="name">
        <h2>{{ name }}</h2>
        <hr />
    </template>
    <template v-for="name in names" :key="name">
      <h2>{{ name }}</h2>
      <input placeholder="Last name" />
      <hr />
    </template>
    <button @click="shuffle">Shuffle!</button>

    <template v-for="name in names" :key="name">
      <h2 v-if="name === 'Bruce'">{{ name }}</h2>
    </template>

  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: 'App',
  data(){
    return{
      names: ['Bruce', 'Clark', 'Diana'],
      fullNames: [
        { first: 'Bruce', last: 'Wayne'},
        { first: 'Clark', last: 'Kent'},
        { first: 'Princess', last: 'Diana'},
      ],
      actors: [
        {
          name: 'Christian Bale',
          movies: ['Batman', 'The Prestige'],
        },
        {
          name: 'Di Caprio',
          movies: ['Titanic', 'Inception'],
        },
      ],
      myInfo: {
        name: 'Vishwas',
        channel: 'Codevolution',
        course: 'Vue 3'
      },
    };
  },
  methods: {
    shuffle() {
      console.log(this.names);
      this.names = _.shuffle(this.names);
    },
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

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: olivedrab;
}

.sold-out {
  color: red;
}
</style>
