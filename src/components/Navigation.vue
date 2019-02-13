<template>
    <div>
        <b-nav class="nav">
            <b-nav-item router-link to="/" exact>Orange</b-nav-item>
            <b-nav-item router-link to="/Accueli" exact>Accueli</b-nav-item>
            <b-nav-item-dropdown class="navDropdown" id="nav7_ddown" text="Fenêtres" extra-toggle-classes="nav-link-custom" left exact>
                <b-dropdown-item class="dropItem" router-link to="/FenetrePvc" exact>PVC >>></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>ALU >>></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>BOIS >>></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown class="navDropdown" id="nav7_ddown" text="Portes d'entrée" extra-toggle-classes="nav-link-custom" left exact>
                <b-dropdown-item class="dropItem" exact>PVC >>></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>ALU >>></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>BOIS >>></b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item exact>Portes de garage</b-nav-item>
            <b-nav-item-dropdown class="navDropdown" id="nav7_ddown" text="Infos utiles" extra-toggle-classes="nav-link-custom" left exact>
                <b-dropdown-item class="dropItem" router-link to="/Contact" exact>Contact</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>Certificats</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item class="dropItem" exact>Documents</b-dropdown-item>
            </b-nav-item-dropdown>           
        </b-nav>            
    </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>
<style lang="scss" scoped>

    .nav {
        position: fixed;
        left: 2rem;
        top: 0;
        background-color: transparent;
        padding-top: 1.5rem;
        height: 4rem;
        border-bottom: 1px solid rgb(232, 123, 40);
        z-index: 1000;
    }

.dropItem {
    text-shadow: none;
}

.active {   
    color: rgb(232, 123, 40);
}

</style>
