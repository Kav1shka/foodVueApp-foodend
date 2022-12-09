<template> 
    <NavBar/>
    <foodMenu/>
      
    </template>
    <script>
    import NavBar from '../components/NavBar.vue';
    import foodMenu from '../components/menu/foodmenu.vue'
    
    
    export default {
      components:{
        NavBar,
        foodMenu
    }
    }
    </script>
    <style>
    </style>