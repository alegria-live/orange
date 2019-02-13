<template>

	<div>
		<transition name="preloaded" mode="out-in" v-on:after-leave="afterEnter">			<!-- !imgLoaded -->
			<Preloader v-if="!imgLoaded"/>
			<div v-else>
				<HeaderImg :imgsUrls="imgsUrls"/>
				<Navigation/>
			</div>
		</transition>

		<div id="slogan">
			<transition name="slideRight" mode="out-in" >
				<img :src="url_logo_horizontal" v-if="showSlogan">
			</transition>
		</div>	
	</div>

</template>

<script>

  import Preloader from "./Preloader"
  import Navigation from "./Navigation"
  import { preloadImage } from "../helpers/helpers";
  import HeaderImg from "./HeaderImg";

	export default {
	
		name: 'MainHeader',
		data () {
			return {
			imgsUrls : {
									img1: "static/img/upvc-windows-garden1.jpg",
									img2: "static/img/upvc-windows-garden2.jpg",
									img3: "static/img/upvc-windows-garden3.jpg",
									img4: "static/img/upvc-windows-garden4.jpg"
                },
			imgLoaded: false,
			url_logo_horizontal: "static/img/logo_horizontal.svg",
			showSlogan: false
			}
		},
		components: {
			Preloader,
			Navigation,
			HeaderImg
		},
		methods: {			
			preload() {
				preloadImage(this.imgsUrls.img1)
				.then(preloadImage(this.imgsUrls.img2))
				.then(preloadImage(this.imgsUrls.img3))
				.then(preloadImage(this.imgsUrls.img4))
				.then(() => this.imgLoaded = true);
			},
			afterEnter() {
				this.showSlogan = true;
			}			
		},
		created() {
			setTimeout(()=> {this.preload()}, 3000)
		} 
	}
</script>

<style lang="scss" scoped>	

	.preloaded-enter-active,  .preloaded-leave-active, {
	   	transition: all 2s;
	}		
    .preloaded-enter {
        opacity: 0;
    }
    .preloaded-leave-to{
		opacity: 0;
	}
	
	#slogan img {
		position: absolute;
		top: 17rem;
		left:20%;		
		z-index: 1005;
		width: 60%;
		
	}	
	.slideRight-enter-active, .slideRight-leave-active {
  		transition: all 2s ease-in-out;
	}
	.slideRight-enter, .slideRight-leave-to {
		transform: translateX(-100vw);
	}

</style>
