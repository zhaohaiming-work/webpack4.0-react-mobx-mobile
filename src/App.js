import './styles'
import React, { Suspense, lazy } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'components/loadable'
import FastClick from 'fastclick'
import store from 'store'
import { Provider } from 'mobx-react'
import Home from 'pages/home'
import PageLayout from 'layout'
import Base from './routes'
import ErrorBoundary from 'components/error-boundary'
const Login = lazy(() => import('pages/login/index'))
const NotFound = lazy(() => import('components/404'))

class App extends React.Component {
  componentDidMount () {
    // 初始化快速点击
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body)
      }, false)
    }
  }
  render () {
    return (
      <ErrorBoundary>
        <Provider {...store}>
          <HashRouter>
            <Suspense fallback={Loadable}>
              <Switch>
                <Route path='/login' component={Login} />
                <Route path='/' component={({ match }) => (
                  <PageLayout>
                    <Switch>
                      <Route exact path={match.url} component={Home} />
                      {Base}
                      <Route component={NotFound} />
                    </Switch>
                  </PageLayout>
                )} />
              </Switch>
            </Suspense>
          </HashRouter>
        </Provider>
      </ErrorBoundary>
    )
  }
}
export default App
