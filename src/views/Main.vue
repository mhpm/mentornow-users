<template>
    <div class="main">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-half-desktop">
                <app-carousel />
                <app-searchbar msg="¿En que asignatura necesitas ayuda?">
                    <input class="input searchInput" type="text" placeholder="Buscar..." v-model="searchInput" v-on:keyup.13="submit"/>
                </app-searchbar>
                <div class="field is-grouped is-grouped-centered">
                    <p class="has-text-white-ter font-weight-light has-text-centered is-size-4-mobile is-size-3-tablet">
                        Nuestros Mentores están listo y entusiasmados por ayudarte con
                        tus materias o alguna actividad que desees aprender
                    </p>
                </div>
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
             submit(){
                console.log(this.searchInput)
            }
        }
    }
</script>

<style scoped>
.main{
    margin-top: -35px !important;
}


</style>