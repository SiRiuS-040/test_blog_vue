<template>
    <li class="article-preview-item">
        <img src="" class="article-preview-item__preview-image" alt="Изображение превью заметки" height="320">
        <h2 class="article-preview-item__title">
            Мир динамичного 3D цифрового искусства
        </h2>
        <router-link to="/article-1" class="article-preview-item__link">
            Читать
        </router-link>
    </li>
</template>

<script>
// import AppHeader from "./AppHeader.vue";
// import AppMain from "./AppMain.vue";
// import AppFooter from "./AppFooter.vue";

export default {
    name: "AppComponentArticlePreviewItem",
    components: {
        // AppHeader,
        // AppMain,
        // AppFooter,
    },

}
</script>

<style lang="scss">
    @import "../components/styles/appComponentArticlePreviewItem/article-preview-item";
</style>