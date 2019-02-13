<template>
<div v-images-loaded="loaded">
    <transition  name="fadeImg" >
        
		<img class="img-fluid" :src="imgsUrls.img1" v-if="imgs.img1" key="img1" >
        <img class="img-fluid" :src="imgsUrls.img2" v-if="imgs.img2" key="img2">
        <img class="img-fluid" :src="imgsUrls.img3" v-if="imgs.img3" key="img3">
        <img class="img-fluid" :src="imgsUrls.img4" v-if="imgs.img4" key="img4">
        
    </transition>
</div>
</template>

<script>
    import imagesLoaded from 'vue-images-loaded';
    export default {
        name: "HeaderImg",
        directives: {
            imagesLoaded
        },
        data () {
                return {               
                    imgs : {
                        img1 : true,
                        img2 : false,
                        img3 : false,
                        img4 : false
                    }                    
                }
            },
            props : {
                imgsUrls: Object
            },
            methods: {
                imgRotate() {
                    let i = 0;
                    setInterval(()=>{
                        i++;
                        if(i<4) {
                            for(let key in this.imgs) {
                                this.imgs[key] = false;
                            };                             				
                        this.imgs[`img${i}`] = true;
                    }
                        else {
                            for(let key in this.imgs) {
                                this.imgs[key] = false;
                            };                             				
                            this.imgs[`img${i}`] = true;
                            i = 0;
                        }                        
                    }, 2000)
                }
            },            
            created() {{this.imgRotate()}
        }
    }
</script>

<style scoped>
    .fadeImg-enter-active, .fadeImg-leave-active {
	   	transition: all 1s ease-in;
	}		
    .fadeImg-enter {
        opacity: 0;
    }
    .fadeImg-leave-to {
		opacity: 0;
	}
    img {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>


