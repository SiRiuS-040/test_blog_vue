<template>
    <section
        v-if="isPageDataLoaded"
        class="app-page-home"
    >
        <component
            v-for="componentData in appPageData.body"
            :is="componentName[componentData.type]"
            :componentData="componentData"
            :key="componentData.id"
        />
    </section>
</template>

<script>

import { ref } from "vue"
import { blogComponents } from "./features/blogComponents";
import BrewMethodsAPI from '../components/api/resources/BrewMethods.js';
import AppArticleListBlock from "./AppArticleListBlock.vue";

export default {
    name: "PageHome",

    components: {
        AppArticleListBlock,
    },

    setup( ){
        const isPageDataLoaded = ref(false)
        const componentName = blogComponents;
        const pagePath = '/';
        const appPageData = ref({});
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( pagePath );
            isPageDataLoaded.value = true;
        };
        loadBrewMethods()

        return {
            componentName,
            isPageDataLoaded,
            appPageData,
            loadBrewMethods,
        }
    },

}
</script>

<style lang="scss">
    @import "../components/styles/pageHome/app-page-home";
</style>