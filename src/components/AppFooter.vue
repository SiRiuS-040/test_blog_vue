<template lang="pug">
div(class="app-footer")
    div(class="container app-footer__content")
        div(class="app-footer__top")
            div(class="app-footer__logo-wrapper")
                svg(width="134px", height="32px")
                    use(xlink:href="../assets/img/logo-header.svg#logoHeader")
                p(class="app-footer__desc") Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
            div(class="app-footer__contacts blog-contacts")
                div(class="blog-contacts__mail-wrapper")
                    p(class="blog-contacts__mail-title") email
                    p(class="blog-contacts__mail") testblogsupport@gmail.com
                div(class="blog-contacts__socials blog-contacts-socials")
                    ul(class="blog-contacts-socials__list")
                        li(class="blog-contacts-socials__item")
                            a(href="#" class="blog-contacts-socials__link")
                                svg(width="30px", height="30px")
                                    use(xlink:href="../assets/img/icons/icon-fb.svg#iconFb")
                        li(class="blog-contacts-socials__item")
                            a(href="#" class="blog-contacts-socials__link")
                                svg(width="30px", height="30px")
                                    use(xlink:href="../assets/img/icons/icon-vk.svg#iconVk")
                        li(class="blog-contacts-socials__item")
                            a(href="#" class="blog-contacts-socials__link")
                                svg(width="30px", height="30px")
                                    use(xlink:href="../assets/img/icons/icon-inst.svg#iconInst")
                        li(class="blog-contacts-socials__item")
                            a(href="#" class="blog-contacts-socials__link")
                                svg(width="30px", height="30px")
                                    use(xlink:href="../assets/img/icons/icon-tg.svg#iconTg")
        div(class="app-footer__bottom")
            AppComponentSubscription(class="app-footer__subscription")
</template>

<script>

import AppComponentSubscription from "@/components/AppComponentSubscription";

export default {
    name: "AppFooter",
    components: {
        AppComponentSubscription
    },
}
</script>

<style lang="scss">
    @import "../assets/variables";
    @import "../components/styles/appFooter/app-footer";
</style>