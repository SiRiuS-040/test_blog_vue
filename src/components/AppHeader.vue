<template lang="pug">
header(class="app-header")
    div(class="container app-header__content")
        div(class="app-header__logo-wrapper")
            router-link(to="/")
                 svg(width="134px", height="32px")
                    use(xlink:href="../assets/img/logo-header.svg#logoHeader")
</template>

<script>

export default {
    name: "AppHeader",
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appHeader/app-header";
</style>