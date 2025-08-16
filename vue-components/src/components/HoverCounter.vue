<template>
    <div>
        <h2 @mouseover="incrementCount">Hovered {{ count }} times</h2>
    </div>
</template>

<script>
// import CounterMixis from '../mixins/counter'
import useCounter from '@/composables/userCounter';
    export default {
        name: 'HoverCounter',
        // mixins: [CounterMixis]
        setup(){
            const {count, incrementCount} = useCounter();

            return{
                count,
                incrementCount
            }
        }
    }
</script>

<style scoped>

</style>