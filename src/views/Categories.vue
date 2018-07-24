<template>
    <div class="categories">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet is-two-desktop">
                <app-searchbar msg="¿En que asignatura necesitas ayuda?">
                    <input class="input searchInput" type="text" placeholder="Buscar..." v-model="searchInput" v-on:keyup.13="submit"/>
                </app-searchbar>
                <ul>
                    <li v-for="(n, index) in 9" :key="index+1" @click="submit(n, index)">
                        <materiacard Materia="Matematicas" Text="23 Mentores"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                searchInput:''
            }
        },
        methods:{
             submit(n, index){
                console.log(n)
            }
        }
    }
</script>

<style scoped>
ul{
    padding:-50px;
}
</style>