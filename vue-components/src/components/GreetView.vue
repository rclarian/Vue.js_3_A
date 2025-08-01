<template>
    <div>
        <h2>Hello {{ userName }} a.k.a {{ heroName }}</h2>
    </div>
</template>

<script>
    export default {
        name: "GreetView",
        props: ['userName', 'heroName']
    }
</script>

<style scoped>

</style>
