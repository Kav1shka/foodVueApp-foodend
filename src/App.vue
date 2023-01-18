
<template>
<NavBar/>
<Router-view/>
<Footer/>
<view/>

</template>

<script setup>
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue";   
import {RouterView} from 'vue-router';
import view from './components/quickview.vue'
</script>

<style></style>
