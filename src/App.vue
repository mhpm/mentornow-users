<template>
  <div id="app" class="section">
      <transition mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="100">
        <router-view/>
      </transition>
      <app-navbar v-show="$route.name == 'Main' || $route.name == 'Categories' || $route.name == 'Mentors' || $route.name == 'Favorites' || $route.name == 'Perfil' || $route.name == 'MentorPerfil'"/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    created(){
    },
    computed:{
      sectionClass(){
        let route = this.$route.name;
        if(route == 'Main' || route == 'Perfil' || route == 'MentorPerfil'){
          return{'': true}
        }else{
          return{'section': true}
        }
      }
    }
  }
</script>

<style>

  body{
      min-height: 100vh;
      height: auto;
      background-image: url("./assets/bg.jpg") !important;
      background-position: center;
      background-repeat: repeat;
      font-family: 'Montserrat', sans-serif;
  }

  .section{
    padding-bottom: 80px !important;
  }

  .putbottom{
    position: relative;
    bottom: -300%;
  }

  .is-vertical-center {
    height: 80vh;
    display: flex;
    align-items:center;
    justify-content: center;
  }

  :root{
    --mn-yellow: #FEB307;
    --mn-blue: #33B5E5;
    --mn-gray: #2c2c2c;
  }

  .font-weight-thin{
    font-weight: 100;
  }

  .font-weight-light{
    font-weight: 200;
  }

  .btn{
    background-color: transparent;
    color: white;
    font-weight: 200;
    font-size: 1.2em;
    border-radius: 100px;
    padding: 9px 20px 9px 20px !important;
    border-style: solid !important;
    border-width: 1px !important;
  }
  .btn:active{
    background-color: white;
    color: black;
    box-shadow: none;
  }

  .btnColorY{
    color: var(--mn-yellow);
    border-color: var(--mn-yellow);
  }
  
  .btnColorY:active{
    background-color: var(--mn-yellow);
    border-color: var(--mn-yellow);
    color: white !important;
  }

  .btnColorB{
    color: var(--mn-blue);
    border-color: var(--mn-blue);
  }

  .btnColorB:active{
    background-color: var(--mn-blue);
    border-color: var(--mn-blue);
    color: white !important;
  }

  .inputLine {
    background-color: transparent !important;
    border-radius: 0px !important;
    border: none !important;
    color: white !important;
    border-bottom: 0.5px solid white !important;
    font-weight: 100;
    box-shadow: none;
  }

  .inputLine:focus {
    background-color: transparent;
    box-shadow: none !important;
    border: none !important;
    border-bottom: 1px solid white !important;
    
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-weight: 100;
    font-size: 16px;
    color: rgba(255, 255, 255, .5) !important;
    width: 100%;
  }

</style>
