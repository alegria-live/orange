<template>
    <div>
		<div class="slide_container">
			<div class="slideImgs">
				<ul id="imgList" v-images-loaded="loaded">
					<li v-for="(value, key) in slideUrls" :key="key" class="imgLi">
						<a :href="'static/img/'+target+key" class="test-popup-link">
							<img :src="'static/img/'+target+'min/'+key" :alt="value" @click="magnificPopup(key)">
						</a>
					</li>                    
				</ul>
			</div>
		</div>
		<div class="arrow_container">
			<img src="static/img/arrow_left.svg" id="slideLeft">
			<img src="static/img/arrow_right.svg" id="slideRight">		
		</div>	
	</div>
</template>

<script>

import JQuery from 'jquery';
import magnificPopup from "../../static/js/libs/jquery.magnific-popup.js";
import imagesLoaded from 'vue-images-loaded';
import { preloadImage } from "../helpers/helpers";
let $ = JQuery;

export default {

	name: 'SlideBar',

	directives: {
        imagesLoaded
	},
	
	data() {
		return {
			magnificPopup:Object
		}
	},
        
    props: {
		slideUrls: Object,
		target: String
	},

	methods: {

		loaded(instance) {
        
    		let right_arrow = $('#slideRight'),
				left_arrow = $('#slideLeft'),
            	i = 0,
				timeOut = 0,
				imgsLi = $('.imgLi'),
				imgList = document.querySelector('#imgList'),
				imgsListLength = 0,
				slideCont = $('.slide_container');

			right_arrow.css('opacity', 1);
			left_arrow.css('opacity', 0.1);		
			
			
			$(imgsLi).each((i, element) => {
				imgsListLength += $(element).outerWidth()
			});
		
			let widthDiff = slideCont.outerWidth() - imgsListLength;
			

			right_arrow.on('mousedown touchstart', function(e) {				
				
				$(this).addClass('active');
				left_arrow.css('opacity', 1);

				timeOut = setInterval(function(){

				if(i <= widthDiff && i!==0) {
					right_arrow.css('opacity', 0.1);
					return;
					}

				i-=4;

				$('.slideImgs').css("margin-left" , i);}, 20);
			})
			.bind('mouseup mouseleave touchend', function() {
				$(this).removeClass('active');
				clearInterval(timeOut);
			});

			left_arrow.on('mousedown touchstart', function(e) {
				
				$(this).addClass('active');
				right_arrow.css('opacity', 1);
				timeOut = setInterval(function(){

				if(i >= 0) {
					left_arrow.css('opacity', 0.1);
					return;}
				i+=4;
				$('.slideImgs').css("margin-left" , i);}, 10);
			})
			.bind('mouseup mouseleave touchend', function() {
				$(this).removeClass('active');
				clearInterval(timeOut);
			});
		}
	},
    created() {

		$(document).ready(function() {

			let imgList = document.querySelector('#imgList');

			$(imgList).magnificPopup({
				delegate: 'li a',
				type: 'image',
				gallery: {
					enabled: true,
					navigateByImgClick: true,
					preload: [0,1]
				}
			});					
		})
    }
}

</script>

<style scoped>
    .slide_container {
        width: 100%;
        overflow: hidden;
	}
    .slideImgs {
        
        width: 3000px;
    }

    img {
        height: 190px;
    }

	img:hover {
		filter: grayscale(100%);		
	}
	ul {
		padding: 0;
	}
    li {
        list-style: none;
        float: left;
		border-right: 2px solid white;
    }

	.arrow_container {
		text-align: center;
		padding-top: 30px;
	}
	#slideLeft, #slideRight {
		height: 60px;
		margin:20px;
		cursor: pointer;
		opacity: 0;
	}
	#slideLeft:hover, #slideRight:hover {
		opacity: 0.5;
	}
</style>
