import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeRoute',
      component: Home
    },
    {
      path: '/quiz',
      name: 'PlanetsQuizRoute',
      // route level code-splitting
      // this generates a separate chunk (planetsQuiz.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "planetsQuiz" */ './views/PlanetsQuiz/index')
    }
  ]
})
