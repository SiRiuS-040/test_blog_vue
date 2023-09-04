<template lang="pug">
section(class="article-intro-block")
    div(class="article-intro-block__wrapper")
        div(class="article-intro-block__image-wrapper")
            img(:src="componentData.data.image" alt="Изображение фона article-intro-block" class="article-intro-block__image")
        div(class="article-intro-block__content")
            h2(class="article-intro-block__title") {{ componentData.data.title }}
            div(class="article-intro-block__statistic")
                p(class="article-intro-block__statistic-item")
                    svg(width="16px", height="16px")
                        use(xlink:href="../assets/img//icons/icon-clock.svg#iconClock")
                    span {{ componentData.data['reading_time'] }} мин время чтения
                p(class="article-intro-block__statistic-item")
                    svg(width="16px", height="16px")
                        use(xlink:href="../assets/img//icons/icon-eye.svg#iconEye")
                    span {{ componentData.data['views_count'] }} прочитали статью
            p(class="article-intro-block__desc") {{ componentData.data['short_description'] }}
</template>

<script>

export default {
    name: "AppArticleIntroBlock",
    components: {
    },
    props: {
        componentData: {
            type: Object,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appArticleIntroBlock/article_intro_block";
</style>