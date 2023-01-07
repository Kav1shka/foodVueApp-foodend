
import { createRouter,createWebHistory } from "vue-router";
import team from "../components/team.vue";
import category from "../views/category.vue"
import Home from "../components/Home.vue"
import mains from "../components/menu/mains.vue"
import drinks from "../components/menu/drinks.vue"
import pastries from "../components/menu/pastries.vue"
import dessert from "../components/menu/dessert.vue"
import cart from "../components/cart.vue";


 
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home,
    },
    {
        path:'/team',
        name:'team',
        component:team,
    },
    {
        path:'/category',
        name:'category',
        component:category
    },
    {
        path:'/mains',
        name:'mains',
        component:mains,
    },
    {
        path:'/drinks',
        name:'drinks',
        component:drinks,
    },
    {
        path:'/pastry',
        name:'pastry',
        component:pastries,
    },
    {
        path:'/dessert',
        name:'dessert',
        component:dessert,
    },
    {
        path:'/cart',
        name:'cart',
        component:cart,
    }
]


const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router