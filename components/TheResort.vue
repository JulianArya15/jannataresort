<template>
    <section class="jr__theResort__container bg-vanilla">
        <div class="container">
            <div class="columns">
                <div class="column is-7">
                    <figure :style="{ 'height':'650px' }">
                        <div class="box"></div>
                        <div class="img-container" :style="{ 'clip-path':'inset(0px)' }">
                            <div class="mask">
                                <img 
                                    :src="json.model.featured.aws_file_url+'/'+json.model.featured.path+'/'+json.model.featured.filename.big"
                                    :style="{ 'height': '715px', 'width': 'auto' }"   
                                    data-scroll="65" 
                                >
                            </div>
                        </div>
                    </figure>
                </div>
                <div class="column is-5 block-entry">
                    <div class="inner">
                        <h1 class="section-headline rev-item" v-html="json.model.title"></h1>
                        <div class="rev-item" v-html="json.model.description"></div>
                        <div class="rev-item">
                            <a href="#" class="text-green inline-link">{{json.model.link.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import { jsonStore } from "../json/jsonStore";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    markers: false
});

export default {
    data() {
        return {
            json: jsonStore.jsonData.components[1],
        }
    },
    mounted() {
        this.imageReveal();
        this.parallaxAnimation();
        this.TextAnimation();
    },
    methods: {
        imageReveal() {
            const masks = document.querySelectorAll(".mask");
            
            masks.forEach( mask => {
                const image = mask.querySelector("img");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mask,
                        toggleActions: "restart none none reset",
                        end: "+=500px",
                        scrub: false,
                        snap: {
                            snapTo: "labels",
                            duration: {min: 0.8, max: 3},
                            delay: 0.3,
                            inertia: false
                        }
                    }
                });

                tl.set(mask, { autoAlpha: 1 })
                    .from(mask, { duration: 1.4, xPercent: -100, ease: "power1.inOut" })
                    .from(image, { duration: 1.4, xPercent: 100, scale: 1.3, delay: -1.4, ease: "power1.inOut" })
                    .addLabel("end");
            });
        },
        parallaxAnimation() {
            const masks = document.querySelectorAll(".mask");

            masks.forEach( mask => {
                const image = mask.querySelector('img');

                gsap.to(image, 
                {
                    scrollTrigger: {
                        trigger: image,
                        toggleActions: "restart none reverse reset",
                        scrub: 1.5
                    },
                    duration: 1,
                    y: -Math.abs(parseInt(image.getAttribute('data-scroll'))),
                })
            })

            // animate .box hover top to bottom
            gsap.fromTo(".box", 
            {
                yPercent: -15,
                ease: "power2.out"
            },
            {
                scrollTrigger: {
                    trigger: ".box",
                    toggleActions: "restart none reverse reset",
                    endTrigger: ".container",
                    end: "bottom top",
                    scrub: 1.5,
                },
                yPercent: 10,
                ease: "power2.out",
                duration: 3 
            })
        },
        TextAnimation() {
            const inner = document.querySelectorAll(".inner");

            inner.forEach( item => {

                const revItem = item.querySelectorAll(".rev-item");
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: revItem,
                        toggleActions: "restart none none reset",
                    }
                })

                tl.from(revItem, { 
                    duration: 1.2, 
                    yPercent: 200, 
                    opacity: 0,  
                    ease:"power2.inOut",
                    stagger: 0.3 
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    padding: 150px 0 100px;
}

.columns {
    display: flex;
    padding: 50px 0 80px;

    .column {
        &.block-entry {
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }

        &.is-7 {
            width: calc(100% * (7/12));
        }
        &.is-5 {
            width: calc(100% * (5/12));
        }
    }
}

.inner {
    padding: 0 50px 0 100px;

    .section-headline {
        font: 400 35px/1.3 "Playfair Display",serif;
        text-transform: uppercase;
        letter-spacing: 5px;
        color: #5f5c68;
        position: relative;
        margin-top: 0;
        display: block;
        margin-bottom: 50px;
        margin-top: 100px;
    }
}

figure {
    position: relative;
    margin: 0;
    padding: 0 30px 0 20px;
    display: block;

    .img-container {
        position: relative;
        height: 100%;
        z-index: 5;
        min-height: 250px;

        .mask {
            visibility: hidden;
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        .mask img {
            position: absolute;
            max-width: 200%;
            width: 100%;
            height: 100%;
            min-width: 100%;
            min-height: 250px;
            transform-origin: left;
            object-fit: cover;
        }
    }
}

.box {
    position: absolute;
    top: 60px;
    right: -80%;
    width: 140%;
    height: 100%;
    background-color: #d8d6e2;
    z-index: 0;
}

@media screen and (max-width: 1024px) {
    section {
        padding: 75px 0;
    }
    .container {
        padding-left: 8rem;
        padding-right: 8rem;
    }

    .inner {
        padding-left: 0;
    }
}

@media screen and (min-width: 769px) {
    .columns {
        display: flex;
    }
}
</style>