import Vue from '@vue/compat'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HomeRoute',
    component: Home
  },
  {
    path: '/quiz',
    name: 'PlanetsQuizRoute',
    component: () => import(/* webpackChunkName: "planetsQuiz" */ './views/PlanetsQuiz/index')
  },
  {
    path: '/finish',
    name: 'FinishRoute',
    component: () => import(/* webpackChunkName: "finishQuiz" */ './views/Finish'),
    meta: {
      requireFinishQuiz: true
    }
  }
]

const beforeEachConfig = (store, to, next) => {
  const toMeta = to.meta || {}
  const requireFinishQuiz = toMeta.requireFinishQuiz || false
  const isFinishedQuiz = store.getters.isFinishedQuiz || false

  if (requireFinishQuiz) {
    if (isFinishedQuiz) {
      next()
      return
    }

    next({ name: 'HomeRoute' })
    return
  }

  next()
}

const routerInstance = new Router({
  routes,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default (store) => {
  routerInstance.beforeEach((to, _, next) => beforeEachConfig(store, to, next))

  return routerInstance
}
