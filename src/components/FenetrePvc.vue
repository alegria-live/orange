<template>
<div >
    <NavBack/>
    <Navigation/>

	<!-- <div class="staticImg_1">
		<img src="static/img/backParal_1.jpg" alt="">
	</div> -->
	<div class="container">

		<header class="row">
			<div class="col border_left">
				<h1>Les fenêtres</h1>
    			<p>Les fenêtres sont l'une des principales sources de déperdition de chaleur. 
					Leur remplacement limite fortement le gaspillage d'énergie et favorise le confort de l'habitat.
					Elles sont aussi une véritable barrière contre l'intrusion et le bruit.
				</p>
			</div>
			<div class="col">
				<HeaderImg class="shadow" :imgsUrls="imgsUrls"/>
			</div>
		</header>

		<article class="row chassis">			
			<div class="col">
				<img src="static/img/fenetresPVC-1.jpg" alt="" class="">
			</div>
			<div class="col">
				<h2>Châssis PVC</h2>
    			<p>Nos fenêtres en PVC offrent une forte résistance ainsi qu'une grande performance d'isolation. 
					Ce qui fait de la fenêtre en PVC un produit ayant le meilleur rapport qualité prix.
				</p><br>
				<p>
					Caractéristiques techniques:
				</p>
				<ul>
					<li>Stabilité du matériau : Insensible à la pollution extérieur</li>
					<li>Disponible en 11 couleurs</li>
					<li>Fabriqué en base de profil Gealan S8000 (renforcé par de l'acier galvanisé d'une épaisseur de 1.5mm)</li>
					<li>6 chambres d'isolation thermiques</li>
					<li>Matériau 100% recyclable</li>
					<li>Coefficient thermique Uw compris entre 1.0 et 1.4</li>
				</ul>
			</div>
		</article>

		<article class="row">
			<div class="col">
				<section>
					<h2>Fenêtres Châssis PVC</h2>			
				</section>
			</div>
		</article>

		<aside class="row slideBar">			
			<div class="col">
				<SlideBar :slideUrls="slideUrls" :target="target"></SlideBar>				
			</div>			
		</aside>

		<article class="row">
			<div class="col">
				<section>
					<h4>
						Il existe de multiples châssis disponibles dont voici quelques exemples :
					</h4>
				</section>
			</div>
		</article>
		<aside class="row exapmles">
			<div class="col">
				<img src="static/img/fenetres-1.png" alt="">				
			</div>
			<div class="col">
				<img src="static/img/fenetres-2.png" alt="">				
			</div>
		</aside>		
	</div>
    <Foot/>
</div>
</template>

<script>

import Navigation from "./Navigation";
import NavBack from "./NavBack";
import Foot from "./Foot";
import HeaderImg from "./HeaderImg";
import SlideBar from "./SlideBar";
import slideUrls from '../../static/img/fenetrePvc/slideUrls.json';

export default {
    name: 'FenetrePvc',
    components: {
        Navigation,
		NavBack,
		HeaderImg,
		SlideBar,
        Foot
	},
	data() {
		return {			
			imgsUrls : {
                img1: "static/img/upvc-windows-garden4.jpg",
            	img2: "static/img/upvc-windows-garden3.jpg",
                img3: "static/img/upvc-windows-garden2.jpg",
                img4: "static/img/upvc-windows-garden1.jpg"
			},
			slideUrls : slideUrls,

			target : "fenetrePvc/"
		}
	}
}
</script>

<style scoped>

    header {
		margin: 15rem 2rem 2rem 0;
	}
	h1 {
		font-size: 4rem;
		padding-top: 1rem;		
	}
	h1, h2 {
		color: rgb(232, 123, 40);
	}
	p {
		font-size: 1rem;
		padding-right: 2rem;
	}
	.col {
		color:rgb(94, 92, 92);
	}
	.border_left {
		border-left: 1px solid rgb(232, 123, 40);
	}
	
	.shadow {
		box-shadow: 2px 2px 6px grey;
		border: 1px solid whitesmoke;
	}
	article {
		margin: 9rem 0 2rem 0;
	}
	.chassis img {
		padding-top: 1rem;
		width: 60%;
	}
	ul {
		list-style: square;
	}
	/* li{
    list-style-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAE0lEQVQIW2NkYGD4D8RwwEi6AACaVAQBULo4sgAAAABJRU5ErkJggg==");
	} */

	.slideBar {
		padding: 2rem 0;
		border-top: 1px solid rgba(232, 123, 40, 0.4);
		border-bottom: 1px solid rgba(232, 123, 40, 0.5);		
	}
	
</style>
