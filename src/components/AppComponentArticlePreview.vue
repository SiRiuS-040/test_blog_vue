<template>
    <ul class="article-preview">
        <AppComponentArticlePreviewItem />
        <AppComponentArticlePreviewItem />
        <AppComponentArticlePreviewItem />
    </ul>
</template>

<script>

import AppComponentArticlePreviewItem from "./AppComponentArticlePreviewItem.vue";

export default {
    name: "AppComponentArticlePreview",
    components: {
        AppComponentArticlePreviewItem,
    },

}
</script>

<style lang="scss">
    @import "../components/styles/appComponentArticlePreview/article-preview";
</style>