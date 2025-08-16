<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
// import CounterMixis from '../mixins/counter'
import useCounter from '@/composables/userCounter';

    export default {
        name: 'ClickCounter',
        // mixins: [CounterMixis]
        setup() {
            const {count, incrementCount} = useCounter(100, 10);

            return{
                count,
                incrementCount
            }
        }
    }
</script>

<style scoped>

</style>