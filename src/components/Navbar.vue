<template>
    <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container px-2">
            <ul class="nav navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/" active-class="active" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" active-class="active" to="/workshops" exact>
                        List of workshops
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
};
</script>

<style scoped>

</style>
