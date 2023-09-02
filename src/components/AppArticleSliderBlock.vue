<template>
    <section class="article-slider-block">
        <AppComponentCarousel
            :slides="componentData.data"
        />
    </section>
</template>

<script>

import AppComponentCarousel from "@/components/AppComponentCarousel";

export default {
    name: "AppArticleSliderBlock",
    components: {
        AppComponentCarousel
    },
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appArticleSliderBlock/article-slider-block";
</style>