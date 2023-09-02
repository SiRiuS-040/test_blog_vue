<template>
    <RouterView
        :key="route.path"
    />
</template>

<script setup>
import { RouterView } from 'vue-router'
import {useRoute} from "vue-router";
const route = useRoute();

</script>

<style></style>
