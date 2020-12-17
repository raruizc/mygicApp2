import vueRouter from 'vue-router'
import App from './App'
import HomeReal from './components/HomeReal'
import CreateProduct from './components/CreateProduct'
import GetProduct from './components/GetProduct'


const router = new vueRouter({
        mode: 'history',
        base: __dirname,
        routes:[
            {
                path: '/',
                name: "root",
                component: App
            },
            {
                path:'/home',
                name: 'home',
                component: HomeReal
            },
            {
                path:'/create/product',
                name: 'createProduct',
                component: CreateProduct
            },
            {
                path: '/get/product',
                name: 'getProduct',
                component: GetProduct
            },
            
        ]
    }
)

export default router