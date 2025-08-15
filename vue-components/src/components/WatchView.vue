<template>
    <div>
        <div>
            <!-- Options API -->
            <input type="text" placeholder="Name" v-model="name">
        </div>
        <div>
            <!-- Composition API -->
            <input type="text" placeholder="First Name" v-model="firstName">
            <input type="text" placeholder="Last Name" v-model="lastName">
        </div>        
        
    </div>
</template>

<script>
import { ref, watch } from 'vue';
    export default {
        name: 'WatchView',
        setup() {
            const firstName = ref('');
            const lastName = ref('Wayne');

            watch([firstName, lastName], (newValues, oldValues) => {
                console.log('Firstname old value', oldValues[0]);
                console.log('Firstname new value', newValues[0]);
                console.log('Lastname old value', oldValues[1]);
                console.log('Lastname new value', newValues[1]);
            },{
                immediate: true
            });

            return {
                firstName,
                lastName
            }
        },
        data() {
            return {
                name: '',
            }
        },
        watch: {
            name(newValue, oldValue) {
                console.log('Old 2 value', oldValue);
                console.log('New 2 value', newValue);
            }
        },
    }
</script>

<style scoped>

</style>