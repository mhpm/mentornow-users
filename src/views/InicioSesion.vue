<template>
    <div class="Sesion is-vertical-center">
      <div class="columns is-mobile is-centered">
          <div class="column is-one-mobile is-two-third-tablet">
              <form v-on:submit.prevent="Login(email,password)">
                  <div class="field is-grouped is-grouped-centered">
                      <figure class="has-text-centered">
                          <img src="../assets/logoW.png" height="200" width="80%" />
                      </figure>
                  </div>
                  <br>
                  <br>
                  <div class="field">
                      <p class="control has-icons-left has-icons-right">
                          <input v-model="email" class="input is-medium inputLine" type="email" placeholder="Email"
                              oninvalid="this.setCustomValidity('Campo requerido')"
                              oninput="setCustomValidity('')" required>
                          <span class="icon is-small is-left">
                              <fa name='envelope'/>
                          </span>
                          <p class="help is-danger"></p>
                      </p>
                  </div>
                  <div class="field">
                      <p class="control has-icons-left">
                          <input v-model="password" class="input is-medium inputLine" type="password" placeholder="Password"
                          oninvalid="this.setCustomValidity('Campo Requerido')"
                          oninput="setCustomValidity('')" required>
                          <span class="icon is-small is-left">
                              <fa name='lock'/>
                          </span>
                            <p class="help is-danger"></p>
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control" style="font-size: 14px;">
                          <span class="has-text-white-ter font-weight-light">¿Olvidaste tu contraseña? &nbsp;</span>
                          <router-link to="/Recuperar">
                            <a class="has-text-white">Recuperar</a>
                          </router-link>
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                          <input type="submit" class="btn btnColorY" value="Iniciar Sesion"/>
                      </p>
                  </div>
              </form>
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
  data(){
    return{
      pageloader:'',
      email:'',
      password:''
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
    Login(email, password){
        console.log(email, password);
        
    }
  }
}
</script>

<style scoped>
</style>

