
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('src/pages/Login.vue') },
      { path: 'Login', name: 'login', component: () => import('src/pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('src/pages/Register.vue') },
      { path: 'email-confirmation', name: 'email-confirmation', component: () => import('src/pages/emailconfirmation.vue') },
      { path: 'forgot-password', name: 'forgot-password', component: () => import('pages/ForgotPassword.vue') },
      { path: 'reset-password', name: 'reset-password', component: () => import('pages/ResetPassword.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'me', name: 'me', component: () => import('pages/Me.vue') },
      { path: 'category', name: 'category', component: () => import('pages/category/list.vue') },
      { path: 'form-category', name: 'form-category', component: () => import('pages/category/Form.vue') },
      { path: 'form-config/:id?', name: 'form-config', component: () => import('pages/config/Form.vue') }
    ],
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
