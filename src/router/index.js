
import { createRouter,createWebHistory } from "vue-router";
import team from "../components/team.vue";
import category from "../components/menu/foodCategory.vue"
import Home from "../components/Home.vue"
import mains from "../components/menu/mains.vue"
import drinks from "../components/menu/drinks.vue"
import pastries from "../components/menu/pastries.vue"
import dessert from "../components/menu/dessert.vue"
import store from '../store/'
import SignIn from "../components/login.vue"
import SignUp from "../components/register.vue";
import Profile from '../components/profile.vue';
import feedback from '../components/feedback.vue';
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

 
routes:[
    {
        path:'/',
        name:'Home',
        component:Home,
    },
     {
        path:'/feedback',
        name:'feedback',
        component:feedback,
    },
    {
        path:'/team',
        name:'team',
        component:team,
    },
    {
        path:'/category',
        name:'category',
        component:category,
        beforeEnter: (to, from, next) => {
            if (store.state.isLoggedIn === false) {
                console.log(store.state.isLoggedIn)
                next({path:'/SignIn',
                query:{
                        redirecFrom: to.fullPath
                }
            })
            }
            else{
                next()
            }
        }
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
        component:() =>import('../components/cart.vue'),
        beforeEnter: (to, from, next) => {
            if (store.state.isLoggedIn === false) {
                console.log(store.state.isLoggedIn)
                next({path:'/SignIn',
                query:{
                        redirecFrom: to.fullPath
                }
            })
            }
            else{
                next()
            }
        }
    },
    {
        path:'/SignIn',
        name:'SignIn',
        component:SignIn,
    },
    {
        path:'/SignUp',
        name:'SignUp',
        component:SignUp,
    },
    {
        path:'/profile',
        name:'profile',
        component:Profile,
        beforeEnter: (to, from, next) => {
            if (store.state.isLoggedIn === false) {
                console.log(store.state.isLoggedIn)
                next({path:'/SignIn',
                query:{
                        redirecFrom: to.fullPath
                }
            })
            }
            else{
                next()
            }
        }
    },
    {
        path:'/contact',
        name:'contact',
        component:()=>import('../components/contact.vue')
    }
]
})




export default router