import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import The404 from "../views/The404.vue"
import TheUserCreation from "../views/Users/TheCreation.vue"
import TheUserTable from "../views/Users/TheTable.vue"
import TheUserCard from "../views/Users/TheCard.vue"


const routes = [
{
    path:'/',
    name:'Home',
    component: Home
},
{
    path:'/CreateUser',
    name:'CreateUser',
    component: TheUserCreation
},
{
    path:'/UserList',
    name:'UserList',
    component: TheUserTable
},
{
    path:'/UserList/:id',
    name:'UserListCard',
    component: TheUserCard
},
//404 catcher
{
    path:'/:catchAll(.*)',
    name: '404',
    component: The404
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router