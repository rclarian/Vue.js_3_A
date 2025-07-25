<template>
  <div>
    <h2>{{ name }}</h2>
    <div>
      <button @mouseover="changeName($event), increment(1, $event)" @mouseout="resetName(), decrement(1)">Change name</button>
    </div>

    <h2>{{ count }}</h2>
    <div>
      <button @click="count += 1">Increment</button>
      <button @click="count -= 1">Decrement</button>
    </div>
    <div>
      <button @click="increment(1, $event)">Increment 1</button>
      <button @click="increment(5)">Increment 5</button>
      <button @click="decrement(1)">Decrement 1</button>
      <button @click="decrement(5)">Decrement 5</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name: 'Vishwas',
      originalName: 'Vishwas',
      count: 0,
    };
  },
  methods: {
    increment(num, event) {
      this.count += num;
      console.log('Increment Event', event);
    },
    decrement(num) {
      this.count -= num;
    },
    changeName(event) {
      this.name = 'Batman';
      console.log('Ryan Event', event);
    },
    resetName() {
      this.name = this.originalName;
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
