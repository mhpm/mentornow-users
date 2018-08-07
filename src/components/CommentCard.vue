<template>
    <li v-if="User">
        <article class="media">
            <div class="media-left">
                <figure class="image is-64x64">
                    <img class="rounded" :src="User.picture.thumbnail" alt="Image">
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                        <span class="is-size-5 has-text-white-ter">{{User.name.first}} {{User.name.last}}</span>
                        <div>
                            <span><fa class="has-text-warning" name="star" scale="0.9" /></span>
                            <span style="padding-left:5px;"><fa class="has-text-warning" name="star" scale="0.9" /></span>
                            <span style="padding-left:5px;"><fa class="has-text-warning" name="star" scale="0.9" /></span>
                            <span style="padding-left:5px;"><fa class="has-text-dark" name="star" scale="0.9" /></span>
                            <span style="padding-left:5px;"><fa class="has-text-dark" name="star" scale="0.9" /></span>
                        </div>
                    <span style="margin-top:5px" class="has-text-white-ter has-text-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero earum quis consectetur repellendus, maxime aut enim distinctio recusandae praesentium.</span><br>
                    <span class="is-pulled-right has-text-white-ter has-text-weight-light">Leer mas...</span>
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