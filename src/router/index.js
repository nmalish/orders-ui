import { createRouter, createWebHistory } from 'vue-router'
import OrdersView from '../views/OrdersView.vue'
import OrderEdit from '../views/OrderEdit.vue'
import OrderAdd from '../views/OrderAdd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'OrdersView',
      component: OrdersView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersView
    },
    {
      path: '/order-add',
      component: OrderAdd
    },
    {
      path: '/order-edit/:id',
      component: OrderEdit
    }
  ]
})

export default router
