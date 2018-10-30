<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-one-mobile is-half-desktop">
            <div class="navbar is-fixed-bottom">
                <div align="center" class="columns is-variable is-0 is-mobile">
                    <div class="column">
                        <router-link to="/Main">
                            <a class="navbar-item" >
                                <fa class="has-text-white" name="home" scale="1.5" />
                            </a>
                        </router-link>
                    </div>
                    <div class="column">
                         <router-link to="/Categories">
                            <a class="navbar-item" >
                                <fa class="has-text-white" name="tags" scale="1.5" />
                            </a>
                        </router-link>
                    </div>
                    <div class="column">
                        <router-link to="/Mentors">
                            <a class="navbar-item" >
                                <fa class="has-text-white" name="user-circle" scale="1.5" />
                            </a>
                        </router-link>
                    </div>
                    <div class="column">
                         <router-link to="/Favorites">
                            <a class="navbar-item" >
                                <fa class="has-text-white" name="star" scale="1.5" />
                            </a>
                        </router-link>
                    </div>
                    <div class="column">
                         <router-link to="/Perfil">
                            <a class="navbar-item" >
                                <fa class="has-text-white" name="user" scale="1.5" />
                            </a>
                        </router-link>
                    </div>
                </div>      
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.navbar{
    background-color: #595959;
}
.router-link-active{
    background-color: var(--mn-yellow);
}

.navbar-item{
    padding-top: 15px;
    -webkit-transition: 0.5s; /* Safari */
    transition: 0.5s;
}

a.navbar-item:hover, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active{
     background-color: var(--mn-gray);
     height: 100%;
}
a.navbar-item:active, a.navbar-item.is-active, a.navbar-link:hover, a.navbar-link.is-active{
     background-color: var(--mn-gray);
     height: 100%;
}
</style>
