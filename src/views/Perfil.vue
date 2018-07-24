<template>
    <div class="perfil is-vertical-center">
        <div align="center" class="perfilcard">
            <div class="subcard"></div>
            <figure class="image is-128x128">
                <img class="imgcard" src="../assets/user.png" alt="Image" width="128">
            </figure>
            <br>
            <span class="is-size-6 has-text-white-ter">Anotony Lover Lion</span>
            <br>
            <span class="is-size-7 has-text-white-ter has-text-weight-light">Eres mienrbo desde: enero 2, 2018</span><br>
            <span class="is-size-7 has-text-white-ter has-text-weight-light">Mentorias Solicitadas: 55</span>
        </div>
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet is-two-desktop">
                <button class="btn btnColorY" @click="Logout">Cerrar Sesion</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{}
        },
        methods:{
            Logout(){
                console.log('Logout');
                this.$router.push({name:'Login'});
            }
        }
    }
</script>

<style scoped>
.perfilcard{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

}

.subcard{
    position: relative;
    background-color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 100px;
}

.imgcard{
    margin-top: -65px;
    border-radius: 80px;
}
</style>