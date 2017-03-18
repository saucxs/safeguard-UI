import React, { Component } from 'react'
import update from 'react-update'
import Input from 'bfd/Input'
import Button from 'bfd/Button'
import List from './List'
import './index.less'

class Todos extends Component {

  constructor() {
    super()
    this.update = update.bind(this)
    this.state = {
      list: [],
      name:'显示',
      name_test:'no_show',
    }
  }
  //list change
  handleListChange(type, value) {
    this.update(type, 'list', value)
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
    const { update, state } = this
    const { text, list } = state
    return (
      <div className="todos">
        <Input onChange={e => update('set', 'text', e.target.value)} />
        <Button onClick={() => update('push', 'list', text)}>添加</Button>
        <List data={list} onChange={::this.handleListChange} />

        <h2>按钮Button</h2>
        <div className=" bfd-col--md-6">
          <div className="button1">
            <p>按钮类型</p>
            <div className="demo_content">
              <Button>默认</Button>
              <Button type="minor">次要</Button>
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
                {/*{require(`babel-loader!./Code/button.txt`).default}*/}
                babel-loader导入代码出问题
            </div>
          </div>

          <div className="button2">
            <p>图标按钮</p>
            <div className="demo_content">
              <Button icon="plus">添加</Button>
              <Button icon="align-left" />
            </div>
            <div className="demo_desc">
              如果需要自定义图标位置，结合使用 Icon 组件
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Button from 'bfd/Button'
            </div>
          </div>

          <div className="button3">
            <p>transparent</p>
            <div className="demo_content">
              <Button icon="plus" transparent />
              <Button icon="align-left" transparent />
            </div>
            <div className="demo_desc">
              文字颜色继承父级，背景透明
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Button from 'bfd/Button'
            </div>
          </div>
        </div>

        <div className=" bfd-col--md-6">
          <div className="button1">
            <p>按钮尺寸</p>
            <div className="demo_content">
              <Button size="lg">大尺寸</Button>
              <Button>默认</Button>
              <Button size="sm">小尺寸</Button>
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Button from 'bfd/Button'
            </div>
          </div>
          <div className="button2">
            <p>图形按钮</p>
            <div className="demo_content">
              <Button icon="plus" circle />
              <Button circle>赞</Button>
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Button from 'bfd/Button'
            </div>
          </div>

          <div className="button3">
            <p>不可用</p>
            <div className="demo_content">
              <Button disabled>不可用</Button>
              <Button icon="plus" disabled />
            </div>
            <div className="demo_code_title">
              <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
            </div>
            <div className={this.state.name_test}>
              /** @jsx React.DOM */
              import Button from 'bfd/Button'
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Todos
