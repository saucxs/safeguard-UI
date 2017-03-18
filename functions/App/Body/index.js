import React, { Component } from 'react'
import { Nav, NavItem } from 'bfd/Nav'
import { Layout, LayoutSidebar, LayoutContent } from 'public/Layout'
import './index.less'

class Body extends Component {

  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  toggle(open) {
    this.setState({ open })
  }

  render() {
    const { open } = this.state
    const { children } = this.props
    return (
      <div className="body">
        <Layout open={open} onToggle={open => this.toggle(open)}>
          <LayoutSidebar>
            <Nav href="/" onItemClick={() => this.toggle(false)}>
              <NavItem href="overview" icon="th" title="基础组件" defaultOpen>
                <NavItem href="overview/todos" title="按钮 Button" />
                <NavItem href="overview/input01" title="输入框 Input" />
                <NavItem href="overview/datatable_01" title="数据表格 DataTable_01" />
                <NavItem href="overview/datatable_02" title="数据表格 DataTable_02" />
                <NavItem href="overview/percent" title="环状百分比 Percentage" />
              </NavItem>
              <NavItem href="exchange" icon="exchange" title="交互进阶" defaultOpen>
                <NavItem href="exchange/auto_complete" title="自动完成 Auto Complete"></NavItem>
              </NavItem>
              <NavItem href="business" icon="group" title="业务定制" defaultOpen>
                <NavItem href="business/navigation" title="导航 Navigation"></NavItem>
              </NavItem>
              <NavItem href="tool" icon="wrench" title="工具模块" defaultOpen>
                <NavItem href="tool/data" title="Ajax 请求 xhr"></NavItem>
                <NavItem href="tool/fetchdata" title="Ajax 加载管理 fetch"></NavItem>
                <NavItem href="tool/search" title="search"></NavItem>
              </NavItem>
            </Nav>
          </LayoutSidebar>
          <LayoutContent>{children}</LayoutContent>
        </Layout>
      </div>
    )
  }
}

export default Body
