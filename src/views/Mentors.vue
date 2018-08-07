<template>
    <div class="mentors">
        <div class="columns is-mobile is-centered">
            <div class="column is-one-mobile is-two-third-tablet is-two-desktop">
                <app-searchbar msg="¿Buscas a un mentor en especial?">
                    <input class="input searchInput" type="text" placeholder="Buscar..." v-model="searchInput"/>
                </app-searchbar>
                <ul>
                    <mentorcard :Mentor="mentor" v-for="(mentor, index) in mentors" :key="index+1" />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                searchInput:null,
                mentors:[]
            }
        },
        created() {
            this.GetMentors()
        },
        methods:{
            GetMentors(){
                this.$store.state.mentors.results.forEach(mentor => {
                    mentor.stars = Math.floor(Math.random() * (100 - 0)) + 0;
                    mentor.comments = Math.floor(Math.random() * (100 - 0)) + 0;
                    mentor.mentoriesDone = Math.floor(Math.random() * (100 - 0)) + 0;
                });
                this.mentors = this.$store.state.mentors.results
            },
            GetRamdon(){
                var vm = this;
                $.ajax({
                    url: 'https://randomuser.me/api/?results=10',
                    dataType: 'json',
                    success(data) {
                        for(let i = 0; i < data.results.length; i++){
                            data.results[i].stars = Math.floor(Math.random() * (100 - 0)) + 0;
                            data.results[i].comments = Math.floor(Math.random() * (100 - 0)) + 0;
                            data.results[i].mentoriesDone = Math.floor(Math.random() * (100 - 0)) + 0;
                        }
                        vm.mentors = data.results;
                        console.log(vm.mentors)
                    }
                });
            }
        }
    }
</script>

<style scoped>
</style>