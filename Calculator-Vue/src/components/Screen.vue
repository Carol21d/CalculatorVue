<script setup>
import TheWelcomeVue from './TheWelcome.vue';

const buttons = new Vue({
    el:'#app',
    data:{
        number : [0,1,2,3,4,5,6,7,8,9,'.'],
        operators : ['+','-','*','/'],
        operation : " ",
        result : null
    }
})



</script>