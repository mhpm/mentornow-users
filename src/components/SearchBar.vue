<template>
   <div class="field searchBar">
        <div class="control has-icons-left has-icons-right">
            <slot/>
            <p class="has-text-grey-light is-size-7 has-text-centered">{{msg}}</p>
            <span class="icon is-left">
                <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-right">
            <fa name="search"/>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props:['msg']
    }
</script>

<style scoped>
.searchInput{
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: white;
    border:none;
    border-radius: 100px;
    opacity: 1;
    background-color: var(--mn-gray);
    width: 100%;
    margin-bottom: 3px;
    padding: 20px;
}

.searchBar{
    margin-top: -20px;
}
</style>