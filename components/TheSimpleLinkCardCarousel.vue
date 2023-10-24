<script setup lang="ts">
import TheCarousel from "~/components/TheCarousel.vue";

export interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <TheContentBockWrap :title="title">
    <TheCarousel :items-to-show="4"> 1 </TheCarousel>
  </TheContentBockWrap>
</template>

<style scoped lang="scss"></style>
