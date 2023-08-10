<template>
	<div class="edit-orders">
	  <h1>Edit Order</h1>
	  <form @submit.prevent="updateOrder">
		<div class="form-group">
		  <label for="customerId">Customer Id:</label>
		  <input type="text" v-model="order.customerId" id="customerId" />
		</div>
		<div class="form-group">
		  <label for="orderDate">Order Date:</label>
		  <input type="date" v-model="order.orderDate" id="orderDate" />
		</div>
		<div class="form-group">
		  <label for="totalAmount">Total Amount:</label>
		  <input type="text" v-model="order.totalAmount" id="totalAmount" />
		</div>
		<div class="form-group">
		  <label for="statusId">Status Id:</label>
		  <input type="text" v-model="order.statusId" id="statusId" />
		</div>
		<button type="submit">Update Order</button>
	  </form>
	</div>
  </template>
  
  <script>
  export default {
	name: 'EditOrder',
	data() {
	  return {
		order: {
		  customerId: '',
		  orderDate: '',
		  totalAmount: '',
		  statusId: ''
		}
	  };
	},
	methods: {
	  updateOrder() {
		console.log('Order updated:', this.order);
	  }
	},
	mounted() {
	  this.axios.get(import.meta.env.VITE_PUBLIC_API_URL + 'orders/' + this.$route.params.id).then((response) => {
		this.order = response.data;
	  });
	}
  };
  </script>
  
  <style>
.edit-orders {
  padding: 20px;
}

.order-form {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.form-group {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
}

.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #333;
  color: #fff;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
  </style>
  