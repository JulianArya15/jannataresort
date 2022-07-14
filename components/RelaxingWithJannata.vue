<template>
    <section class="jr__dinnerWithJannata__container">
        <div class="bg-image" :style="{backgroundImage: 'url('+json.model.featured.aws_file_url+'/'+json.model.featured.path+'/'+json.model.featured.filename.big+')'}"></div>
        <div class="container">
            <div class="columns">
                <div class="column block-entry">
                    <div class="inner">
                        <h1 class="section-headline rev-item" v-html="json.model.title"></h1>
                        <div class="title-line"></div>
                        <p class="rev-item" v-html="json.model.description"></p>
                        <br />
                        <div class="rev-item">
                            <a href="#" class="inline-link">{{json.model.link.title}}</a>
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
            json: jsonStore.jsonData.components[4],
        }
    },
}
</script>

<style lang="scss" scoped>
section {
    padding: 0;
    min-height: 120vh;
    background-color: #000;
    position: relative;
    overflow: hidden;
    
}
.container {
    width: 100%;
    max-width: 1280px;
    padding: 0 5rem;
    margin: 0 auto;
    padding-left: 12rem;
    padding-right: 12rem;
    box-sizing: border-box;
}

.bg-image {
    object-fit: cover;
    width: 100%;
    height: 130%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: .5;
    background: no-repeat 50%;
    background-size: cover;
}

.columns {
    position: relative;
    padding-bottom: 130px;
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
        color: #fff;
        p {
            max-width: 300px;
            margin: 0;
            font-size: 12px;
        }
    }
}
    

.section-headline {
    font: 400 35px/1.3 "Playfair Display",serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: #fff;
    position: relative;
    margin-top: 0;
    display: block;
    margin-bottom: 50px;
    margin-top: 100px;
}

</style>