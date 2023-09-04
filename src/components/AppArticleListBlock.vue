<template lang="pug">
section(class="article-list-block")
    h2(v-if="!isHomePage" class="article-list-block__title")
    AppComponentArticlePreview(:componentData="componentData.data" class="article-list-block__list")
</template>

<script>
import { useRoute } from 'vue-router';
import {computed} from "vue";
import AppComponentArticlePreview from "./AppComponentArticlePreview.vue";

export default {
    name: "AppArticleListBlock",
    components: {
        AppComponentArticlePreview
    },
    props: {
        componentData: {
            type: Object,
        }
    },

    setup() {
        const route = useRoute();
        const isHomePage = computed(() => route.name === 'home')

        return {
            route,
            isHomePage
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appArticleListBlock/article-list-block";
</style>