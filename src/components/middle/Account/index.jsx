/* eslint-disable no-undef */
import React from 'react'
import './index.css'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import User_1 from './User_1'
import User_2 from './User_2'
import User_3 from './User_3'
import User_4 from './User_4'
import User_5 from './User_5'
import User_6 from './User_6'
import User_7 from './User_7'
import User_8 from './User_8'



export default class Account extends React.Component{

    constructor(props){
        super(props)
        this.state={
            isSing:true, //判断是否登录
        }
    }

    componentDidMount(){
           
         let b =localStorage.getItem('users')
         let user = JSON.parse(b)
        //  console.log(user.isSign)
         if(user.isSign==true && b !=null){
            this.setState({
                isSing:false
             })
         }else{
            this.setState({
                isSing:true
             }) 
         }

    }

    render(){
        return(
            <div className="account" >
        <div id="pag8" className="pag">           
            <div className="personal clearfix">
                <ul className="personalL fl" id="group">
                    <li className="means"><NavLink to='/account/user_1'>基本资料</NavLink></li>
                    <li><NavLink to="/account/user_2">升级会员</NavLink></li>
                    <li><NavLink to="/account/user_3">我的订单</NavLink></li>
                    <li><NavLink to="/account/user_4">我的钱包</NavLink></li>
                    <li><NavLink to="/account/user_5">我的收藏</NavLink></li>
                    <li><NavLink to="/account/user_6">收货地址</NavLink></li>
                    <li><NavLink to="/account/user_7">帮助中心</NavLink></li>
                    <li><NavLink to="/account/user_8">意见反馈</NavLink></li>
                </ul>
                <div className="personalR fr" >
                        <div hidden={this.state.isSing}>
                         <Route path="/account/user_1" component={User_1}></Route> 
                         <Route path="/account/user_2" component={User_2}></Route>            
                         <Route path="/account/user_3" component={User_3}></Route>
                         <Route path="/account/user_4" component={User_4}></Route>
                         <Route path="/account/user_5" component={User_5}></Route>
                         <Route path="/account/user_6" component={User_6}></Route>
                         <Route path="/account/user_7" component={User_7}></Route>
                         <Route path="/account/user_8" component={User_8}></Route> 
                                     
                         </div>
                         <div hidden={!this.state.isSing} className="Notlogged">
                             <h2>你还未登录请先<a href="/sign">登录</a>查看个人信息</h2>                
                        </div>
                  </div>
                  
                </div>           
              </div>
            </div>
        )
    }
     

}
