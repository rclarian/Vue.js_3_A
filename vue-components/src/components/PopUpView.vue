<template>
    <div>
        <h2>This is a popup</h2>
        <button @click="$emit('close', 'Vishwas')">Close Popup</button>
    </div>
</template>

<script>
    export default {
        name: 'PopUpView',
        emits: ['close']
    }
</script>

<style scoped>

</style>