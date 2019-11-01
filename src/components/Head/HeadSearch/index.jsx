/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import logo from './logo.png'

export default class HeadSearch extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="searchBox">
            <div className="search clearfix">
                <div className="logo fl">
                    <img src={logo} />

                    </div>
                <div className="searchBtn  fr">
                    <button>一键客服</button>	
                    <button className="shoppcar"><span className="iconfont icon-gouwu"></span>
                    购物车</button>
                    </div>
                <div className="searchMiddle clearfix">
                    <div className="select fl">
                     <span>广州</span>&nbsp;<span className="iconfont icon-xia"></span>
                 </div>
                    <div className="inp fl">
                            <div className="fl inptxt">
                             <input type="text" placeholder="请输入产品名称" />
                         </div>
                            <div className="inpBtn fl">
                                <button>搜索</button>
                            </div>
                    </div>
                </div>
            </div>
     
       
         </div>
        )
    }
     

}
