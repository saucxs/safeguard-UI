/**
 * Created by BFD-638 on 2017/3/13.
 */
import React, { Component } from 'react'
import update from 'react-update'
import Input from 'bfd/Input'
import Button from 'bfd/Button'
import './index.less'

class Input01 extends Component {

    constructor() {
        super()
        this.update = update.bind(this)
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
        const { update, state } = this
        const { text, list } = state
        return (
            <div className="todos">
                <h2>输入框Input</h2>
                <div className=" bfd-col--md-6">
                    <div className="button1">
                        <p>尺寸</p>
                        <div className="demo_content">
                            <Input placeholder="小尺寸" size="sm" />
                            <br/><br/>
                            <Input placeholder="正常" />
                            <br/><br/>
                            <Input placeholder="大尺寸" size="lg" />
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

                <div className=" bfd-col--md-6">
                    <div className="button1">
                        <p>不可用</p>
                        <div className="demo_content">
                            <Input placeholder="不可用" disabled />
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

export default Input01
