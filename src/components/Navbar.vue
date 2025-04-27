<template>
    <nav>
        <router-link to="/"><img src="" alt=""></router-link>
        <router-link :to="`/products/${id}`">Todos los Productos</router-link>
    </nav>
</template>

<script>


export default {
    name: 'Navbar',
    data() {
        return {

        };
    }
};
</script>

<style scoped>
nav {
    display: flex;
}

nav > img {
    object-fit: contain;
}

nav > a {
    padding: 15 px;
}
</style>