<script>
export default {
	name: 'AddOrder',
	data() {
		return {
			order: {
				id: 0,
				customerId: '',
				orderDate: '',
				totalAmount: '',
				statusId: ''
			},
			statuses: [],
			customers: []
		}
	},
	methods: {
		addOrder() {
			this.axios
				.post(
					import.meta.env.VITE_PUBLIC_API_URL + 'orders/add',
					{
						id: this.order.id,
						customerId: this.order.customerId,
						orderDate: this.order.orderDate,
						totalAmount: this.order.totalAmount,
						statusId: this.order.statusId
					},
					{
						headers: {
							'Content-Type': 'application/json'
						}
					}
				)
				.then((response) => {
					this.order = response.data
				})
		},
		getCustomers() {
			this.axios
				.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders/getcustomers')
				.then((response) => {
					this.customers = response.data
				})
		},
		getStatuses() {
			this.axios
				.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders/getstatuses')
				.then((response) => {
					this.statuses = response.data
				})
		}
	},
	mounted() {
		this.getCustomers()
		this.getStatuses()
	}
}
</script>
  

<template>
	<div class="container mx-auto p-4">
		<form @submit.prevent="addOrder" class="max-w-md mx-auto">
			<div class="flex justify-between">
				<h1 class="text-2xl font-semibold mb-4">Add Order</h1>
			</div>
			<div class="mb-4">
				<label for="customer" class="block font-semibold mb-1">Customer:</label>
				<select v-model="order.customerId" id="customer" class="w-full px-4 py-2 border rounded">
					<option value="" disabled>Select a customer</option>
					<option v-for="customer in customers" :key="customer.id" :value="customer.id">
						{{ customer.firstName }} {{ customer.lastName }}
					</option>
				</select>
			</div>
			<div class="mb-4">
				<label for="orderDate" class="block font-semibold mb-1">Order Date:</label>
				<input
					type="date"
					v-model="order.orderDate"
					id="orderDate"
					class="w-full px-4 py-2 border rounded"
				/>
			</div>
			<div class="mb-4">
				<label for="totalAmount" class="block font-semibold mb-1">Total Amount:</label>
				<input
					type="text"
					v-model="order.totalAmount"
					id="totalAmount"
					class="w-full px-4 py-2 border rounded"
				/>
			</div>
			<div class="mb-4">
				<label for="status" class="block font-semibold mb-1">Status:</label>
				<select v-model="order.statusId" id="status" class="w-full px-4 py-2 border rounded">
					<option value="" disabled>Select a status</option>
					<option v-for="status in statuses" :key="status.id" :value="status.id">
						{{ status.name }}
					</option>
				</select>
			</div>
			<button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
				Add Order
			</button>
		</form>
	</div>
</template>
  
