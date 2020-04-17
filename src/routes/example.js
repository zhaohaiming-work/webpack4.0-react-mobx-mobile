import mergeRoute from 'components/merge-routes'
import { Home, Test } from 'pages/example'
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
