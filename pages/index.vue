

<template>
  <div class="jr__Page__container">
    <HeroBanner />
    <TheResort />
    <TheStay />
    <DinnerWithJannata />
    <RelaxingWithJannata /> 
    <TestimonialSlider />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display&display=swap');

/** Global css */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-size: 12px !important;
  font-weight: 400;
  line-height: 1.8;
  color: #5f5c68;
}

section {
  position: relative;
  overflow: hidden;
  margin-top: 0px;
  margin-bottom: 0px;
}

/** Bg - Light */
section.bg-vanilla {
  background-color: #f0f0f5;
  
  .container::before {
    content: '';
    position: absolute;
    background-image: url("https://jannataresort.com/_nuxt/img/a109df5.png");
    background-size: contain;
    background-repeat: no-repeat;
    display: inline-block;
    top: -10vh;
    left: -25px;
    height: 100%;
    width: 250px;
  }
}

/** Bg - Dark */
section.bg-dark-blue {
  background-color: #5f5c68;

  .container::before {
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

  .container::after {
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

.container {
  width: 100;
  max-width: 1280px;
  padding: 0 5rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 12rem;
  padding-right: 12rem;
}

a.inline-link {
  padding: 20px;
  margin-left: -20px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  color: #fff;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 20px;
    width: 0;
    height: 2px;
    background: #679334;
    transition: all .5s cubic-bezier(.86,0,.07,1);
  }

  &:hover {
    &::before {
      width: 100%;
      width: calc(100% - 40px);
    }
  }
}

.title-line {
  height: 1px;
  background-color: #679334;
  margin: 35px 0 40px;
  position: relative;
  right: -125px;
  transform-origin: right;
  -webkit-transform-origin: right;
}

.block-entry .inner p {
  max-width: 300px;
  margin: 0;
  font-size: 12px;
}

.text-green {
  color: #679334 !important;
}

</style>