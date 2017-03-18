/**
 * Created by BFD-638 on 2017/3/13.
 */
import React, { Component } from 'react'
import xhr from 'bfd/xhr'
import Button from 'bfd/Button'
import SearchInput from 'bfd/SearchInput'

class Data extends Component {

    constructor() {
        super()
        this.state = {
            test: '我是测试数据'
        }
    }

    handClick() {
        xhr({
            type: 'GET',
            url: 'test.json',
            success: (res) => {
                this.setState({
                    test: res[4].x
                })
            },
        })
    }
    handleSearch(value) {
        this.context.router.push({
            pathname: '/search',
            query: { kw: value },
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.test}</div>
                <Button onClick={::this.handClick}>Ajax测试</Button>
                <SearchInput placeholder="请输入关键词" onSearch={::this.handleSearch} />
            </div>
        )
    }
}

export default Data
