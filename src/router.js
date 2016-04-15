import HomePage from './pages/HomePage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
    history: false
})

router.map({
    '/': {
        component: HomePage
    }
})

export default router
