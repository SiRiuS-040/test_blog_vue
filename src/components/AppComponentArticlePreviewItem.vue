<template>
    <li class="article-preview-item">
        <img
            :src="componentData.image"
            class="article-preview-item__preview-image"
            alt="Изображение превью заметки" height="320" width="200"
        >
        <h2 class="article-preview-item__title">
            {{ componentData.title }}
        </h2>
        <router-link
            :to="componentData.link"
            class="article-preview-item__link"
        >
            Читать
        </router-link>
    </li>
</template>
<script>

export default
{
    name: "AppComponentArticlePreviewItem",
    props: {
        componentData: {
            type: Object,
            default() {
                return {
                    title: '',
                    image: '',
                    link:''
                };
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appComponentArticlePreviewItem/article-preview-item";
</style>