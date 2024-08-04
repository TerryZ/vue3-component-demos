<template>
  <div class="ps-3 py-3">
    <h4>Components</h4>
  </div>
  <div
    class="px-3 pb-4"
    v-for="item in modules"
    :key="item.key"
  >
    <router-link
      class="nav-link"
      aria-current="page"
      :class="isActive(item)"
      :to="item.url"
      @click="change(item)"
    >
      {{ item.name }}
    </router-link>
  </div>
  <div class="ps-3 pb-3">
    <h4>Utilities</h4>
  </div>
  <div
    class="px-3 pb-4"
    v-for="item in utils"
    :key="item.key"
  >
    <router-link
      class="nav-link"
      aria-current="page"
      :class="isActive(item)"
      :to="item.url"
      @click="change(item)"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const modules = [
  { key: 'page', name: 'Pagination', url: '/page' },
  { key: 'dropdown', name: 'Dropdown', url: '/dropdown' },
  { key: 'region', name: 'Region', url: '/region' },
  { key: 'selectpage', name: 'Selectpage', url: '/selectpage' },
  { key: 'dialogs', name: 'Dialogs', url: '/dialogs' }

]
const utils = [
  { key: 'http', name: 'Http data request', url: '/http' }
]
const active = ref('')

function isActive (item) {
  if (active.value && active.value === item.key) {
    return 'text-dark fw-bold'
  }
  return 'text-secondary text-opacity-50'
}
function change (item) {
  active.value = item.key
}

onBeforeMount(() => {
  const route = useRoute()
  const module = modules.find(val => val.url === route.path)
  if (module) {
    active.value = module.key
  }
})
</script>
