<template>
    <div class="mentorPerfil has-text-grey-lighter">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-half-desktop">
                <div class="columns">
                    <div class="column">
                        <div align="center" class="perfilcard">
                            <div class="subcard"></div>
                            <figure class="image is-128x128">
                                <img class="imgcard" src="../assets/mentor1.png" alt="Image" width="128">
                            </figure>
                            <br>
                            <span class="is-size-6">Bethany Perez Broque</span>
                            <br>
                            <span class="is-size-7 has-text-weight-light">450 Estrellas - 134 Comentarios</span><br>
                            <span class="is-size-7 has-text-weight-light">Mentorias impartidas: 45</span><br>
                            <span class="icon has-text-grey-light" v-for="i in 5" :key="i">
                                <fa name="star" scale="1" />
                            </span><br>
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column has-text-centered">
                        <button class="btn btnColorY" @click="Agendar">Agendar Mentoria</button>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="subtitle has-text-grey-lighter  has-text-centered">Curriculum</div>
                        <div class="has-text-justified bg-light font-weight-light" style="padding: 10px">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, deleniti, nemo tempora neque, quasi animi nihil amet doloremque eligendi reiciendis ea et a sit tempore id quibusdam facere excepturi explicabo!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores soluta cupiditate qui libero repellendus ea velit, aspernatur ullam minus, quo provident doloremque consectetur laudantium? Quidem voluptatum voluptate at nihil.
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="subtitle has-text-grey-lighter has-text-centered">Mentorias Impartidas</div>
                        <ul>
                            <materiacard Materia="Matematicas" Text="3 veces impartida" v-for="(n, index) in 3" :key="index+1"/>
                        </ul>
                        <div class="has-text-white-ter has-text-centered font-weight-light">ver mas ...</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="subtitle has-text-grey-lighter has-text-centered">Comentarios</div>
                        <ul>
                            <commentcard :User="user" v-for="(user, index) in users" :key="index+1"/>
                        </ul>
                        <div class="has-text-white-ter has-text-centered font-weight-light">ver mas ...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                users:[]
            }
        },
        mounted(){
            this.GetUsers()
        },
        methods:{
            Agendar(){},
            GetUsers(){
                var vm = this;
                $.ajax({
                    url: 'https://randomuser.me/api/?results=5',
                    dataType: 'json',
                    success(data) {
                        vm.users = data.results;
                    }
                });
            }
        }
    }
</script>

<style scoped>
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

.bg-light{
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
}
</style>