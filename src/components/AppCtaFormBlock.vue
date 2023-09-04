<template lang="pug">
section(class="app-cta-form-block")
    AppComponentForm(:componentData="componentData.data")
</template>

<script>
import AppComponentForm from "./AppComponentForm.vue";

export default {
    name: "AppCtaFormBlock",
    components: {
        AppComponentForm,
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
    @import "../components/styles/appCtaFormBlock/app-cta-form-block";
</style>