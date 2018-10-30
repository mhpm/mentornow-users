<template>
    <div class="agendar">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet is-two-desktop">
                <p class="has-text-grey-light is-size-7 has-text-centered">Estas son las asignaturas en las que Bethany podria ayudarte, selecciona una porfavor</p><br>
                <ul>
                    <materiacard Materia="Matematicas" Text="23 Mentores" v-for="(n, index) in 3" :key="index+1"/>
                </ul>
                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <router-link class="has-text-white-ter font-weight-light putbottom" to="/">Cancelar</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>