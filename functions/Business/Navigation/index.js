/**
 * Created by BFD-638 on 2017/3/14.
 */
import React, { Component } from 'react'
import update from 'react-update'
import Button from 'bfd/Button'
import { Nav, IndexNavItem, NavItem } from 'bfd/Nav'
import './index.less'

class Navigation extends Component {

    constructor() {
        super()
        this.update = update.bind(this)
        this.state = {
            name:'显示',
            name_test:'no_show',
            //num one
            h2:'导航Navigation',
            p:'基本功能',

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
        const { update, state } = this
        const { text, list } = state
        return (
            <div className="todos">
                <h2>{this.state.h2}</h2>
                <div className=" bfd-col--md-12">
                    <div className="button1">
                        <p>{this.state.p}</p>
                        <div className="demo_content">
                            <Nav href="/">
                                <IndexNavItem icon="th" title="数据概况" />
                                <NavItem href="users" icon="users" title="人群管理" defaultOpen>
                                    <NavItem href="users/list" title="人群列表" />
                                    <NavItem href="users/task" title="任务管理" />
                                </NavItem>
                            </Nav>
                        </div>
                        <div className="demo_code_title">
                            <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
                        </div>
                        <div className={this.state.name_test}>
                            /** @jsx React.DOM */
                            import  Nav, IndexNavItem, NavItem  from 'bfd/Nav'
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navigation
