import axios from 'axios';
import { API_URL } from '../../constants';

const state = {
	cartItems: [],
};

const getters = {
	getCart(state) {
		return state.cartItems;
	},
	cartTotal(state) {
        return state.cartItems.reduce((acc, item) => {
            return item.qty * item.price + acc;
        }, 0).toFixed(2);
	},
};

const mutations = {
	FETCH_CART(state, payload) {
		state.cartItems = payload;
	},
	ADD_TO_CART(state, payload) {
		state.cartItems.push(payload);
	},
	REMOVE_CART(state, payload) {
		const index = state.cartItems.findIndex(cart => cart.id === payload.id);
		state.cartItems.splice(index, 1);
	},
};

const actions = {
	async fetchCart(context) {
		const { data } = await axios.get(`${API_URL}/cart`);
		context.commit('FETCH_CART', data);
	},
	async addCartItem(context, payload) {
		payload.id = Date.now().toString();
		const { data } = await axios.post(`${API_URL}/cart`, payload);
		context.commit('ADD_TO_CART', data);
	},
	async removeCart(context, payload) {
		await axios.delete(`${API_URL}/cart/${payload.id}`);
		context.commit('REMOVE_CART', payload);
	},
};

const cartModule = {
	state,
	getters,
	mutations,
	actions,
};

export default cartModule;
