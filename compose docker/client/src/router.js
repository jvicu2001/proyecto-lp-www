import {createRouter,createWebHistory} from 'vue-router';
import Loginpa from './pages/Login-pa.vue';
import Signupa from './pages/Signu-pa.vue';

const routes = [{path: '/login', component: Loginpa},
                {path: '/signup', component: Signupa}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;