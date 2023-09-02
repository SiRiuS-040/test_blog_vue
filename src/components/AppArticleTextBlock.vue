<template>
    <section class="article-text-block">
        <div v-html="componentData.data"
             class="article-text-block__content"
        >
        </div>
    </section>
</template>

<script>

export default {
    name: "AppArticleTextBlock",
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appArticleTextBlock/article-text-block";
</style>