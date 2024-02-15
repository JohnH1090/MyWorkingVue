import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzYptNCMfJq8FR3-fLmKheams8ba7OlWI",
  authDomain: "vue-site-73ef4.firebaseapp.com",
  projectId: "vue-site-73ef4",
  storageBucket: "vue-site-73ef4.appspot.com",
  messagingSenderId: "14715019104",
  appId: "1:14715019104:web:ff68fa5969cbc32e9c0805"
};

initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  },{
    path: '/products',
    component: ProductsPage,
  },{
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
