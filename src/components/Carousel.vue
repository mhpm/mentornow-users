<template>
    <div class='fitSize carousel carousel-animated carousel-animate-slide' data-autoplay="true">
        <div class='carousel-container'>
            <div class='carousel-item has-background is-active'>
            <img class="is-background" src="../assets/img1.jpeg" alt="" width="640" height="310" />
            <div class="title">Aprende a tu ritmo</div>
            </div>
            <div class='carousel-item has-background'>
            <img class="is-background" src="../assets/img2.jpeg" alt="" width="640" height="310" />
            <div class="title">No solo es tu mentor, es tu amigo</div>
            </div>
            <div class='carousel-item has-background'>
            <img class="is-background" src="../assets/img3.jpeg" alt="" width="640" height="310" />
            <div class="title">Un mentor disponible para ti</div>
            </div>
            <div class='carousel-item has-background'>
            <img class="is-background" src="../assets/img4.jpeg" alt="" width="640" height="310" />
            <div class="title">No mas salones aburridos, tu decides donde aprender</div>
            </div>
        </div>
        <div class="carousel-navigation is-centered">
            <div class="carousel-nav-left">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div class="carousel-nav-right">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.fitSize{
     overflow: hidden;
}
</style>