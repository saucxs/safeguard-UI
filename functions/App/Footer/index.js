import React from 'react'
import { Row, Col } from 'bfd/Layout'
import './index.less'

export default () => {
  return (
    <Row className="footer" fluid>
      <Col>
        {/*<a href="http://www.baifendian.com" className="footer__logo">*/}
          {/*<img src={require('public/bfd.png')} />*/}
        {/*</a>*/}
        <a href="https://github.com/saucxs">Github主页</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="http://www.cnblogs.com/chengxs">Cnblog博客园</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="http://www.chengxinsong.cn">About me关于我</a>
      </Col>
      <Col right>
        Copyright©2017 saucxs | safeguard eagle Corporation All Rights Reserved
      </Col>
    </Row>
  )
}
