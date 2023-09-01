<template>
    <div
        class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <div
                    v-if="isArticleLoaded"
                    class="app-article"
                >
                    <section class="app-article__hero article-hero">
                        <div class="article-hero__wrapper">
                            <div class="article-hero__image-wrapper">
                                <img src="" alt="Изображение фона article-hero" class="article-hero__image">
                            </div>
                            <div class="article-hero__content">
                                <h2 class="article-hero__title">
                                    {{ articleData.meta.title }}
                                </h2>
                                <div class="article-hero__statistic">
                                    <p class="article-hero__statistic-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g opacity="0.6">
                                                <mask id="mask0_5_530" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="14" height="14">
                                                    <path d="M7.99994 13.6C11.0928 13.6 13.6 11.0929 13.6 8C13.6 4.9071 11.0928 2.39996 7.99994 2.39996C4.90704 2.39996 2.3999 4.9071 2.3999 8C2.3999 11.0929 4.90704 13.6 7.99994 13.6Z" fill="white" stroke="white" stroke-width="1.12001" stroke-linejoin="round"/>
                                                    <path d="M8.0022 4.63997V8.00279L10.3763 10.3772" stroke="black" stroke-width="1.12001" stroke-linecap="round" stroke-linejoin="round"/>
                                                </mask>
                                                <g mask="url(#mask0_5_530)">
                                                    <path d="M1.28003 1.27995H14.7201V14.72H1.28003V1.27995Z" fill="#8D959C"/>
                                                </g>
                                            </g>
                                        </svg>
                                        <span>13 мин время чтения</span>
                                    </p>
                                    <p class="article-hero__statistic-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <g opacity="0.6">
                                                <path d="M7.99996 6C7.46953 6 6.96082 6.21071 6.58575 6.58579C6.21067 6.96086 5.99996 7.46957 5.99996 8C5.99996 8.53043 6.21067 9.03914 6.58575 9.41421C6.96082 9.78929 7.46953 10 7.99996 10C8.53039 10 9.0391 9.78929 9.41417 9.41421C9.78925 9.03914 9.99996 8.53043 9.99996 8C9.99996 7.46957 9.78925 6.96086 9.41417 6.58579C9.0391 6.21071 8.53039 6 7.99996 6ZM7.99996 11.3333C7.1159 11.3333 6.26806 10.9821 5.64294 10.357C5.01782 9.7319 4.66663 8.88406 4.66663 8C4.66663 7.11595 5.01782 6.2681 5.64294 5.64298C6.26806 5.01786 7.1159 4.66667 7.99996 4.66667C8.88401 4.66667 9.73186 5.01786 10.357 5.64298C10.9821 6.2681 11.3333 7.11595 11.3333 8C11.3333 8.88406 10.9821 9.7319 10.357 10.357C9.73186 10.9821 8.88401 11.3333 7.99996 11.3333ZM7.99996 3C4.66663 3 1.81996 5.07333 0.666626 8C1.81996 10.9267 4.66663 13 7.99996 13C11.3333 13 14.18 10.9267 15.3333 8C14.18 5.07333 11.3333 3 7.99996 3Z" fill="#8D959C"/>
                                            </g>
                                        </svg>
                                        <span>
                                            360 прочитали статью
                                        </span>
                                    </p>
                                </div>
                                <p class="article-hero__desc">
                                    {{ articleData.meta.description }}
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="app-article__main article-main">
                        <div class="article-main__content">
                            <h2 class="app-article__title">
                                Слияние Искусства и Технологии


                            </h2>
                            <div class="article-main__content-wrapper">
                                <p class="article-main__text">
                                    В эпоху цифровых инноваций и технологического прогресса, искусство также находит свое уникальное выражение в цифровой среде. Одной из самых захватывающих областей в этой эволюции является мир динамичного 3D цифрового искусства. Это искусство, объединяющее в себе креативность и передовые технологии, позволяет художникам воплотить свои фантазии в удивительных трехмерных произведениях.
                                </p>
                                <p class="article-main__text">
                                    Динамичное 3D цифровое искусство - это плод сотрудничества между художниками и технологами. Оно предоставляет художникам возможность создавать виртуальные миры, в которых зритель может окунуться и участвовать. Благодаря передовым программным инструментам и техникам моделирования, художники могут добиться невероятной реалистичности и детализации в своих работах.
                                </p>
                            </div>
                            <div class="article-main__quote-wrapper article-quote">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="64" viewBox="0 0 80 64" fill="none">
                                    <g opacity="0.8" clip-path="url(#clip0_13_591)">
                                        <path d="M17.58 27C21.0412 27 24.4246 28.0264 27.3025 29.9493C30.1803 31.8722 32.4234 34.6053 33.7479 37.803C35.0724 41.0007 35.419 44.5194 34.7437 47.9141C34.0685 51.3088 32.4018 54.4269 29.9544 56.8744C27.507 59.3218 24.3887 60.9885 20.9941 61.6637C17.5994 62.339 14.0807 61.9924 10.883 60.6679C7.68533 59.3434 4.95221 57.1003 3.02928 54.2225C1.10636 51.3446 0.08 47.9612 0.08 44.5L0 42C0 32.7174 3.68749 23.815 10.2513 17.2513C16.815 10.6875 25.7174 7 35 7V17C31.7155 16.9912 28.4619 17.6335 25.4272 18.89C22.3925 20.1464 19.637 21.992 17.32 24.32C16.4195 25.2188 15.5887 26.185 14.835 27.21C15.73 27.07 16.645 26.995 17.575 26.995L17.58 27ZM62.58 27C66.0412 27 69.4246 28.0264 72.3025 29.9493C75.1803 31.8722 77.4234 34.6053 78.7479 37.803C80.0724 41.0007 80.419 44.5194 79.7437 47.9141C79.0685 51.3088 77.4018 54.4269 74.9544 56.8744C72.507 59.3218 69.3887 60.9885 65.9941 61.6637C62.5994 62.339 59.0807 61.9924 55.883 60.6679C52.6853 59.3434 49.9522 57.1003 48.0293 54.2225C46.1064 51.3446 45.08 47.9612 45.08 44.5L45 42C45 32.7174 48.6875 23.815 55.2513 17.2513C61.815 10.6875 70.7174 7 80 7V17C76.7155 16.9912 73.4619 17.6335 70.4272 18.89C67.3925 20.1464 64.637 21.992 62.32 24.32C61.4195 25.2188 60.5887 26.185 59.835 27.21C60.73 27.07 61.645 27 62.58 27Z" fill="#8D959C"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13_591">
                                            <rect width="80" height="64" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                <div class="article-quote__content">
                                    <p class="article-quote__text">
                                        «Медиахудожник работает с современным искусством. Слово „медиа“ появляется, потому что он работает в новых формах. Медиа как пространство, в котором может существовать произведение. Например, холст, покрытый красками, или превращённый в скульптуру камень — это старые медиа. Компьютер и игры на нём — новые медиа.
                                    </p>
                                    <p class="article-quote__sign-name">
                                        Ярослав Кравцов,
                                    </p>
                                    <p class="article-quote__sign-info">
                                        основатель студии «Мастерская 15»
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="app-article__image article-image">
                        <div class="article-image__image-wrapper">
                            <img src="" alt="Главное изображение статьи" class="article-image__img">
                        </div>
                        <div class="article-image__info">
                            <p class="article-image__date">
                                Опубликовано 20.08.2022,
                            </p>
                            <p class="article-image__sign">
                                Unsplash
                            </p>
                        </div>
                    </section>

                    <section class="app-article__main article-main">
                        <div class="article-main__content">
                            <h3 class="app-article__sub-title">
                                Будущее Динамичного 3D Цифрового Искусства
                            </h3>
                            <div class="article-main__content-wrapper">
                                <p class="article-main__text">
                                    С каждым днем технологии продолжают развиваться, открывая новые горизонты для динамичного 3D цифрового искусства,  котороенаходит применение во многих сферах.
                                </p>
                                <ul class="article-main__content-list">
                                    <li class="article-main__content-item">
                                        Роль в развлекательной индустрии (фильмы, игры, анимация
                                    </li>
                                    <li class="article-main__content-item">
                                        Дизайн интерьера и архитектурная визуализация
                                    </li>
                                    <li class="article-main__content-item">
                                        Применение в медицинском моделировании и образовании
                                    </li>
                                </ul>
                                <p class="article-main__text">
                                    Виртуальная реальность и дополненная реальность вносят новые возможности и глубину в визуальное искусство. Художники будущего смогут создавать еще более впечатляющие и захватывающие произведения, уводя нас в миры, которые ранее могли существовать только в их воображении.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section class="app-article__slider article-slider">
                        <AppComponentCarousel
                            :slides="sliderImages"
                        />
                    </section>

                    <section class="app-article__subscription-wrapper">
                        <AppComponentSubscription
                            class="app-article__subscription"
                        />
                    </section>
                    <section class="app-article__similar article-similar">
                        <h2 class="app-article__title">
                            Похожие статьи
                        </h2>
                        <AppComponentArticlePreview
                            class="article-similar__list"
                        />
                    </section>
                    <section class="app-article__form article-form">
                        <AppComponentForm
                        />
                    </section>
                </div>
            </template>
        </AppMain>
        <AppFooter />
    </div>
</template>

<script>

import { useRoute } from 'vue-router'

import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import AppComponentSubscription from "./AppComponentSubscription.vue";
import AppComponentArticlePreview from "./AppComponentArticlePreview.vue";
import AppComponentForm from "./AppComponentForm.vue";
import AppComponentCarousel from "./AppComponentCarousel.vue";
import {ref} from "vue";
import BrewMethodsAPI from "@/components/api/resources/BrewMethods";

export default {
    name: "PageArticleItem",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppComponentSubscription,
        AppComponentArticlePreview,
        AppComponentForm,
        AppComponentCarousel,
    },

    data() {
        return {
            // addItemToCart,
        };
    },

    setup() {
        const route = useRoute();

        const sliderImages = [];
        const articleId = route.path;
        const isArticleLoaded = ref(false);

        const articleData = ref({});
        const loadBrewMethods = async() => {
            articleData.value = await BrewMethodsAPI.index( articleId );
            isArticleLoaded.value = true;
        };

        loadBrewMethods()

        console.log(articleData)

        return {
            sliderImages,
            articleId,

            articleData,
            loadBrewMethods,
            // appData,
            // catalogData,
            // dataLoaded,
            isArticleLoaded,
            // renderArticle
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appArticleItem/app-article";
</style>