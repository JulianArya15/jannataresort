<template>
    <section class="jr__TestimonialSlider__container bg-vanilla">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <client-only>
                        <agile ref="testimonial-carousel" :options="myOptions" @after-change="e => currSlide = e.currentSlide">
                            <div v-for="(slide, index) in json.model.dataSlider" :key="index" class="slide">
                                <div class="slide-container">
                                    <p v-html="slide. description"></p>
                                    <small>{{ slide.title }}</small>
                                </div>
                            </div>
                        </agile>
                    </client-only>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { jsonStore } from "../json/jsonStore";

export default {
    data() {
        return {
            json: jsonStore.jsonData.components[5],
            currSlide: 0,
            myOptions: {
                autoplay: true,
                autoplaySpeed: 5000,
                infinite: true,
                navButtons: false,
                dots: true,
                timing: "ease-in-out"
            },
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    padding: 150px 0 100px;
}

.columns .column {
    max-width: 570px;
    margin: auto;
    text-align: center;
    position: relative;
}

.slide-container {
    padding-bottom: 50px;
    p {
        text-align: center;
        margin: 0;
        font-size: 20px;
    }
    
    small {
        display: block;
        font-size: 15px;
        margin-top: 30px;
    }
}

@media screen and (min-width: 769px) {
    .columns:not(.q-desktop) {
        display: flex;
    }
}
</style>

<style lang="scss">
.agile__dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    justify-content: center;
    text-align: center;
    line-height: 1;

    .agile__dot {
        height: 10px;
        width: 10px;
        margin: 0 8px;
        cursor: pointer;
        display: inline-block;

        &.agile__dot--current button{
            opacity: 1;
        }

        button {
            height: 100%;
            width: 100%;
            background: #333;
            border-radius: 50%;
            opacity: .25;
            padding: 0;
            border: none;
        }
    }
}



</style>