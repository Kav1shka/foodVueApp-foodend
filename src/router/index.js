import { createRouter,createWebHistory } from "vue-router";

const routers=[
    {
        path:'/',
        name:'Home',
        componet:()=>import('../components/menu/foodmenu.vue')
    },
    {
        path:'/about',
        name:'About',
        componet:()=>import('../components/footer.vue')
    },
    {
        path:'/Cart',
        name:'Cart',
        componet:()=>import('../components/cart.vue')
    },
    {
        path:'/Category/drinks',
        name:'drinks',
        componet:()=>import('../components/menu/drinks.vue')
    },
    {
        path:'/Category/mains',
        name:'mains',
        componet:()=>import('../components/menu/mains.vue')
    },
    {
        path:'/Category/pastries ',
        name:'Profile',
        componet:()=>import('../components/menu/pastries.vue')
    }
    
]

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    // routes
})

export default routers