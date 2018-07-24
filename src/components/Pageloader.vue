<template>
     <div v-bind:class="['pageloader is-dark is-left-to-right', modalActive]">
         <span class="title">{{msg}}</span>
     </div>
</template>

<script>
    export default {
        props:['msg'],
    data(){
        return {
            modalActive: ''
        }
    },
    methods: {
        Active(){
            this.modalActive = 'is-active';
            setTimeout(() => {
                this.modalActive = '';
            }, 3000);
        }
    }
  }
</script>

<style scoped>

</style>