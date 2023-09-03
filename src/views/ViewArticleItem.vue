<template>
    <div class="app-body">
        <AppHeader/>
        <AppMain>
            <template #mainContent>
                <Transition>
                    <PageArticle />
                </Transition>
            </template>
        </AppMain>
        <AppFooter/>
    </div>
</template>

<script setup>
    import AppHeader from "../components/AppHeader.vue";
    import AppMain from "../components/AppMain.vue";
    import AppFooter from "../components/AppFooter.vue";
    import PageArticle from "../components/PageArticle.vue";
</script>
