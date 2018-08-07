<template>
    <li @click="submit(Materia)">
        <div class="title is-4 has-text-warning">{{Materia}}</div>
        <div class="subtitle is-6 has-text-grey-lighter">{{Text}}</div>
    </li>
</template>

<script>
    export default {
        props:['Materia', 'Text'],
         methods:{
            submit(index){
                console.log(index);
                
            }
        }
    }
</script>

<style scoped>
li{
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    padding-right: 80px;
    margin-bottom: 7px;
    color: white;
    font-weight: 100;
}
</style>