<template>
    <div
        v-if="!isLoading"
    >
        <AppPlug404
            v-if="is404Plug"
        />
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
import AppPlug404 from "./AppPlug404.vue";

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
        AppPlug404
    },

    setup() {
        const isPageDataLoaded = ref(false);
        const is404Plug = ref(false);
        const isLoading = ref(true);

        const componentName = blogComponents;
        const route = useRoute();
        const articleId = route.path;
        const appPageData = ref({});
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( articleId );

            if (appPageData.value.dataEmpty === true) {
                isPageDataLoaded.value = false;
                is404Plug.value = true;
                isLoading.value = false;
            } else {
                isPageDataLoaded.value = true;
                isLoading.value = false;
            }
        };
        loadBrewMethods()

        return {
            componentName,
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading
        }
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/pageArticle/app-page-article";
</style>