/**
 * Created by BFD-638 on 2017/3/14.
 */
import React, { Component } from 'react'
import update from 'react-update'
import Button from 'bfd/Button'
import { Nav, IndexNavItem, NavItem } from 'bfd/Nav'
import Fetch from 'bfd/Fetch'
import { Select, Option } from 'bfd/Select'
import './index.less'

class FetchData extends Component {

    constructor() {
        super()
        this.update = update.bind(this)
        this.state = {
            name:'显示',
            name_test:'no_show',
            //num one
            h2:'Ajax 加载管理 Fetch',
            p:'基本功能',
            url:'loading.json',
            data:[]

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
    //select change
    handleChange(value){
        this.setState({url:'loading.json?type=' + value})
    }

    render() {
            const { url, data } = this.state
        return (
            <div className="todos">
                <h2>{this.state.h2}</h2>
                <div className=" bfd-col--md-12">
                    <div className="button1">
                        <p>{this.state.p}</p>
                        <div className="demo_content">
                            <Select defaultValue="0" onChange={::this.handleChange}>
                                <Option value="0">昨天</Option>
                                <Option value="1">最近7天</Option>
                                <Option value="2">最近30天</Option>
                            </Select>
                            <Fetch
                                defaultHeight={70}
                                url={url}
                                onSuccess={data => {this.setState({ data })}}
                                delay={500}
                            >
                                <ol>
                                    {data.map(item => <li key={item.event}>{item.event}</li>)}
                                </ol>
                            </Fetch>
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

export default FetchData
