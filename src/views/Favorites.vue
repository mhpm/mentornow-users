<template>
    <div class="favorites">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile">
                <div class="subtitle has-text-centered has-text-white-ter">Mis Mentores Favoritos</div>
            </div>
        </div>
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet is-two-desktop">
                <ul>
                    <mentorcard Name="Bethany Perez Broque" Img="mentor1" Stars="450" Comments="134" MentoriasDone="132" IconStart="true" v-for="(n, index) in 3" :key="index+1" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
            }
        },
        methods:{
             submit(n){
                console.log(n)
            }
        }
    }
</script>

<style scoped>
ul li{
    background-color: rgba(254, 179, 7, 0.3);
    padding: 10px;
    margin-bottom: 7px;
    color: white;
}
a{
    color: hsl(0, 0%, 29%) !important;
}
</style>