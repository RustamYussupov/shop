<script setup lang="ts">
import UIText from "~/ui/UIText.vue";

export interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="content-block-wrap">
    <div class="container">
      <UIText>{{ props.title }}</UIText>

      <div class="content-block-wrap__box mt-40">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
