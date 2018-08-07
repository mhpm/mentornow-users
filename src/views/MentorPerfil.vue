<template>
    <div class="mentorPerfil has-text-grey-lighter">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-half-desktop">
                <div class="columns">
                    <div class="column">
                        <div align="center" class="perfilcard">
                            <div class="subcard"></div>
                            <figure class="image is-128x128">
                                <img class="rounded imgcard" :src="mentor.picture.large" alt="Image">
                            </figure>
                            <br>
                                <span class="is-size-5">{{mentor.name.first}} {{mentor.name.last}}</span>
                            <br>
                            <span class="is-size-7 has-text-weight-light">{{mentor.stars}} Estrellas - {{mentor.comments}} Comentarios</span><br>
                            <span class="is-size-7 has-text-weight-light">Mentorias impartidas: {{mentor.mentoriesDone}}</span><br>
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
                        <div class="has-text-white-ter has-text-centered font-weight-light">ver mas ...</div>
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
                            <commentcard :User="user" v-for="(user, index) in users.slice(10, 14)" :key="index+1"/>
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
                users:this.$store.state.mentors.results,
                mentor:null
            }
        },
        created(){
            this.GetMentor(this.$route.params.id)
            window.scrollTo(0, 0);
        },
        mounted(){
            this.GetComments()
        },
        methods:{
            Agendar(){
                console.log('agendar');
                this.$router.push({ path: 'Agendar' })
            },
            GetMentor(id){
                this.mentor = this.$store.state.mentors.results.filter(mentor => {
                    return mentor.id.value == id
                })
                this.mentor = this.mentor[0]
            },
            GetComments(){
            }
        }
    }
</script>

<style scoped>
.subcard{
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 38%, 0 71%);
    clip-path: polygon(0 0, 100% 0, 100% 38%, 0 71%);
    position: relative;
    background-color: rgba(254, 179, 7, 0.3);
    width: 100%;
    height: 200px;
}

.imgcard{
    margin-top: -145px;
    border-radius: 80px;
}

.bg-light{
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
}
</style>