<script setup lang="ts">
export interface Props {
  itemsToShow: number;
}

const props = withDefaults(defineProps<Props>(), {
  itemsToShow: 5,
});
</script>

<template>
  <carousel :items-to-show="itemsToShow" class="carousel">
    <slide v-for="slide in 10" :key="slide">
      <slot />
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<style scoped lang="scss">
.carousel {
  margin-left: -15px;
  width: calc(100% + 30px);

  :deep {
    .carousel__slide {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>
