<script setup lang="ts">
import TheProductCard from "~/components/TheProductCard.vue";
import TheCarousel from "~/components/TheCarousel.vue";

export interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <TheContentBockWrap :title="title">
    <TheCarousel>
      <TheProductCard />
    </TheCarousel>
  </TheContentBockWrap>
</template>

<style scoped lang="scss"></style>
