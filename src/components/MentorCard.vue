<template>
    <li v-if="Mentor" @click="submit(Mentor.id.value)">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img class="rounded" :src="Mentor.picture.thumbnail" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <span class="is-size-6 has-text-white-ter">{{Mentor.name.first}} {{Mentor.name.last}}</span>&nbsp;<fa v-if="true" class="has-text-right icon is-small" name="star" scale="1" />
                    <br>
                    <span class="is-size-7 has-text-white-ter has-text-weight-light">{{Mentor.stars}} Estrellas - {{Mentor.comments}} Comentarios</span><br>
                    <span class="is-size-7 has-text-white-ter has-text-weight-light">Mentorias impartidas: {{Mentor.mentoriesDone}}</span>
                    </p>
                </div>
                <!-- <nav class="level is-mobile">
                    <div class="level-left">
                            <a class="level-item"><fa class="has-text-white" name="star" scale="1" /></a>
                            <a class="level-item"><fa class="has-text-white" name="star" scale="1" /></a>
                            <a class="level-item"><fa class="has-text-white" name="star" scale="1" /></a>
                            <a class="level-item"><fa name="star" scale="1" /></a>
                            <a class="level-item"><fa name="star" scale="1" /></a>
                    </div>
                </nav> -->
            </div>
        </article>
    </li>
</template>

<script>
    export default {
        props:['Mentor'],
        methods:{
             submit(id){
                console.log(id);
                this.$router.push({ name: 'MentorPerfil', params: { id: id }});
            }
        }
    }
</script>

<style scoped>
li{
    background-color: rgba(254, 179, 7, 0.3);
    padding: 10px;
    margin-bottom: 7px;
    color: white;
}
a{
    color: hsl(0, 0%, 29%) !important;
}

.rounded{
    border-radius: 80px;
}
</style>