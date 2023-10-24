<script setup lang="ts">
import DefaultLayout from "~/layouts/DefaultLayout.vue";
import TheLinkCardList from "~/components/TheLinkCardList.vue";
</script>

<template>
  <DefaultLayout>
    <TheHero class="mt-40" />

    <TheProductCardCarousel
      title="Акционные товары"
      link-text="Все акционные товары"
      link-to="/"
      class="mt-120"
    />

    <TheProductCardCarousel
      title="Популярные товары"
      link-text="Все популярные товары"
      link-to="/"
      class="mt-120"
    />

    <TheProductCardCarousel
      title="Новинки"
      link-text="Все новинки"
      link-to="/"
      class="mt-60"
    />

    <TheSimpleLinkCardCarousel title="Популярные категории" class="mt-120" />

    <TheLinkCardList
      title="Блог"
      link-text="Все статьи"
      link-to="/"
      class="mt-200"
    />
  </DefaultLayout>
</template>

<style scoped></style>
