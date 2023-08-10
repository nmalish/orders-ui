import { createRouter, createWebHistory } from 'vue-router'
import OrdersView from '../views/OrdersView.vue'
import OrdersEdit from '../views/OrdersEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/order-edit/:id',
      component: OrdersEdit
    }
  ]
})

export default router
