<script>
import { RouterLink } from 'vue-router'

export default {
	data() {
		return {
			orders: [],
			statuses: []
		}
	},
	methods: {
		getList() {
			this.axios.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders').then((response) => {
				this.orders = response.data
			})
		},
		getStatuses() {
			this.axios
				.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders/getstatuses')
				.then((response) => {
					this.statuses = response.data
				})
		},
		deleteOrder(id) {
			this.axios
				.post(import.meta.env.VITE_PUBLIC_API_URL + 'orders/deleteorder?id=' + id)
				.then((response) => {
					this.orders = this.orders.filter((order) => order.id !== id)
				})
		},
		getStatusName(id) {
			const status = this.statuses.find((s) => s.id === id)
			return status && status.name
		},
		getClassForStatus(id) {
			const status = this.getStatusName(id)
			switch (status) {
				case 'New':
					return 'bg-blue-500 text-white'
				case 'InProgress':
					return 'bg-yellow-500 text-white'
				case 'Done':
					return 'bg-green-500 text-white'
				case 'Cancelled':
					return 'bg-red-500 text-white'
				default:
					return 'bg-gray-500 text-white'
			}
		}
	},
	mounted() {
		this.getList()
		this.getStatuses()
	}
}
</script>

<template>
	<div class="container mx-auto p-4">
		<div class="flex justify-between">
			<h1 class="text-3xl font-semibold mb-6">Order List</h1>
			<router-link
				to="/order-add"
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-h-10"
			>
				+ Add Order
			</router-link>
		</div>
		<div class="overflow-x-auto">
			<table class="min-w-full border rounded-lg overflow-hidden">
				<thead class="bg-gray-200">
					<tr>
						<th class="py-3 px-6 text-left">Order ID</th>
						<th class="py-3 px-6 text-left">Order Date</th>
						<th class="py-3 px-6 text-left">Order Status</th>
						<th class="py-3 px-6 text-left">Order Total</th>
						<th class="py-3 px-6 text-left">Actions</th>
					</tr>
				</thead>
				<tbody class="bg-white">
					<tr v-for="order in orders" :key="order.id">
						<td class="py-4 px-6">{{ order.id }}</td>
						<td class="py-4 px-6">{{ order.orderDate }}</td>
						<td class="py-4 px-6">
							<span
								:class="getClassForStatus(order.statusId)"
								class="inline-block bg-blue-500 text-white py-1 px-2 rounded-full text-xs min-w-[75px] text-center"
								>{{ getStatusName(order.statusId) }}</span
							>
						</td>
						<td class="py-4 px-6">{{ order.totalAmount }}</td>
						<td class="py-4 px-6">
							<router-link :to="'order-edit/' + order.id" class="text-blue-500 hover:underline mr-2"
								>Edit</router-link
							>
							<button @click="deleteOrder(order.id)" class="text-red-500 hover:underline">
								Delete
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>