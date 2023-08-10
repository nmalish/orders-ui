<script>
import { RouterLink } from 'vue-router'

export default {
	data() {
		return {
			orders: ['order1', 'order2', 'order3']
		}
	},
	methods: {
		getList() {
			console.log('getList')
			console.log(import.meta.env)
			this.axios.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders').then((response) => {
				console.log(response.data)
				this.orders = response.data
			})
		},
		deleteOrder(id) {
			console.warn('deleteOrder', id)
			this.axios.post(import.meta.env.VITE_PUBLIC_API_URL + 'orders/deleteorder?id=' + id).then((response) => {
				console.log(response.data)
				this.orders = this.orders.filter((order) => order.id !== id);
			})
		}
	},
	mounted() {
		this.getList()
	}
}
</script>

<template>
	<div class="orders">
		<table>
			<tr>
				<th>Order ID</th>
				<th>Order Date</th>
				<th>Order Status</th>
				<th>Order Total</th>
				<th><button>Add Order</button></th>
			</tr>
			<tr v-for="order in orders" :key="order.id">
				<td>{{ order.id }}</td>
				<td>{{ order.orderDate }}</td>
				<td>{{ order.statusId }}</td>
				<td>{{ order.totalAmount }}</td>
				<td class="flex">
					<RouterLink :to="'order-edit/' + order.id"><button>Edit</button></RouterLink>
					<button @click="deleteOrder(order.id)">Delete</button>
				</td>
			</tr>
		</table>
	</div>
</template>
  
  <style>
table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  padding: 8px;
  text-align: left;
}

table th {
  background-color: rgba(0, 189, 126, 0.238);
}

table tbody tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
  