/**
 * Created by BFD-638 on 2017/3/18.
 */
import React from 'react'
import {Col} from 'bfd/Layout'
import './index.less'

export default props=>{
  const {icon,title,children,...other}=props
  return(
    <Col col="md-3 sm-6" className="home_feature" {...other}>
      <image width="100" height="100" src={icon}></image>
      <h2>{title}</h2>
      <p>{children}</p>
    </Col>
  )
}
