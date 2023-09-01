<template>
    <ul class="article-preview">
        <AppComponentArticlePreviewItem
            v-for="preview in componentData.data.articles"
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
    setup( ){

        return {

        }
    },

}
</script>

<style lang="scss">
    @import "../components/styles/appComponentArticlePreview/article-preview";
</style>