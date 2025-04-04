import { createStore } from 'vuex';

export default createStore({
    state: {
        products: [],
        loading: false,
        error: null
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_PRODUCTS(state, products) {
            state.products = products;
        },
    },
    actions: {
        async fetchProducts({ commit }) {
            commit('SET_LOADING', true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error('Error al obtener productos');
                const data = await response.json();
                commit('SET_PRODUCTS', data);
            }
            catch (error) {
                commit('SET_ERROR', error.message);
            }
            finally {
                commit('SET_LOADING', false)
            }
        },
    },
    getters: {
        allProducts: (state) => state.products,
        isLoading: (state) => state.loading,
        errorMessage: (state) => state.error
    },
});