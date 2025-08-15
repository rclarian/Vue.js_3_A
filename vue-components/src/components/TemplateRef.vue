<template>
    <div>
        <input type="text" ref="inputRef">
        <!-- <PostList ref="postListRef"/> -->
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
// import PostList from './PostList.vue';
    export default {
        name: 'TemplateRef',
        components: {
            // PostList
        },
        setup(){
            const inputRef = ref(null);

            onMounted(() => {
                inputRef.value.focus()
            })

            return {
                inputRef
            }
        }
        // mounted() {
        //     console.log(this.$refs.postListRef)
        //     this.$refs.inputRef.focus()
        //     // this.$refs.postListRef.focus()
        // }
    }
</script>

<style scoped>

</style>