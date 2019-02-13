<template>
    <footer>
        <p>Copyright &copy; {{ (new Date()).getFullYear() }} - Orange Fenêtre</p>
        <router-link to="/MentionsLegales" exact>Mentions Légales</router-link>
    </footer>        
</template>

<script>
export default {
    name: 'foot'
}
</script>

<style scoped>
    footer {
        position: relative;       
        bottom: 0;
        left: 0;
        text-align: center;
        width: 100vw;
        background-color: rgb(150, 149, 148);
        color: white;
        padding: 0.5% 0;
        font-weight: 400;
        margin-top: 5rem;   
    }
    footer a {
         text-shadow: none;
    }

    .router-link-active {
        color: rgb(232, 123, 40);
        text-shadow: 1px 1px 4px black;
    }
</style>


