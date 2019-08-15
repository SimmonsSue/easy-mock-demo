/*
 * @Description: 
 * @Version: 
 * @Author: xinmou_su
 * @Date: 2019-08-15 14:24:09
 * @LastEditors: xinmou_su
 * @LstEditTime: Do not Edit
 */
import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch'
// const data = Mock.mock({
//     'data|20':[{
//       'goodsId|+1':1,
//       'goodsName':"@ctitle(10)",
//       'goodsTel':/^1(5|3|7|8|[0-9]{9}$)/,
//       'goodsAddress':'@county(true)',
//       "goodsLogo":"@Image('200X100', 'EasyMock')"
//     }]
// })
   
// Mock.mock(/\/shopList/, "post", function(params) {
//     console.log('fecth data:', params)
//     return  data
// })
export class Data extends Component{
    constructor(props) {
        super(props)
        this.state = {data:{}}
    }
    componentDidMount() {
        fetch(' https://easy-mock.com/mock/5d551420d5d2ea46f44e5c8c/example/mock',{
            method:"POST",
            body: JSON.stringify({}), // must match 'Content-Type' header
            headers:{
                'Accept': 'application/json',
        　　　　 'Content-Type': 'application/json',
            }
        })
        .then((res) => {
            let data
            return data = res.json()
        }).then((res) => {
            console.log("state:", res)
            this.setState({data: res.data.data[0]})
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <div style={{width:'500px', height:'200px', backgroundColor:'gray'}}>
                {this.state.data.goodsId}
            </div>
        )
    }
}

