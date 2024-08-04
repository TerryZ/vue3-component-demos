<template>
  <div>
    <div>
      <h3>Users</h3>
      <div class="p-3 shadow-sm border rounded-3 mb-3">
        <table class="table table-striped m-0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in list"
              :key="user.id"
            >
              <td>{{ user.id }}</td>
              <td>
                <a
                  href="javascript: void(0)"
                  @click="userDetail(user.id)"
                >
                  {{ user.name }}
                </a>
              </td>
              <td>{{ user.username }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div
          class="mt-3 text-secondary"
          v-if="!loading && !list.length"
        >
          No data for now
        </div>
        <div
          class="mt-3"
          v-if="loading"
        >
          Now loading...
        </div>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-dark"
        @click="getUsers"
      >
        Load users
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { DialogModal } from 'v-dialogs'
import { get } from '@http'

import UserDetail from './UserDetail.vue'

const loading = ref(false)
const list = ref([])

function getUsers () {
  loading.value = true
  list.value = []
  get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
      console.log(data)
      list.value = data
    })
    .finally(() => {
      loading.value = false
    })
}
function userDetail (id) {
  DialogModal(UserDetail, {
    title: 'User Detail',
    params: { id },
    width: 500,
    height: 450
  })
}
</script>
