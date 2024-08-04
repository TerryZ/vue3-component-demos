import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@view/DemoIndex.vue'),
    children: [
      { path: '/page', component: () => import('@view/page/PaginationDemos.vue') },
      { path: '/dropdown', component: () => import('@view/dropdown/DropdownDemos.vue') },
      { path: '/region', component: () => import('@view/region/RegionDemos.vue') },
      { path: '/selectpage', component: () => import('@view/selectpage/SelectPageDemos.vue') },
      { path: '/dialogs', component: () => import('@view/dialogs/DialogDemos.vue') },
      { path: '/http', component: () => import('@view/http-data-request/HttpDataRequest.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { router }
