<template>
  <div
    class="d-grid vh-100"
    style="grid-template-columns: 20rem auto;"
  >
    <TheAside><slot name="aside" /></TheAside>
    <main class="vh-100 overflow-auto p-3">
      <slot />
    </main>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import TheAside from './aside/TheAside.vue'
</script>
