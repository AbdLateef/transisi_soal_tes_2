import Lists from './components/list.vue'
import Detail from './components/detail.vue'
import Create from './components/create.vue'

export const routes = [
    { path: '/lists', component: Lists},
    { path: '/detail', component: Detail},
    { path: '/create', component: Create}
]