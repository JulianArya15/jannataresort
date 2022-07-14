

<template>
  <div class="jr__Page__container">
    <HeroBanner />
    <TheResort />
    <TheStay />
    <DinnerWithJannata />
  </div>
</template>

<script>
import DinnerWithJannata from '../components/DinnerWithJannata.vue'
export default {
  components: { DinnerWithJannata },
  name: 'IndexPage',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display&display=swap');
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
a.inline-link {
  padding: 20px;
  margin-left: -20px;
  position: relative;
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;

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
</style>