<script setup lang="ts"></script>

<template>
  <div class="hero">
    <div class="container-lg">
      <carousel :items-to-show="1">
        <slide v-for="slide in 10" :key="slide">
          <img src="~/assets/images/dev/hero-1.png" alt="hero" />
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
