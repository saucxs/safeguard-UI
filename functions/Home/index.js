/**
 * Created by BFD-638 on 2017/3/18.
 */
import React from 'react'
import {Link} from 'react-router'
import Button from 'bfd/Button'
import Center from 'public/Center'
import {Row,Col} from 'bfd/Layout'
import Pre from 'public/Pre'
import Feature from './Feature'
import './index.less'


export default () => {
  const code = `import DatePicker from 'bfd/DatePicker'

class App extends Component {

  handleSelect(date) {
    console.log(date)
  }

  render() {
    return <DatePicker onSelect={this.handleSelect} />
  }
}`
    return (
      <div className="home">
        <div className="home_banner">
          <Center>
            <div className="home_banner_center">
              <h2>safeguard-UI React 组件库</h2>
              <h1>构建自己的脚手架</h1>
              <em>版本：V0.01</em>
              <Link to="/guide#install" className="home_banner_install">
                <Button>安装</Button>
              </Link>
              <Link to="/guide" className="home_bannner_start">
                <Button>开始</Button>
              </Link>
            </div>
          </Center>
        </div>

        <div className="home_middle">
          <Center>
            <Row gutter>
              <Col col="md-6" className="home_middle_left">
                <h2>前端自动化构建方案</h2>
                <p>结合脚手架进行快速的开发单页面应用，组件，可视化，前后端分离等特性的项目。</p>
              </Col>
              <Col col="md-6" >
                <Pre className="home_middle_code">{code}</Pre>
              </Col>
            </Row>
          </Center>
        </div>

        <div className="home_features">
          <Center>
            <div className="home_features_head">
              <h1>组件化开发</h1>
              <p>UI组件抛弃了传统的组件封装方式，基于React组件开发开发思想，语义化UI的同时 </p>
            </div>
            <Row>
              <Feature title="组件化" icon={require('./img/feature_0.png')}>
                基于React组件开发思想，简单，灵活，高效
              </Feature>
              <Feature title="覆盖广" icon={require('./img/feature_1.png')}>
                覆盖基础组件，高级交互，以及计划推广数据可视化组件
              </Feature>
              <Feature title="生态完整" icon={require('./img/feature_2.png')}>
                搭配脚手架，摆脱繁琐环境配置，重复的基础工作
              </Feature>
              <Feature title="完全免费" icon={require('./img/feature_3.png')}>
                基于协议，免费开源
              </Feature>
            </Row>
          </Center>
        </div>

        <div className="home_bottom">
          <Center>
            <h1>巨人的肩膀，无所不能</h1>
            <p>UI涉及</p>
          </Center>
        </div>
      </div>
    )
}
