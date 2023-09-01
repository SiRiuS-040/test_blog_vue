<template>
    <div
        v-if="isArticleLoaded"
        class="app-article"
    >
        {{ appPageData }}
        <component
            v-for="componentData in appPageData.body"
            :is="componentName[componentData.type]"
            :componentData="componentData"
            :key="componentData.id"
        />


<!--        <section class="app-article__image article-image">-->
<!--            <div class="article-image__image-wrapper">-->
<!--                <img src="" alt="Главное изображение статьи" class="article-image__img">-->
<!--            </div>-->
<!--            <div class="article-image__info">-->
<!--                <p class="article-image__date">-->
<!--                    Опубликовано 20.08.2022,-->
<!--                </p>-->
<!--                <p class="article-image__sign">-->
<!--                    Unsplash-->
<!--                </p>-->
<!--            </div>-->
<!--        </section>-->

<!--        <section class="app-article__main article-main">-->
<!--            <div class="article-main__content">-->
<!--                <h3 class="app-article__sub-title">-->
<!--                    Будущее Динамичного 3D Цифрового Искусства-->
<!--                </h3>-->
<!--                <div class="article-main__content-wrapper">-->
<!--                    <p class="article-main__text">-->
<!--                        С каждым днем технологии продолжают развиваться, открывая новые горизонты для динамичного 3D цифрового искусства,  котороенаходит применение во многих сферах.-->
<!--                    </p>-->
<!--                    <ul class="article-main__content-list">-->
<!--                        <li class="article-main__content-item">-->
<!--                            Роль в развлекательной индустрии (фильмы, игры, анимация-->
<!--                        </li>-->
<!--                        <li class="article-main__content-item">-->
<!--                            Дизайн интерьера и архитектурная визуализация-->
<!--                        </li>-->
<!--                        <li class="article-main__content-item">-->
<!--                            Применение в медицинском моделировании и образовании-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <p class="article-main__text">-->
<!--                        Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </section>-->

<!--        <section class="app-article__slider article-slider">-->
<!--            <AppComponentCarousel-->
<!--                :slides="sliderImages"-->
<!--            />-->
<!--        </section>-->

<!--        <section class="app-article__subscription-wrapper">-->
<!--            <AppComponentSubscription-->
<!--                class="app-article__subscription"-->
<!--            />-->
<!--        </section>-->
<!--        <section class="app-article__similar article-similar">-->
<!--            <h2 class="app-article__title">-->
<!--                Похожие статьи-->
<!--            </h2>-->
<!--            <AppComponentArticlePreview-->
<!--                class="article-similar__list"-->
<!--            />-->
<!--        </section>-->
<!--        <section class="app-article__form article-form">-->
<!--            <AppComponentForm-->
<!--            />-->
<!--        </section>-->
    </div>
</template>

<script>

import { useRoute } from 'vue-router'

import AppArticleIntroBlock from "./AppArticleIntroBlock.vue";
import AppArticleTextBlock from "./AppArticleTextBlock.vue";


import AppComponentSubscription from "./AppComponentSubscription.vue";
import AppComponentArticlePreview from "./AppComponentArticlePreview.vue";
import AppComponentForm from "./AppComponentForm.vue";
import AppComponentCarousel from "./AppComponentCarousel.vue";
import {ref } from "vue";
import BrewMethodsAPI from "@/components/api/resources/BrewMethods";
import { blogComponents } from "./features/blogComponents";


export default {
    name: "PageArticleItem",
    components: {
        AppArticleIntroBlock,
        AppArticleTextBlock,


        AppComponentSubscription,
        AppComponentArticlePreview,
        AppComponentForm,
        AppComponentCarousel,
    },

    data() {
        return {
        };
    },

    setup() {
        const componentName = blogComponents;
        const route = useRoute();
        const sliderImages = [];
        const articleId = route.path;
        const isArticleLoaded = ref(false);
        const appPageData = ref({});
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( articleId );
            isArticleLoaded.value = true;
        };
        loadBrewMethods()
        console.log(appPageData)

        return {
            componentName,

            sliderImages,
            articleId,
            appPageData,
            isArticleLoaded,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appArticleItem/app-article";
</style>