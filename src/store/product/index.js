import axios from "axios";
import { API_URL } from "../../constants";

const state = {
    productItems: [],
};

const getters = {
    getProducts (state) {
        return state.productItems
    }
};

const mutations = {

    FETCH_PRODUCTS (state, payload) {
        state.productItems = payload;
    }
};

const actions = {
    async fetchProducts (context) {
        const { data } = await axios.get(`${API_URL}/products`);
        context.commit('FETCH_PRODUCTS',data);
    }
};

const productModule = {
    state,getters,mutations,actions
};

export default productModule;