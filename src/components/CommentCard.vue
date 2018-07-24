<template>
    <li v-if="User"  @click="">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img class="rounded" :src="User.picture.thumbnail" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <span class="is-size-5 has-text-white-ter">{{User.name.first}} {{User.name.last}}</span>
                        <nav class="level is-mobile" style="margin-top:10px">
                            <div class="level-left">
                                    <a class="level-item"><fa class="has-text-white" name="star" scale="0.9" /></a>
                                    <a class="level-item"><fa class="has-text-white" name="star" scale="0.9" /></a>
                                    <a class="level-item"><fa class="has-text-white" name="star" scale="0.9" /></a>
                                    <a class="level-item"><fa name="star" scale="0.9" /></a>
                                    <a class="level-item"><fa name="star" scale="0.9" /></a>
                            </div>
                        </nav>
                    <span style="margin-top:-10px" class="has-text-white-ter has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum quis consectetur repellendus, maxime aut enim distinctio recusandae praesentium.</span><br>
                    <span class="is-pulled-right has-text-white-ter has-text-weight-light">Leer mas...</span>
                    </p>
                </div>
            </div>
        </article>
    </li>
</template>

<script>
    export default {
        props:['User']
    }
</script>

<style scoped>
li{
    background-color: rgba(255, 255, 255, 0.2);
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