<template>
    <nav>
        <a href="#"><img src="" alt=""></a>
        <a href="">Todos los Productos</a>
        <a href="">Contacto</a>
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