import Home from './components/home.vue'
import Lists from './components/list.vue'
import Detail from './components/detail.vue'
import Update from './components/update.vue'
import Create from './components/create.vue'

export const routes = [
    { path: '/', component: Home},
    { path: '/lists', component: Lists},
    { path: '/create', component: Create},
    { path: '/detail/:id', component: Detail},
    { path: '/update/:id', component: Update},
]