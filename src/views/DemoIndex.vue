<template>
  <TheLayout>
    <template #aside>
      <DemoAside />
    </template>

    <RouterView />
  </TheLayout>
</template>

<script setup>
import TheLayout from '@/layout/TheLayout.vue'
import DemoAside from './DemoAside.vue'
</script>
