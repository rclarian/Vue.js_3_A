<template>
    <div>
        <!-- <h4>ChildStyles component text</h4> -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ChildStyles',
    }
</script>

<style scoped>
h4 {
  color: olivedrab;
}
</style>