
/**
 * Created by BFD-638 on 2017/3/16.
 */
/**
 * Created by BFD-638 on 2017/3/13.
 */
import React, { Component } from 'react'
import xhr from 'bfd/xhr'
import Button from 'bfd/Button'
import SearchInput from 'bfd/SearchInput'

class Search extends Component {

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

    render() {
        return (
            <div>
                <div>{this.state.test}</div>
                <Button onClick={::this.handClick}>Ajax测试</Button>
            </div>
        )
    }
}

export default Search