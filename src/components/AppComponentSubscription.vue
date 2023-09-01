<template>
    <div class="subscription">
        <h2 class="subscription__title">
            Подпишись на рассылку
        </h2>
        <div class="subscription__actions">
            <UiInput
                type="text"
                placeholder="Email"
                class="subscription__input"
            />
            <UiButton
                @click.prevent="subscribeSubmit"
                buttonType="basic"
                class="subscription__button"
            >
                <template #desc>
                    Подписаться
                </template>
            </UiButton>
        </div>
    </div>
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

<style lang="scss">
    @import "../components/styles/appComponentSubscription/app-component-subscription";
</style>