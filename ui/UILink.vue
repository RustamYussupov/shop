<script setup lang="ts">
import UIText from "~/ui/UIText.vue";

export interface Props {
  tag?: string;
  to?: string;
  href?: string;
  uiTextProps: {
    tag?: string;
    color?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    fontHeight?: string;
    latterSpacing?: string;
  };
}

const props = withDefaults(defineProps<Props>(), {
  tag: "NuxtLink",
  uiTextProps: {
    tag: "span",
    color: "#1C80DC",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    fontHeight: "145%",
  },
});

const component = computed(() => {
  if (props.to || props.href) return defineNuxtLink({});
  return "button";
});
</script>

<template>
  <component :is="component" :to="props.to" :href="props.href">
    <UIText v-bind="props.uiTextProps">
      <slot />
    </UIText>
  </component>
</template>

<style scoped lang="scss"></style>
