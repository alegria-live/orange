<template>
<div>
    <NavBack/>
    <Navigation/>
    <!-- <Foot/> -->
</div>
</template>

<script>
import Navigation from "./Navigation";
import NavBack from "./NavBack";
import Foot from "./Foot";
export default {
    name: 'Accueli',
    components: {
        Navigation,
        NavBack,
        Foot
    }
}
</script>