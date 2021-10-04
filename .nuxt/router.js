import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5b4207a9 = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _9ef4053e = () => interopDefault(import('../pages/articles/page/_number.vue' /* webpackChunkName: "pages/articles/page/_number" */))
const _598b6661 = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _e9e65d6a = () => interopDefault(import('../pages/articles/_tags/_tag.vue' /* webpackChunkName: "pages/articles/_tags/_tag" */))
const _2e6f14b9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _5b4207a9,
    name: "articles"
  }, {
    path: "/articles/page/:number?",
    component: _9ef4053e,
    name: "articles-page-number"
  }, {
    path: "/articles/:slug",
    component: _598b6661,
    name: "articles-slug"
  }, {
    path: "/articles/:tags/:tag?",
    component: _e9e65d6a,
    name: "articles-tags-tag"
  }, {
    path: "/",
    component: _2e6f14b9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
