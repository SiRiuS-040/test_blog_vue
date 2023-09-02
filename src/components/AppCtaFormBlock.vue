<template>
    <section class="app-cta-form-block">
        <AppComponentForm
            :componentData="componentData.data"
        />
    </section>
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

<style lang="scss">
    @import "../components/styles/appCtaFormBlock/app-cta-form-block";
</style>