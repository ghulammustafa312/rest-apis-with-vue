<template>
	<div>
		<ProductListItem v-for="product in getProducts" :key="product.id" :product="product" />
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';
	import ProductListItem from './ProductListItem.vue';
	export default {
		name: 'ProductList',
		components: { ProductListItem },
		computed: {
			...mapGetters(['getProducts']),
		},
		created() {
			this.$store.dispatch('fetchProducts');
		},
	};
</script>

<style></style>
