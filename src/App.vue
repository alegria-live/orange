<template>
  <div id="app" v-cloak>
    <transition name="slide" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
  }
</script>

<style>

	@font-face {
		font-family: Gothic;
		src: url("/static/fonts/Gothic.ttf") format('truetype');
	}	
	body, h1, h2, h3, h4, h5, h6, p, span {
		font-family: Gothic !important;
	}

	p {
		line-height: 1.7rem;
	}
	[v-cloak] {
		display:none;
		}
	.slide-enter-active, .slide-leave-active {
    	transition: all 2s;
    }
	.slide-enter {
  		opacity: 0;
  	}
	.slide-leave-to {
    	opacity: 0;
    }

</style>