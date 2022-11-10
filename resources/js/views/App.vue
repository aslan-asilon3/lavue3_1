<template>
    <div>
        <h1>Vue 3 + Laravel 8 with Vue-Router and Tailwind CSS Boilerplate</h1>
        <p>
            <router-link :to="{ name: 'Home' }">Home</router-link> |
            <router-link :to="{ name: 'Hello' }">Hello</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {};
</script>
