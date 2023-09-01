import { createRouter, createWebHashHistory  } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
// import CatalogView from '../views/CatalogView.vue'
// import AboutView from '../views/AboutView.vue'
import ViewArticleItem from '../views/ViewArticleItem.vue'
import PageArticleItem from '../components/PageArticleItem.vue'


const routerOptions = {
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome
    },
    {
      path: '/article',
      component: ViewArticleItem,
      children: [
        {
          path: '/article-:id',
          component: PageArticleItem,
          props: true,
        }
      ]
    },
  ]
};

const router = createRouter(routerOptions)

export default router
