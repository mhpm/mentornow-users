<template>
    <div class="Registro is-vertical-center">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet">
                <form v-on:submit.prevent="validateForm">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="name" class="input is-medium inputLine" type="text" placeholder="Nombre"
                                v-validate="'required'" name="name">
                            <span class="icon is-small is-left">
                                <fa name='user'/>
                            </span>
                            <p class="help is-danger" v-show="errors.has('name')">{{ errors.first('name') }}</p>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="email"  class="input is-medium inputLine"
                            v-validate="'required|email'" name="email" placeholder="Email" type="text" />
                            <span class="icon is-small is-left">
                                <fa name='envelope'/>
                            </span>
                            <p class="help is-danger" v-show="errors.has('email')">{{ errors.first('email')}}</p>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="password" class="input is-medium inputLine" name="password" type="password" placeholder="Password"
                            v-validate="'required'" />
                            <span class="icon is-small is-left">
                                <fa name='lock'/>
                            </span>
                            <p class="help is-danger" v-show="errors.has('password')">{{ errors.first('password') }}</p>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input v-model="repassword" class="input is-medium inputLine" name="repassword" type="password" placeholder="Confirmar Password"
                            v-validate="'required'" />
                            <span class="icon is-small is-left">
                                <fa name='lock'/>
                            </span>
                            <span class="icon is-small is-right">
                                <fa v-if="password == repassword && password != ''" name='check' class="has-text-success"/>
                                <fa v-else name='ban' class="has-text-danger" />
                            </span>
                            <p class="help is-danger" v-show="errors.has('repassword')">{{ errors.first('repassword') }}</p>
                        </p>
                    </div>
                    <div class="field is-grouped is-grouped-centered">
                        <p class="control" style="font-size: 14px;">
                            <span class="has-text-white-ter font-weight-light">&nbsp;</span>
                            <router-link to="/Recuperar">
                                <a class="has-text-white"></a>
                            </router-link>
                        </p>
                    </div>
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
        name:'',
        email:'',
        password:'',
        repassword:''
        }
    },
    created(){


    },
    mounted(){
        var vm = this
        vm.pageLoader = this.$refs.pageloader

        const dict = {
            custom: {
                email: {
                    required: 'campo requerido' // messages can be strings as well.
                },
                name: {
                    required: 'campo requerido'
                },
                password:{
                    required: 'campo requerido'
                },
                repassword:{
                    required: 'campo requerido'
                }
            }
            };
        this.$validator.localize('es', dict);
    },
    methods:{
        PageLoader(){
        this.pageLoader.Active()
        },
        validateForm() {
            var vm = this;
            this.$validator.validateAll().then((result) => {
                if (result) { 
                    vm.Registrar(vm.name, vm.email, vm.password, vm.repassword)
                    return;
                }
            });
        },
        Registrar(name, email, password, repassword){
            console.log(name, email, password, repassword);
            this.$router.push({name:'Welcome'});
            
        }
    }
    }
</script>

<style scoped>
</style>

