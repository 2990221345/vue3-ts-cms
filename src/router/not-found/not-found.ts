const notFound = () => import('@/views/not-found/not-found.vue')
export default {
  path: '/not-found',
  name: 'not-found',
  component: notFound,
  children: []
}
