<template>
    <main class="app-main">
        <div class="app-main__content container">
            <slot name="mainContent"></slot>
        </div>
    </main>
</template>

<script>

export default {
    name: "AppMain",
}
</script>

<style lang="scss">
    @import "../components/styles/appMain/app-main";
</style>