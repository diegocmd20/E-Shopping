<template>
    <div>
        <h2>Lista de Productos</h2>
        <p v-if="loading">Cargando Productos...</p>
        <p v-if="errorMessage">Error: {{ errorMessage }}</p>

        <ul v-if="!loading && !errorMessage">
            <li v-for="product in products" :key="product.id">
                <h3>{{ product.title }}</h3>
                <p>Precio: ${{ product.price }}</p>
                <img :src="product.image" :alt="product.title" width="100" />
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'ProductList',
    computed: {
        products(){
            return this.$store.getters.allProducts;
        },
        loading(){
            return this.$store.getters.isLoading;
        },
        errorMessage(){
            return this.$store.getters.errorMessage;
        }
    },
    mounted(){
        this.$store.dispatch('fetchProducts');
    }
};
</script>

<style scoped></style>