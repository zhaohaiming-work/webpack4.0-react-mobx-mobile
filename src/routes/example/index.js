import React from 'react'
import mergeRoute from 'components/merge-routes'
const Home = React.lazy(() => import('./tmpl/home-page'))
const Test = React.lazy(() => import('./tmpl/test'))
export default mergeRoute([
  {
    path: '/example',
    tmpl: Home
  },
  {
    path: '/example/test',
    tmpl: Test
  },
])
