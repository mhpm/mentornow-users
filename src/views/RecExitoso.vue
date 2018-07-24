<template>
    <div class="RecExitoso is-vertical-center">
      <div class="columns is-mobile is-centered">
          <div class="column is-one-mobile is-two-third-tablet">
              <form class="">
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                          <fa style="color:white" name="check" scale="5"/>
                      </p>
                  </div>
                  <div class="field is-grouped is-grouped-centered">
                     <p class="has-text-white-ter font-weight-light has-text-centered is-size-5-mobile">
                          !Envio Exitoso! <br> Revisa tu correo electrónico
                      </p>
                  </div>
                  <br>
                  <div class="field is-grouped is-grouped-centered">
                      <p class="control">
                        <router-link to="/InitSesion">
                          <button class="btn btnColorY">Continuar</button>
                        </router-link>
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
    }
  }
}
</script>

<style scoped>
</style>

