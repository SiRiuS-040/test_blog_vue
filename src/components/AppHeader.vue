<template>
    <header class="app-header">
        <div class="app-header__content ">
            <div class="container app-header__logo-wrapper">
                <img src="../assets/img/logo.svg" alt="">
            </div>
            <nav class="container app-header__navigation navigation">
                <ul class="navigation__list">
                    <li class="navigation__item">
                        <router-link to="/" class="navigation__link">Главная</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/article" class="navigation__link">Статьи</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>

export default {
    name: "AppHeader",
    components: {
    },

    setup() {
        return {

        }
    },
}
</script>

<style lang="scss">
    @import "../components/styles/appHeader/app-header";
</style>