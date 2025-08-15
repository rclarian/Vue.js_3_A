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
        <div>
            <!-- Reactive API -->
            <input type="text" placeholder="Reactive First Name" v-model="fName">
            <input type="text" placeholder="Reactive Last Name" v-model="lName">
            <input type="text" placeholder="Reactive Hero Name" v-model="options.heroName">
        </div>
    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'lodash'
    export default {
        name: 'WatchView',
        setup() {

            const state = reactive({
                fName: '',
                lName: '',
                options: {
                    heroName: ''
                }
            })

            // watch(() => {
            //     return {...state}
            // }, 
            // function(newValue, oldValue){
            //     console.log('fName old value', oldValue.fName);
            //     console.log('fName new value', newValue.fName);
            //     console.log('lName old value', oldValue.lName);
            //     console.log('lName new value', newValue.lName);
            // })

            // watch(() => state.fName, function(newValue, oldValue){
            //     console.log('fName old value', oldValue);
            //     console.log('fName new value', newValue);
            // })

             watch(
                () => _.cloneDeep(state.options), 
                function(newValue, oldValue){
                console.log('options old value', oldValue);
                console.log('options new value', newValue);
            },{
                deep:true,
            })

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
                lastName,
                ...toRefs(state)
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