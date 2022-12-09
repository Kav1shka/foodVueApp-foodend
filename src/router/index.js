import { createRouter,createWebHistory } from "vue-router";
import team from "../components/team.vue";
const routes=[
    // {
    //     path:'/',
    //     name:'Home',
    //     componet:()=>import('../components/menu/foodmenu.vue')
    // },
    {
        path:'/team',
        name:'About',
        componet:team
    }
    // {
    //     path:'/Cart',
    //     name:'Cart',
    //     componet:()=>import('../components/cart.vue')
    // },
    // {
    //     path:'/Category/drinks',
    //     name:'drinks',
    //     componet:()=>import('../components/menu/drinks.vue')
    // },
    // {
    //     path:'/Category/mains',
    //     name:'mains',
    //     componet:()=>import('../components/menu/mains.vue')
    // },
    // {
    //     path:'/Category/pastries ',
    //     name:'Profile',
    //     componet:()=>import('../components/menu/pastries.vue')
    // }
    
]

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router