<template lang="pug">
section(class="app-subscribe_form_block")
    AppComponentSubscription(:componentData="componentData.data" class="app-subscribe_form_block__subscription")
</template>

<script>
import AppComponentSubscription from "./AppComponentSubscription.vue";

export default {
    name: "AppSubscribeFormBlock",
    components: {
        AppComponentSubscription,
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
    @import "../components/styles/appSubscribeFormBlock/app-subscribe_form_block";
</style>