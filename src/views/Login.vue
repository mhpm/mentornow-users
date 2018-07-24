<template>
    <div class="Login is-vertical-center">
      <div class="columns is-mobile is-centered">
          <div class="column is-one-mobile is-two-third-tablet">
                  <div class="field is-grouped is-grouped-centered">
                      <figure class="has-text-centered">
                          <img src="../assets/logoW.png" height="200" width="80%" />
                      </figure>
                  </div>
                  <br>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                        <router-link to="/InitSesion">
                           <button class="btn">Iniciar con email</button>
                        </router-link>
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                          <button class="btn btnColorB" @click="LoginFB">Iniciar con Facebook</button>
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                            <span class="has-text-white-ter font-weight-light">¿Eres nuevo? &nbsp;</span>
                            <router-link to="/Registro">
                                <a class="has-text-white"> Registrate</a>
                            </router-link>
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <!-- <a href="tel:+529332471210">Llamar</a> -->
                        <span class="has-text-white-ter font-weight-light putbottom">MentorNow &reg; 2018</span>
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
      pageloader:''
    }
  },
  mounted(){
    var vm = this
    vm.pageLoader = this.$refs.pageloader
  },
  methods:{
    PageLoader(){
      this.pageLoader.Active()
    },
    LoginFB(){
        console.log('Login with Facebook');      
    }
  }
}
</script>

<style scoped>
</style>

