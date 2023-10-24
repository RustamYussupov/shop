<script setup lang="ts">
export interface Props {
  tag?: string;
  color?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontHeight?: string;
  latterSpacing?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
  color: "#2C2C2C",
  fontSize: "16",
  fontStyle: "normal",
  fontWeight: "400",
  fontHeight: "145%",
});
</script>

<template>
  <component
    :is="tag"
    :style="{
      color: props.color,
      fontSize: props.fontSize,
      fontStyle: props.fontStyle,
      fontWeight: props.fontWeight,
      fontHeight: props.fontHeight,
      latterSpacing: props.latterSpacing,
    }"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss"></style>
