<template lang="pug">
div(class="app-subscription")
    h2(class="app-subscription__title") Подпишись на рассылку
    div(class="app-subscription__actions")
        UiInput(type="text" placeholder="Email" class="app-subscription__input")
        UiButton(@click.prevent="subscribeSubmit" buttonType="basic" class="app-subscription__button")
            template(#desc) Подписаться
</template>

<script>

import UiButton from "@/components/UiButton";
import UiInput from "@/components/UiInput";

export default {
    name: "AppComponentSubscription",
    components: {
        UiButton,
        UiInput
    },
    props: {
        componentData: {
            type: String,
        }
    },
    setup() {
        const subscribeSubmit = () => {
            console.log('Подписка')
        }

        return {
            subscribeSubmit,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appComponentSubscription/app-subscription";
</style>