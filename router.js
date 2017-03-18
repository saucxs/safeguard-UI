/**
 * 前端路由配置
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import process from 'nprogress'
import auth from 'public/auth'
import App from './functions/App'

// 用户登录验证
function requireAuth(nextState, replace) {
  const path = nextState.location.pathname
  const loginPath = '/login'
  if (!auth.isLoginIn()) {
    path !== loginPath && replace({
      pathname: '/login',
      state: {
        referrer: path
      }
    })
  }
}

export default render((
  <Router onUpdate={() => {
    process.done()
    window.scrollTo(0, 0)
  }} history={browserHistory}>
    <Route
      path="/"
      onEnter={() => process.start()}
      onChange={() => process.start()}
      component={App}
    >
      {/*init*/}
      <Route path="home" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Home').default)
        })
      }} />
      {/*guide*/}
      <Route path="guide" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Guide').default)
        })
      }} />
      {/*主页*/}
      <Route path="home" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Home').default)
        })
      }} />
      {/*component*/}
      <Route path="components" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Components').default)
        })
      }}>
        <IndexRedirect to="/components/Button"/>
        <Route path=":component" getComponent={(location, cb) => {
          const component = location.pathname.split('/').pop()
          require.ensure([], require => {
            cb(null, require(`./functions/Components/docs/${component}.doc`).default)
          })
        }} />
      </Route>
        {/*  登录  */}
      <Route path="login" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Login').default)
        })
      }} />
      <Route path="*" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/NotFound').default)
        })
      }}/>
    </Route>
  </Router>
), document.getElementById('app'))
