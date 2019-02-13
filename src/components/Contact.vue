<template>
<div>
    <NavBack/>
    <Navigation/>
    <div class="container">
        <header class="row">
            <div class="col">
                <h5>Contacter Orange Fenêtre, vente et pose de menuiseries extérieures à Wasquehal</h5>
            </div>
        </header>
    </div>    
    <div class="container">
        <div class="row">
            <div class="col">
                <form id="sendForm">               
                    <b-form @submit.prevent="fnSubmit" v-if="true" >
                        <b-form-group id="InputGroup1"
                                        label-for="InputEmail">
                            <b-form-input id="InputEmail"
                                        type="email"
                                        v-model="form.email"
                                        required
                                        placeholder="Votre email *">
                            </b-form-input>
                        </b-form-group>
            
                        <b-form-group id="InputGroup2"                                       
                                        label-for="InputName">
                            <b-form-input id="InputName"
                                        type="text"
                                        v-model="form.name"
                                        required
                                        placeholder="Votre nom *">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="InputGroup3"                                        
                                        label-for="InputTel">
                            <b-form-input id="InputTel"
                                        type="text"
                                        v-model="form.tel"                                        
                                        placeholder="Votre tél.">
                            </b-form-input>
                        </b-form-group>
                        <b-form-group id="InputGroup4"                                        
                                        label-for="InputAdresse">
                            <b-form-input id="InputAdresse"
                                        type="text"
                                        v-model="form.adress"                                        
                                        placeholder="Adresse">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="InputGroup5"                                        
                                        label-for="InputVille">
                            <b-form-input id="InputVille"
                                        type="text"
                                        v-model="form.ville"                                        
                                        placeholder="Ville">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="InputGroup6"                                        
                                        label-for="InputPostal">
                            <b-form-input id="InputPostal"
                                        type="text"
                                        v-model="form.postal"                                        
                                        placeholder="Code postal">
                            </b-form-input>
                        </b-form-group>
            
                        <b-form-group id="InputGroup7"
                                        label="Votre message *:"
                                        label-for="InputText">
                            <b-form-textarea id="InputText"
                                        rows="5"
                                        required
                                        v-model="form.text">
                            </b-form-textarea>
                        </b-form-group>
                        <p>* champs obligatoires</p>
                        <b-button type="submit" variant="primary">Envoyer</b-button>
                    </b-form>                
                </form>
            </div>
            <div class="col iframeCol">
               
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2527.786756951679!2d3.143350232801348!3d50.68678311132524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32905056fab1d%3A0x37a925c85188b23!2s2+Rue+Louis+Lejeune%2C+59290+Wasquehal%2C+France!5e0!3m2!1spl!2spl!4v1540216326105" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
                    </iframe>
                
                <p>Téléphone: 03 20 82 71 86<br>
                e-mail: orange.fenetre@hotmail.fr<br>
                Nos horaires: Du lundi au vendredi de 9h à 12h et de 14h à 18h.
                </p>
            </div>
        </div>
    </div>
    <Foot/>
</div>
</template>

<script>
import Navigation from "./Navigation";
import NavBack from "./NavBack";
import Foot from "./Foot";
import axios from "axios";
export default {
    name: 'FenetrePvc',
    components: {
        Navigation,
        NavBack,
        Foot
    },
    data() {
        return {
            form : {
                email:'',
                name:'',
                text: '',
                tel: '',
                adresse: '',
                ville: '',
                postal: ''
            }
        }
    },
    methods: {
        fnSubmit(e) {
            let self=this.form;
            axios.post("http://localhost:3000/sendForm", {data: this.form})
            .then(res => {Object.keys(self).forEach((key, i) => {
                self[key] = "";
            });
                alert("Wiadomość wysłana")})
        }
    }
}
</script>

<style scoped>   

    header {
        margin: 9rem 2rem 2rem 0;
    }
    h5 {
        font-weight: bold;
    }
    .iframeCol {
        text-align: center;
    }
    p {
        margin-top: 10px;
        line-height: 1.7rem;
    }

</style>
