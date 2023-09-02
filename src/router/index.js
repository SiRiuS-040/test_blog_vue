import { createRouter, createWebHashHistory  } from 'vue-router'
import ViewHome from '../views/ViewHome.vue'
import ViewArticleItem from '../views/ViewArticleItem.vue'

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
          component: ViewArticleItem,
          props: true,
        }
      ]
    },
  ]
};

const router = createRouter(routerOptions)

export default router
