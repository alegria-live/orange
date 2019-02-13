<template>
    <div>
        <img src="static/img/nav_back_gray.jpg" id="nav_back">
        <router-link to="/"><img src="static/img/logo_text_single.svg" alt="Orange Fenetre" id="logo_text_single"></router-link>
    </div>
</template>
<script>
export default {
    name: 'NavBack'
}
</script>
<style scoped>
    #nav_back {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 999;
        height: 100px;
        opacity: 0.9;
        transition: 900ms;
    }
    #nav_back:hover {
        opacity: 0.5;
    }

    #logo_text_single {
        position: fixed;     
        top: 15px;        
        right: 2rem;
        width: 27%;
        z-index: 1006;
        cursor: pointer;  
    }
</style>
