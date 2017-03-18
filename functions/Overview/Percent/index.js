/**
 * Created by BFD-638 on 2017/3/17.
 */
import React,{Component} from 'react'
import Percentage from 'bfd/Percentage'
import Button from 'bfd/Button'
import { Row, Col } from 'bfd/Layout'
import  './index.less'

class Percent extends Component{
  constructor(props){
    super()
    this.state = {
      name:'显示',
      name_test:'no_show',
    }
  }
  //show or hidden
  codeDetail() {
    if (this.state.name == '显示' && this.state.name_test == 'no_show') {
      this.setState({name: '隐藏'});
      this.setState({name_test: 'show'})
    }
    else {
      this.setState({name: '显示'});
      this.setState({name_test: 'no_show'})
    }
  }

  render() {
    return (
      <div className="todos">
        <h2>环形百分比</h2>
        <div className=" bfd-col--md-12">
          <div className="button1">
            <p>基本功能</p>
            <div className="demo_content">
              <Row gutter fluid>
                <Col>
                  <Percentage width={100} percent={45} />
                </Col>
                <Col>
                  <Percentage width={100} percent={10} foreColor="#ffa726" />
                </Col>
                <Col>
                  <Percentage width={100} percent={60} foreColor="#00bcd4" />
                </Col>
              </Row>
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Input from 'bfd/Input'
            </div>
          </div>
        </div>
      </div>
    )
}
}

export default Percent
