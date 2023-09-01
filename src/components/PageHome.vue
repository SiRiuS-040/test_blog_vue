<template>
    <div class="app-body">
        <AppHeader />
        <AppMain>
            <template #mainContent>
                <section class="home-section articles">
                    <AppComponentArticlePreview
                        class="articles__list"
                    />

                    {{ form.icon }}
                    {{ form.method }}

                </section>
            </template>
        </AppMain>
        <AppFooter/>
    </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppMain from "./AppMain.vue";
import AppFooter from "./AppFooter.vue";
import AppComponentArticlePreview from "./AppComponentArticlePreview.vue";

import { ref } from "vue"

import BrewMethodsAPI from '../components/api/resources/BrewMethods.js';

export default {
    name: "PageHome",
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppComponentArticlePreview,
    },

    setup( ){
        const pagePath = '/';
        const brewMethods = ref({});
        const loadBrewMethods = async() => {
            brewMethods.value = await BrewMethodsAPI.index( pagePath );
        };

        const form = {
            method: '',
            icon: ''
        };

        loadBrewMethods()

        console.log(brewMethods)


        // const saveBrewMethod = async() => {
        //     let formData = new FormData();
        //
        //     formData.append('method', form.method);
        //     formData.append('icon', form.icon);
        //
        //     await BrewMethodsAPI.store( formData )
        //
        // }

        return {
            brewMethods,
            loadBrewMethods,
            form,
        }
    },

}
</script>

<style lang="scss">
    @import "../components/styles/pageHome/page-home";
</style>