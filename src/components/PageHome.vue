<template>
    <div
        v-if="!isLoading"
    >
        <AppPlug404
            v-if="is404Plug"
        />
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
    </div>
</template>

<script>

import { ref } from "vue"
import { blogComponents } from "./features/blogComponents";
import BrewMethodsAPI from '../components/api/resources/BrewMethods.js';
import AppArticleListBlock from "./AppArticleListBlock.vue";
import AppPlug404 from "./AppPlug404.vue";

export default {
    name: "PageHome",

    components: {
        AppArticleListBlock,
        AppPlug404
    },

    setup( ){
        const is404Plug = ref(false)
        const isPageDataLoaded = ref(false)
        const isLoading = ref(true)

        const componentName = blogComponents;
        const pagePath = '/';
        const appPageData = ref({});
        const loadBrewMethods = async() => {
            appPageData.value = await BrewMethodsAPI.index( pagePath );

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
            loadBrewMethods,
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