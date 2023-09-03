<template>
    <div class="app-form">
        <div class="app-form__image-wrapper">
            <img src="../assets/img/cta-form-image.jpg" alt="Изображение на форме обратной связи" class="app-form__image">
        </div>
        <form class="app-form__form">
            <h3 class="app-form__title">
                Стань участником проекта
            </h3>
            <div class="app-form__inputs">
                <UiInput
                    type="text"
                    placeholder="Имя"
                    class="app-form__input"
                />
                <UiInput
                    type="tel"
                    placeholder="Телефон"
                    class="app-form__input"
                />
                <UiInput
                    type="email"
                    placeholder="Email"
                    class="app-form__input"
                />
            </div>
            <UiButton
                @click.prevent="formSubmit"
                buttonType="basic"
                class="app-form__button"
            >
                <template #desc>
                    Присоединиться
                </template>
            </UiButton>
        </form>
    </div>
</template>

<script>

import UiButton from "@/components/UiButton";
import UiInput from "@/components/UiInput";

export default {
    name: "AppComponentForm",
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
        const formSubmit = () => {
            console.log('Присоединиться - отправка формы')
        }

        return {
            formSubmit,
        }
    },
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";
    @import "../components/styles/appComponentForm/app-component-form";
</style>