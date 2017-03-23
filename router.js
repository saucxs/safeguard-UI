/**
 * 前端路由配置
 */

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect,IndexRoute, browserHistory } from 'react-router'
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
  <Router
    history={browserHistory}
    onUpdate={() => {
      process.done()
      window.scrollTo(0, 0)
    }}
  >
    <Route
      path="/"
      onEnter={(...args) => {
        requireAuth(...args)
        process.start()
      }}
      onChange={() => process.start()}
      component={App}
     >
      {/*init*/}
      <IndexRoute getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Home').default)
        })
      }} />
      {/*主页*/}
      <Route path="home" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Home').default)
        })
      }} />
      {/*component*/}
      <Route path="todos" getComponent={(location, cb) => {
        require.ensure([], require => {
          cb(null, require('./functions/Overview/Todos').default)
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
        {/*basic commponent*/}
      <Route path="overview">
        <Route path="todos" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Overview/Todos').default)
          })
        }} />
          <Route path="input01" getComponent={(location, cb) => {
          require.ensure([], require => {
              cb(null, require('./functions/Overview/Input01').default)
          })
      }} />
          <Route path="datatable_01" getComponent={(location, cb) => {
              require.ensure([], require => {
                  cb(null, require('./functions/Overview/DataTable_01').default)
              })
          }} />
          <Route path="datatable_02" getComponent={(location, cb) => {
              require.ensure([], require => {
                  cb(null, require('./functions/Overview/DataTable_02').default)
              })
          }} />
        <Route path="percent" getComponent={(location, cb) => {
          require.ensure([], require => {
            cb(null, require('./functions/Overview/Percent').default)
          })
        }} />
      </Route>
        {/*交互进阶*/}
        <Route path="exchange">
            <Route path="auto_complete" getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./functions/Exchange/Auto_Complete').default)
                })
            }} />
        </Route>
        {/*business customization*/}
        <Route path="business">
            <Route path="navigation" getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./functions/Business/Navigation').default)
                })
            }} />
        </Route>
        {/*tool module*/}
        <Route path="tool">
            <Route path="data" getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./functions/Tool/Data').default)
                })
            }} />
            <Route path="fetchdata" getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./functions/Tool/FetchData').default)
                })
            }} />
            <Route path="search" getComponent={(location, cb) => {
                require.ensure([], require => {
                    cb(null, require('./functions/Tool/Search').default)
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
