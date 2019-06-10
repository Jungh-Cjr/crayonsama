import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _5e6a741b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _13f3f600 = () => interopDefault(import('..\\pages\\crayon-music.vue' /* webpackChunkName: "pages_crayon-music" */))
const _707479ee = () => interopDefault(import('..\\pages\\crayon-yys.vue' /* webpackChunkName: "pages_crayon-yys" */))
const _08f0a951 = () => interopDefault(import('..\\pages\\diary.vue' /* webpackChunkName: "pages_diary" */))
const _1736a474 = () => interopDefault(import('..\\pages\\doc.vue' /* webpackChunkName: "pages_doc" */))
const _c846a7c6 = () => interopDefault(import('..\\pages\\docs.vue' /* webpackChunkName: "pages_docs" */))
const _669ee80a = () => interopDefault(import('..\\pages\\m.vue' /* webpackChunkName: "pages_m" */))
const _fa881448 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages_projects" */))
const _51585b6c = () => interopDefault(import('..\\pages\\propage.vue' /* webpackChunkName: "pages_propage" */))
const _a00f569c = () => interopDefault(import('..\\pages\\xxsc.vue' /* webpackChunkName: "pages_xxsc" */))
const _c992e5e4 = () => interopDefault(import('..\\pages\\zone.vue' /* webpackChunkName: "pages_zone" */))
const _7e224ee0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _5e6a741b,
      name: "about"
    }, {
      path: "/crayon-music",
      component: _13f3f600,
      name: "crayon-music"
    }, {
      path: "/crayon-yys",
      component: _707479ee,
      name: "crayon-yys"
    }, {
      path: "/diary",
      component: _08f0a951,
      name: "diary"
    }, {
      path: "/doc",
      component: _1736a474,
      name: "doc"
    }, {
      path: "/docs",
      component: _c846a7c6,
      name: "docs"
    }, {
      path: "/m",
      component: _669ee80a,
      name: "m"
    }, {
      path: "/projects",
      component: _fa881448,
      name: "projects"
    }, {
      path: "/propage",
      component: _51585b6c,
      name: "propage"
    }, {
      path: "/xxsc",
      component: _a00f569c,
      name: "xxsc"
    }, {
      path: "/zone",
      component: _c992e5e4,
      name: "zone"
    }, {
      path: "/",
      component: _7e224ee0,
      name: "index"
    }],

    fallback: false
  })
}
