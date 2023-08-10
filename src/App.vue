<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<main class="flex-grow mt-10">
			<header class="site-header">
				<nav class="nav-links">
					<router-link to="/orders" class="nav-link">Orders</router-link>
				</nav>
			</header>
			<RouterView />
		</main>

		<footer class="bg-gray-800 text-white py-6">
			<div class="container mx-auto text-center">
				<p>&copy; {{ currentYear }} nmalish</p>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.site-header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #333;
	color: #fff;
	padding: 10px;
	z-index: 100;
}

.nav-links {
	display: flex;
	justify-content: center;
}

.nav-link {
	color: #fff;
	margin: 0 15px;
	text-decoration: none;
}

.nav-link:hover {
	text-decoration: underline;
}
</style>