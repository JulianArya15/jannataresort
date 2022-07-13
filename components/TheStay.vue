<template>
    <section class="jr__TheStay__container">
        <div class="container">
            <div class="columns">
                <div class="column is-6"></div>
                <div class="column is-6">
                    <div class="inner">
                        <h1 class="section-headline rev-item" v-html="json.model.title"></h1>
                        <div class="rev-item" v-html="json.model.description"></div>
                        <div class="rev-item"></div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="accomodations column is-4" v-for="(accomodation, index) in json.model.dataSlider" :key="index">
                    <a :href="accomodation.link.url">
                        <h4 v-html="accomodation.link.title"></h4>
                        <div class="accomodation-bg" :style="{backgroundImage: 'url('+accomodation.featured.aws_file_url+'/'+accomodation.featured.path+'/'+accomodation.featured.filename.big+')'}"></div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import { jsonStore } from "../json/jsonStore";

export default {
    data() {
        return {
            json: jsonStore.jsonData.components[2],
        }
    }
}
</script>

<style lang="scss" scoped>
section {
    padding: 150px 0;
    margin-top: 0px;
    margin-bottom: 0px;
    position: relative;
    overflow: hidden;
    background-color: #5f5c68;
}

.container {
    width: 100%;
    max-width: 1280px;
    padding: 0 5rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding-left: 12rem;
    padding-right: 12rem;

    &::before {
        content: '';
        position: absolute;
        background-image: url("https://jannataresort.com/_nuxt/img/a989adf.png");
        background-size: contain;
        background-repeat: no-repeat;
        display: inline-block;
        top: -1%;
        left: 20%;
        height: 100%;
        width: 300px;
    }

    &::after {
        content: "";
        position: absolute;
        background-image: url("https://jannataresort.com/_nuxt/img/33d233c.png");
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        opacity: .4;
        bottom: -20%;
        right: 25%;
        height: 500px;
        width: 300px;
    }
}

.columns {
    display: flex;

    .column {
        &.is-6 {
            width: 50%;
        }
        &.is-4 {
            width: calc(100% * (1/3));
        }
    }
}

.inner {
    .section-headline {
        font: 400 35px/1.3 "Playfair Display",serif;
        text-transform: uppercase;
        letter-spacing: 5px;
        position: relative;
        margin-top: 0;
        display: block;
        margin-bottom: 50px;
    }

    .rev-item {
        opacity: 1;
        transform: matrix(1, 0, 0, 1, 0, 0);
        color: #f0f0f5;
    }
}

.accomodations {
    float: left;
    height: 450px;
    position: relative;
}

.accomodations a {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    h4 {
        color: #fff;
        position: absolute;
        left: 20%;
        right: 20%;
        z-index: 2;
        bottom: 5%;
        font-size: 11px;
        line-height: 30px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 400;
        margin: 0 0 35px;
        letter-spacing: 2px;

        &::before {
            content: "";
            display: block;
            height: 1px;
            width: 100px;
            background-color: hsla(0,0%,100%,.8);
            margin: 10px 0 0;
            position: relative;
            left: 0;
        }
    }
}
.accomodation-bg {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: transparent;
    overflow: hidden;
    background-size: 95%;
    background-position: 50%;
    background-repeat: no-repeat;
    margin: auto;
    background-size: auto 100%;
    transition: all .4s ease;
}

@media screen and (min-width: 769px) {
    .columns:not(.q-desktop) {
        display: flex;
    }
}

</style>

<style lang="scss">
p {
    margin: 0;
}
</style>