<template>
	<div>
		<p class="lead">Product Cart</p>
		<table class="table">
			<thead class="thead-light">
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Quantity</th>
					<th scope="col">Price</th>
					<th scope="col">Remove</th>
				</tr>
			</thead>
			<tbody>
				<CartItem v-for="cart in getCart" :key="cart.id" :cart="cart" />
			</tbody>
		</table>
		<hr />
		<button class="btn btn-success btn-lg">
			Checkout
			<span>(${{cartTotal}})</span>
		</button>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
	export default {
    name: "CartList",
    components: { CartItem },
    computed:{
        ...mapGetters(['getCart','cartTotal'])
    },
    created(){
        this.$store.dispatch('fetchCart')
    }
};
</script>

<style></style>
