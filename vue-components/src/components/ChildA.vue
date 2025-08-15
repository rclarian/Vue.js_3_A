<template>
    <div>
        <h2>Child Component A</h2>
        <ChildB />
    </div>
</template>

<script>
import ChildB from './ChildB.vue';
    export default {
        name: 'ChildA',
        components: {
            ChildB,
        }
    }
</script>

<style scoped>

</style>