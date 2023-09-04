<template lang="pug">
section(class="article-image-block")
    div(class="article-image-block__image-wrapper")
        img(:src="componentData.data.src" alt="Фотография заметки" class="article-image-block__img")
    div(v-if="componentData.data.caption" class="article-image-block__info")
        p {{ componentData.data.caption }}
</template>

<script>

export default {
    name: "AppArticleImageBlock",
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appArticleImageBlock/article-image-block";
</style>