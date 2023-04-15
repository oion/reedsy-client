import PageHome from './components/PageHome.vue'
import PageTopBooks from './components/PageTopBooks.vue'
import Book from './components/Book.vue'

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: PageHome },
  { path: '/top-books', name: 'TopBooks', component: PageTopBooks, },
  { path: '/book/:slug', name: "Book", component: Book, meta: { transition: 'zoom-in' }, },
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
})
