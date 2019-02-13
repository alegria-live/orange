<template>
    <div class="container" v-if="true">

        <div class="view"> 
            <square-progress class="squere"/>
            <square-progress class="squere"/>
        </div>
        <div class="view"> 
            <square-progress class="squere"/>
            <square-progress class="squere"/>
        </div>

    </div>
</template>

<script>

    import SquareProgress from "./SquareProgress"
    export default {
        name:"Preloader",
        components: {
            SquareProgress
        }    
    }
</script>

<style scoped>

    .container {        
        padding-top: 10rem;
    }
    .view {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .squere {
        margin: -15px;
    }

</style>

