
<template>
    <section class="jr__Hero__container">
        <div class="jr__Hero__sliderBlock">
            <div class="jr__Hero__logoImage">
                <a href="http://">
                    <img src="https://jannataresort.com/_nuxt/img/1336c61.png">
                </a>
            </div>
            <client-only>
                <agile ref="carousel" :options="myOptions" @after-change="e => currSlide = e.currentSlide">
                    <div class="slide" v-for="(slide, index) in json.model.dataSlider" :key="index">
                        <div class="image-container">
                            <div :id="setNewCurrent(index)" class="image-wrapper">
                                <img class="jr__Hero__image" :src="slide.featured.aws_file_url+'/'+slide.featured.path+'/'+slide.featured.filename.raw">
                            </div>
                        </div>
                        <div id="text" class="jr__Hero__innerText">
                            <h1 v-html="slide.title"></h1>
                            <p>{{slide.description}}</p>
                            <div class="bounding-box">
                                <a>Read More</a>
                            </div>
                        </div>
                        <div class="grad-bottom"></div>
                    </div>
                    
                </agile>
                <div class="jr__Hero__navButtons">    
                    <button @click="$refs.carousel.goToPrev()"><font-awesome-icon :icon="['fa', 'chevron-left']"  /></button>
                    <button @click="$refs.carousel.goToNext()"><font-awesome-icon :icon="['fa', 'chevron-right']"  /></button>
                </div>
            </client-only>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { jsonStore } from "../json/jsonStore";

export default {
    components: {},
    data() {
        return {
            json: jsonStore.jsonData.components[0],
            currSlide: 0,
            myOptions: {
                navButtons: false,
                dots: false,
            },
            coordX: 0,
            coordY: 0,

        }
    },
    computed: {
        watchCoordXCoordY() {
            return `${this.coordX}|${this.coordY}`;
        }
    },
    watch: {
        currSlide(newVal, oldVal) {
            gsap.fromTo("#text", {opacity: 0, y: 0}, {duration: 1, opacity: 1, y: -40, ease: 'ease-out'} )
        },
        watchCoordXCoordY(newVal, oldVal) {
            // split coordinate to get X & Y coord
            const [newCoordX, newCoordY] = newVal.split('|');
            
            const tl = gsap.timeline();

            
            if(Math.sign(newCoordX) === 1 && Math.sign(newCoordY) === 1) {
                tl.to("#current", { duration:4, x:'25px', y:'15px', scaleX: 1.1, scaleY: 1.1, opacity: 1, ease: "power2.out" });
                tl.set("#current", { rotation: 0, skewX: 0, scaleX: 1.1, scaleY: 1.1, x: 25, y: 15});
            } else if (Math.sign(newCoordX) === -1 && Math.sign(newCoordY) === 1) {
                tl.to("#current", { duration:4, x:'-25px', y:'15px', scaleX: 1.1, scaleY: 1.1, opacity: 1, ease: "power2.out" });
                tl.set("#current", { rotation: 0, skewX: 0, scaleX: 1.1, scaleY: 1.1, x: -25, y: 15});
            } else if (Math.sign(newCoordX) === -1 && Math.sign(newCoordY) === -1) {
                tl.to("#current", { duration:4, x:'-25px', y:'-15px', scaleX: 1.1, scaleY: 1.1, opacity: 1, ease: "power2.out" });
                tl.set("#current", { rotation: 0, skewX: 0, scaleX: 1.1, scaleY: 1.1, x: -25, y: -15});
            } else if (Math.sign(newCoordX) === 1 && Math.sign(newCoordY) === -1) {
                tl.to("#current", { duration:4, x:'25px', y:'-15px', scaleX: 1.1, scaleY: 1.1, opacity: 1, ease: "power2.out" });
                tl.set("#current", { rotation: 0, skewX: 0, scaleX: 1.1, scaleY: 1.1, x: 25, y: -15});
            }
        },
    },
    mounted() {        
        window.addEventListener("mousemove", e => {    
            this.handleMove(e);
        });
    },
    methods: {
        setNewCurrent(id) {
            return this.currSlide === id ? 'current' : null;
        },
        handleMove(e) {
            // get mouse position and coordinate @ zero
            const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            const mouse = { x: pos.x, y: pos.y };

            const speed = 1;

            // get mouse (x, y) 
            mouse.x = e.x;
            mouse.y = e.y;

            // adjust speed for higher refresh monitors
            const dt = 1 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 

            // get position where (0,0) @ middle point
            this.coordX = (mouse.x - pos.x) * dt * -1;
            this.coordY = (mouse.y - pos.y) * dt *-1;
        }
    },

}
</script>

<style lang="scss" scoped>
section {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

.slide, .agile, .image-wrapper, .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: 50%;
    z-index: 1;
    background-size: cover;
}


.jr__Hero__logoImage {
    position: absolute;
    left: 50%;
    top: 80px;
    transform: translateX(-50%);
    z-index: 10;

    a {
        display: inline-block;
        max-width: 120px;

        img {
            max-width: 100%;
            vertical-align: middle;
        }
    }   
}

.jr__Hero__sliderBlock {
    height: 100%;
    width: 100%;
}

.slide {
    overflow: hidden;
    position: relative;
}

.slide .image-wrapper img {
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    height: 100%;
    opacity: .8;
    visibility: inherit;
    opacity: 1;
}

.slide .jr__Hero__innerText {
    position: absolute;
    width: 70%;
    max-width: 480px;
    text-align: center;
    left: 50%;
    bottom: 15%;
    transform: translateX(-50%);
    color: white;
    z-index: 1;

    h1 {
        font: 400 43px/1.3 'Playfair Display',serif;
        text-transform: uppercase;
        margin-top: 0;
        margin-bottom: 0;
        letter-spacing: 5px;
    }

    p {
        font: 400 14px/1.8 'Open Sans',sans-serif;
        max-width: 400px;
        letter-spacing: 1px;
        margin: 30px auto 0;
    }

    .bounding-box {
        padding: 50px 20px 20px;
        display: inline-block;

        a {
            display: inline-block;
            border: 1px solid #fff;
            padding: 10px 30px;
            color: #fff;
            font: 400 11px/1.3 "Open Sans",sans-serif;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all .2s ease;

            &:hover {
                cursor: pointer;
                background: #fff;
                color: #000;
            }
        }
    }
}

.jr__Hero__navButtons {
    position: absolute;
    bottom: 10%;
    right: 10%;
    z-index: 1;

    button {
        font-weight: 200;
        font-size: 2rem;
        background: transparent;
        color: white;
        border: none;
        padding: 15px 8px; 
        margin: 0 10px;
    }
}

</style>

<style lang="scss">
    .agile,
    .agile .agile__list,
    .agile .agile__list .agile__track {
        height: 100%;
        width: 100%;
    }

    .slide .grad-bottom {
        position: absolute;
        z-index: 1;
        width: 100%;
        bottom: 0;
        height: 40%;
        pointer-events: none;
        background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.65));
        opacity: .7;
    }
</style>