<template>
    <div>
        <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
    </div>
</template>

<script>
import CounterMixis from '../mixins/counter'
    export default {
        name: 'HoverCounter',
        mixins: [CounterMixis]
    }
</script>

<style scoped>

</style>