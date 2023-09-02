<template>
    <div
        v-if="isPageDataLoaded"
        class="app-page-article"
    >
        <component
            v-for="componentData in appPageData.body"
            :is="componentName[componentData.type]"
            :componentData="componentData"
            :key="componentData.id"
        />
    </div>
</template>

<script>

import { useRoute } from 'vue-router'
import {ref } from "vue";
import { blogComponents } from "./features/blogComponents";
import BrewMethodsAPI from "@/components/api/resources/BrewMethods";
import AppArticleIntroBlock from "./AppArticleIntroBlock.vue";
import AppArticleTextBlock from "./AppArticleTextBlock.vue";
import AppArticleImageBlock from "./AppArticleImageBlock.vue";
import AppArticleSliderBlock from "./AppArticleSliderBlock.vue";
import AppArticleListBlock from "./AppArticleListBlock.vue";
import AppCtaFormBlock from "./AppCtaFormBlock.vue";
import AppSubscribeFormBlock from "./AppSubscribeFormBlock.vue";

export default {
    name: "PageArticle",
    components: {
        AppArticleIntroBlock,
        AppArticleTextBlock,
        AppArticleImageBlock,
        AppArticleSliderBlock,
        AppArticleListBlock,
        AppCtaFormBlock,
        AppSubscribeFormBlock,
    },

    setup() {
        const isPageDataLoaded = ref(false);
        const componentName = blogComponents;
        const route = useRoute();
        const articleId = route.path;
        const appPageData = ref({});
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( articleId );
            isPageDataLoaded.value = true;
        };
        loadBrewMethods()

        return {
            componentName,
            appPageData,
            isPageDataLoaded,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/pageArticle/app-page-article";
</style>