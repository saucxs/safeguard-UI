import 'normalize.css'
import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import classnames from 'classnames'
import classlist from 'classlist'
import { Row, Col } from 'bfd/Layout'
import { Nav, NavItem } from 'bfd/Nav'
import { Dropdown, DropdownToggle, DropdownMenu } from 'bfd/Dropdown'
import Header from './Header'
import Footer from './Footer'
import './index.less'

class App extends Component {

  render() {
    const { children, location, history, routes } = this.props
    const isIndex = !this.props.routes[1].path
    classlist(document.body).toggle('index', isIndex)
        // 登录页和 404 页不渲染 Header
    if (routes[1]) {
      const path = routes[1].path
      if (path === 'login' || path === '*') {
        main = children
      }
    }

    return (
      <div className="wrapper">
        <Header key="header" history={history} location={location} />
        <div className="body">{children}</div>
        <Footer />
      </div>
    )
  }
}

export default App
