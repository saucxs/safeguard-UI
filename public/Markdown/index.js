/**
 * Created by Safeguard on 2017/3/23.
 */
import React,{PropTypes} from 'react'
import classnames from 'classnames'

const Markdowm = props=>{
  const {className,html,...other}=props
  return(
    <div
      className={classnames('markdown',className)}
      dangerouslySetInnerHTML={{__html:html}}
      {...other}
    />
  )
}

Markdowm.propTypes ={
  html:PropTypes.string
}

export default Markdowm
