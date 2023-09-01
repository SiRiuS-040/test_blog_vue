<template>
    <section
        v-if="isPageDataLoaded"
        class="articles"
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
import BrewMethodsAPI from '../components/api/resources/BrewMethods.js';
import AppComponentArticlePreview from "./AppComponentArticlePreview.vue";
import { blogComponents } from "./features/blogComponents";

export default {
    name: "PageHome",

    components: {
        AppComponentArticlePreview,
    },

    setup( ){
        const componentName = blogComponents;

        const pagePath = '/';
        const appPageData = ref({});
        const isPageDataLoaded = ref(false)
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( pagePath );
            isPageDataLoaded.value = true;
        };
        loadBrewMethods()

        console.log(appPageData)
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
    @import "../components/styles/pageHome/page-home";
</style>