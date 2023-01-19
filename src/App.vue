
<template>
<NavBar/>
<Router-view/>
<Footer/>

</template>

<script setup>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue";   
import {RouterView} from 'vue-router';
</script>

<style></style>
