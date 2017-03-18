import './index.less'
import React, { PropTypes, Component } from 'react'
import { Row, Col } from 'bfd/Layout'
import { Link,IndexLink, browserHistory } from 'react-router'
import xhr from 'bfd/xhr'
import auth from 'public/auth'

class Header extends Component {

  handleLogout(e) {
    e.preventDefault()
    xhr({
      url: 'user/logout',
      success: () => {
        auth.destroy()
        browserHistory.push({
          pathname: '/login',
          state: {
            referrer: this.props.location.pathname
          }
        })
      }
    })
  }
  renderNav(){
    return(
      <ul>
        <li>
          <IndexLink to="/" activeClassName="active">首页</IndexLink>
        </li>
        <li>
          <Link to="/guide" activeClassName="active">指南</Link>
        </li>
        <li>
          <Link to="/components" activeClassName="active">组件</Link>
        </li>
        <li>
          <Link to="/changelog" activeClassName="active">更新日志</Link>
        </li>
        <li>
          <Link to="/scaffold" activeClassName="active">脚手架</Link>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <Row className="header" fluid>
        <Col>
          <Link to="/" className="header__logo">
            safeguard-UI<sub>v0.0.1</sub>
          </Link>
        </Col>
        <Col className="header_nav">
          {this.renderNav()}
        </Col>
        <Col className="header__right" right>
          欢迎您，{auth.user.name} &nbsp;|&nbsp;
          <a href="" onClick={::this.handleLogout}>安全退出</a>
        </Col>
      </Row>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Header
