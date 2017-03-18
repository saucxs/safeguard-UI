/**
 * Created by BFD-638 on 2017/3/13.
 */
/**
 * Created by BFD-638 on 2017/3/13.
 */
import React, { Component } from 'react'
import update from 'react-update'
import Input from 'bfd/Input'
import Button from 'bfd/Button'
import AutoComplete from 'bfd/AutoComplete'
import './index.less'

class Auto_Complete extends Component {

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
                <h2>自动完成AutoComplete</h2>
                <div className=" bfd-col--md-12">
                    <div className="button1">
                        <p>基本功能</p>
                        <div className="demo_content">
                            <AutoComplete placeholder="输入关键词" source={['hello', 'welcome','coding','world']} />
                        </div>
                        <div className="demo_code_title">
                            <Button icon="plus" transparent onClick={::this.codeDetail}>{this.state.name}</Button>
                        </div>
                        <div className={this.state.name_test}>
                            import AutoComplete from 'bfd/AutoComplete'<br/>
                            ..........
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auto_Complete
