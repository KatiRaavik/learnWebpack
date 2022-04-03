<template>
    <div class="container">
        <h1 class="is-size-1">{{joke}}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created(){
        axios.get('https://api.chucknorris.io/jokes/random').then(response => {
            console.log(response.data.value);
            this.joke = response.data.value;
        });
    },
    data(){
        return {
            joke: ''
        }
    }
}
</script>

<style>

</style>