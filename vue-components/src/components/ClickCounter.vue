<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
import CounterMixis from '../mixins/counter'
    export default {
        name: 'ClickCounter',
        mixins: [CounterMixis]
    }
</script>

<style scoped>

</style>