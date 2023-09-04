<template>
    <div
        v-if="!isLoading"
        class="app-page"
    >
        <AppPlug404
            v-if="is404Plug"
        />
        <section
            v-if="isPageDataLoaded"
            class="app-page__content"
        >
            <component
                v-for="componentData in appPageData.body"
                :is="componentName[componentData.type]"
                :componentData="componentData"
                :key="componentData.id"
            />
        </section>
    </div>
</template>

<script>

import { blogComponents } from "./features/blogComponents";
import AppArticleListBlock from "./AppArticleListBlock.vue";
import AppPlug404 from "./AppPlug404.vue";
import {useRoute} from "vue-router";
import {useApi} from "@/components/features/useApi";

export default {
    name: "PageHome",

    components: {
        AppArticleListBlock,
        AppPlug404
    },

    setup( ){
        const route = useRoute();
        const pagePath = route.path;
        const componentName = blogComponents;

        const {
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
        } = useApi(pagePath)

        return {
            componentName,
            appPageData,
            isPageDataLoaded,
            is404Plug,
            isLoading,
        }
    },

}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/pageHome/app-page-home";
</style>