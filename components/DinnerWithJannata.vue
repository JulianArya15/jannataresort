<template>
    <section class="jr__dinnerWithJannata__container bg-vanilla">
        <div class="container">
            <div class="columns">
                <div class="column block-picture">
                    <figure class="picture" :style="{ 'height': '583px' }">
                        <div class="img-container" :style="{ 'clip-path':'inset(0px)' }">
                            <div class="mask">
                                <img 
                                    :src="json.model.featured.aws_file_url+'/'+json.model.featured.path+'/'+json.model.featured.filename.big"
                                    :style="{ 'height': '641.3px', 'width': 'auto' }"
                                >
                            </div>
                        </div>
                    </figure>
                </div>
                <div class="column block-entry bg-white">
                    <div class="inner">
                        <h2 class="title">
                            <span class="section-headline rev-item" v-html="json.model.title_one"></span>
                            <span class="section-headline rev-item text-green" v-html="json.model.title_two"></span>
                        </h2>
                        <div class="title-line"></div>
                        <div v-html="json.model.description"></div>
                        <div class="rev-item">
                            <a href="#" class="inline-link text-green">{{json.model.link.title}}</a>
                        </div>
                    </div>
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
            json: jsonStore.jsonData.components[3],
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    padding: 150px 0 100px;
}

.bg-white {
    background-color: #fff;
}

.columns {
    position: relative;
    padding-bottom: 130px;

    .column.block-picture {
        width: 95%;
    }
}

.title {
    overflow: hidden;
    span {
        font: 400 35px/1 "Playfair Display",serif;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin: 0;
        position: relative;
        display: block;
        line-height: 56px;
    }
}

.block-entry {
    position: absolute;
    margin-top: 80px;
    top: 0;
    width: 54%;
    flex: none;
    z-index: 25;
    right: 0;

    .inner {
        padding: 50px 60px 70px;
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

@media screen and (min-width: 769px) {
    .columns:not(.q-desktop) {
        display: flex;
    }
}
</style>