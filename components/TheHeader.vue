<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="top-header">
      <div class="container">top header</div>
    </div>
    <div class="bottom-header">
      <div class="container">bottom header</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
}

.top-header {
  height: 60px;
}

.bottom-header {
  height: 75px;
  background-color: $main;
}
</style>
