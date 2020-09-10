import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Product from '../views/Product.vue'

Vue.use(VueRouter)

// ovde je definisan niz objekata
// koji predstavljaju pravila rutiranja
// u zavisnosti od toga koja je URL adresa 
// na mesto router-view komponente bice prikazana
// neka druga komponenta definisana kao vrednost
// component atributa ovih objekata
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  // ukoliko je za neki parametar postavljen simbol :
  // onda se radi o dinamickom rutiranju, pri cemu
  // je naziv parametra samo naziv parametra a ne i 
  // eksplicitna vrednost koja mora stojati 
  // kao sto je slucaj sa ostalim rutama
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router
