<template>
  <div>
    <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
    <h2>Computed fullname - {{ fullName }}</h2>
    <h2>
      Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}
    </h2>
    <button @click="items.push({id: 4, title: 'Keyboard', price: 50})">Add Item</button>
    <h2>Computed total - {{ total }}</h2>
    <h2>Method total - {{ getTotal() }}</h2>
    <input type="text" v-model="country">
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        {
          id: 1,
          title: 'TV',
          price: 100,
        },
        {
          id: 2,
          title: 'Phone',
          price: 200,
        },
        {
          id: 3,
          title: 'Laptop',
          price: 300,
        },
      ],
      country: '',
    };
  },
  methods: {
    getTotal(){
      console.log('GeTotal method');
      return this.items.reduce((total, curr) => (total = total + curr.price), 0);
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    total() {
      console.log('total computed property');
      return this.items.reduce((total, curr) => (total = total + curr.price), 0);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}

input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
