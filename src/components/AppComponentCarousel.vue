<template lang="pug">
carousel(v-bind="settings" class="app-carousel")
    slide(v-for="slide in slides" :key="slide")
        img(:src="slide" alt="картинка слайдера" class="app-carousel__image" width="300" height="200")
    template(#addons)
        navigation
        pagination
</template>

<script>

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
    name: "AppComponentCarousel",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },

    props: {
        slides: {
            type: Object,
        }
    },

    data() {
        return {
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
                transition: 300,
                wrapAround: true,
            },
        };
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/appComponentCarousel/app-carousel";
</style>