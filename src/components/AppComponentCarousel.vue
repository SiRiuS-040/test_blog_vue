<template>
    <carousel
        v-bind="settings"
        class="app-carousel"
    >
        <slide
            v-for="slide in slides"
            :key="slide"
        >
            <img
                src=""
                alt="картинка слайдера"
                class="app-carousel__image"
                width="300"
                height="200"
            >
        </slide>
        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
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

    setup() {
        const sliderImages = [
            {
                id: 0,
                path: 'bfg2000'
            },
            {
                id: 1,
                path: 'bfg2000'
            },
            {
                id: 2,
                path: 'bfg2000'
            }
        ]

        return {
            sliderImages,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appComponentCarousel/app-carousel";
</style>