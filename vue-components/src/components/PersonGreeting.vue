<template>
    <div>
        <!-- Hello {{ firstName }} {{ lastName }} -->
         Hello {{ fullName }}
         <button @click="sendEvent">Call Heroes</button>
    </div>
</template>

<script>
import { computed } from 'vue';
    export default {
        name: 'PersonGreeting',
        props: ['firstName', 'lastName'],
        emits: ['callHeroes'],
        setup(props, context){

            console.log(context);
            const fullName = computed(() => {
                return `${props.firstName} ${props.lastName}`; 
            })

            function sendEvent(){
                context.emit('callHeroes', fullName.value)
            }

            return{
                fullName,
                sendEvent
            }
        }
        // computed: {
        //     fullName() {
        //         return `${this.firstName} ${this.lastName}`;
        //     }
        // }
    }
</script>

<style scoped>

</style>