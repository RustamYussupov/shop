<script setup lang="ts">
export interface Props {
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <TheContentBockWrap :title="title"> 123 </TheContentBockWrap>
</template>

<style scoped lang="scss"></style>
