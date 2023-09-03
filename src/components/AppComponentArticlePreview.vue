<template>
    <ul class="article-preview">
        <AppComponentArticlePreviewItem
            v-for="preview in componentData.articles"
            :key="preview.id"
            :componentData="preview"
        />
    </ul>
</template>

<script>

import AppComponentArticlePreviewItem from "./AppComponentArticlePreviewItem.vue";

export default {
    name: "AppComponentArticlePreview",
    components: {
        AppComponentArticlePreviewItem,
    },
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appComponentArticlePreview/article-preview";
</style>