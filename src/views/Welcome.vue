<template>
    <div class="welcome is-vertical-center">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet">
                <form v-on:submit.prevent="Option">
                    <div class="field is-grouped is-grouped-centered">
                        <h1 class="title has-text-white is-size-1-mobile">Bienvenido</h1>
                    </div>
                    <br>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="has-text-white-ter font-weight-light has-text-centered is-size-5-mobile">
                            ¿Cual es el Nivel Academico de tu interes?
                        </p>
                    </div>
                    <br>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control has-icons-left">
                            <span class="select is-medium">
                                <select v-model="option">
                                    <option>Primaria</option>
                                    <option>Secundaria</option>
                                    <option>Preparatoria</option>
                                    <option>Universitario</option>
                                    <option>Posgrado</option>
                                </select>
                            </span>
                            <span class="icon is-small is-left">
                                <fa class="has-text-white" name="graduation-cap" />
                            </span>
                        </p>
                    </div>
                    <br>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="has-text-white-ter font-weight-light has-text-centered is-size-5-mobile">
                            Podras cambiarla en cualquier momento
                        </p>
                    </div>
                    <br>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control">
                            <input type="submit" class="btn btnColorY" value="Continuar"/>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                option:'Preparatoria'
            }
        },
        methods:{
            Option(){
                console.log(this.option);
                this.$router.push({name:'Main'});
                
            }
        }
    }
</script>

<style scoped>
.select select{
    background-color: #ffa100 !important;
    color: white;
}
</style>