/**
 * Created by BFD-638 on 2017/3/14.
 */
import React, { Component } from 'react'
import DataTable from 'bfd/DataTable2'
import xhr from 'bfd/xhr'
import './index.less'

class DataTable_02 extends Component{
    constructor(props) {
        super()
        // this.state.data = [];
      this.state={
          data:[]
      }
        this.columns = [{
            title: '姓名',
            key: 'name',
            width: '20%'
        }, {
            title: '性别',
            render: item => item.sex ? '👨' : '👩',
            width: '15%'
        }, {
            title: '年龄',
            key: 'age',
            sortable: true,
            width: '15%'
        }, {
            title: '注册日期',
            key: 'joinDate',
            sortable: true,
            width: '15%'
        }, {
            title: '操作',
            render: () => <a href="">删除</a>,
            width: '15%'
        }]
        //this is a test_data
    }

    componentWillMount(props){
     xhr({
      type: 'GET',
      url: 'test_dataTable_two.json',
      success: (res) => {
        console.log(res);
        this.setState({
          data: res
        })
      },
    })
    }

    render() {
        return (
            <DataTable columns={this.columns} data={this.state.data} pageSize={5} />
        )
    }

}
export default DataTable_02
