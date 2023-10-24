<script setup lang="ts">
export interface Props {
  tag?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
});
</script>

<template>
  <component :is="tag"><slot /></component>
</template>

<style scoped lang="scss"></style>
