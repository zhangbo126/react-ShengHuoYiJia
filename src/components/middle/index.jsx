/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import {Link,Route,Redirect,NavLink,Switch} from 'react-router-dom'
import Home from './Home'
import Life from './Life'
import Furnishing from './Furnishing'
import Food from './Food'
import Articles from './Articles'
import Vip from './Vip'
import My from './My'
import Account from './Account'

export default class Middle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="middle">
            <div className="navBox">
                <div className="nav">
                    <ul className="clearfix" id="tab">
                        <li className=""><NavLink to="/home">首页</NavLink></li>
                        <li><NavLink to="/life">精彩生活 </NavLink></li>
                        <li><NavLink to="/food"> 生活食品</NavLink> </li>
                        <li><NavLink to="/fumishing"> 生活用品</NavLink></li>
                        <li><NavLink to="/articles"> 生活家居</NavLink></li>
                        <li><NavLink to="/vip"> 会员杂锦</NavLink></li>
                        <li><NavLink to="/my"> 关于我们</NavLink></li>                
                    </ul>
                </div>                                           
            </div>
            {/* 路由展示区 */}
                         <Switch>                          
                            <Route exact path="/home" component={Home}></Route>
                            <Route path="/life" component={Life}></Route>
                            <Route path="/fumishing" component={Furnishing}></Route>
                            <Route path="/food" component={Food}></Route>
                            <Route path="/articles" component={Articles}></Route>
                            <Route path="/vip" component={Vip}></Route>
                            <Route path="/my" component={My}></Route>
                            <Route path="/account" component={Account}></Route>
                            {/* <Redirect to="/home"></Redirect> */}
                        </Switch>   
            </div>
        )
    }


}
