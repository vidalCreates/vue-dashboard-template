import Vue from 'vue'
import Router from 'vue-router'
// Views
import Auth from './views/Auth.vue'
import Settings from './views/Settings.vue'

// Regular Views
import Home from './views/regular/Home.vue'
import Others from './views/regular/Others.vue'
import SelectedOther from './views/regular/SelectedOther.vue'

// Admin Views
import Dashboard from './views/admin/Dashboard.vue'

import ManageUsers from './views/admin/ManageUsers.vue'
import AllUsers from './views/admin/users/All.vue'
import NewUser from './views/admin/users/New.vue'
import EditUser from './views/admin/users/Edit.vue'

import OtherAdmin from './views/admin/Other.vue'

// Fallbacks
import NotFound from './views/fallbacks/NotFound.vue'
import NotAuthorized from './views/fallbacks/NotAuthorized.vue'
import NotAuthenticated from './views/fallbacks/NotAuthenticated.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signIn',
      component: Auth,
      meta: {requiresAuth: false}
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {requiresAuth: true, roles: ['regular']}
    },
    {
      path: '/others',
      name: 'others',
      component: Others,
      meta: {requiresAuth: true, roles: ['regular']}
    },
    {
      path: '/others/:id',
      name: 'selectedOther',
      component: SelectedOther,
      meta: {requiresAuth: true, roles: ['regular']}
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: {requiresAuth: true, roles: ['regular', 'admin']}
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true, roles: ['admin']}
    },
    {
      path: '/manageUsers',
      component: ManageUsers,
      meta: {requiresAuth: true, roles: ['admin']},
      children: [
        {
          path: '',
          name: 'allUsers',
          component: AllUsers
        },
        {
          path: 'new',
          name: 'newUser',
          component: NewUser
        },
        {
          path: ':id/edit',
          name: 'editUser',
          component: EditUser
        },
      ]
    },
    {
      path: '/otherAdmin',
      name: 'otherAdmin',
      component: OtherAdmin,
      meta: {requiresAuth: true, roles: ['admin']}
    },
    {
      path: '/401',
      name: 'notAuthorized',
      component: NotAuthorized,
      meta: {requiresAuth: false}
    },
    {
      path: '/403',
      name: 'notAuthenticated',
      component: NotAuthenticated,
      meta: {requiresAuth: false}
    },
    {
      path: '/404',
      name: 'notFound',
      component: NotFound,
      meta: {requiresAuth: false}
    },
    {
      path: '/*',
      name: 'catchAll',
      redirect: { name: 'notFound' },
    }
  ]
})
