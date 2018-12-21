<template>
  <div class="home">
    home
    <button @click="ff">123</button>
  </div>
</template>

<script>
    // @ is an alias to /src

    import {
        login
    } from '../service/getData';

    export default {
        name: 'home',
        created() {


        },
        methods:{
            async ff(){
                var data =await login({})
                console.log("=========")
                console.log(data)
            }
        }
    }
</script>
