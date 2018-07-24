<template>
    <div class="Recuperar is-vertical-center">
      <div class="columns is-mobile is-centered">
          <div class="column is-one-mobile is-two-third-tablet">
              <form v-on:submit.prevent="Recovery(email)">
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
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                          <input type="submit" class="btn btnColorY" value="Recuperar Contraseña"/>
                      </p>
                  </div>
              </form>
                <div class="field is-grouped is-grouped-centered">
                    <p class="control">
                        <router-link align="center" class="has-text-white-ter font-weight-light putbottom" to="/InitSesion">Cancelar</router-link>
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
      email:''
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
    Recovery(password){
        console.log(password);
        this.$router.push({name:'RecExitoso'});
        
    }
  }
}
</script>

<style scoped>
</style>

