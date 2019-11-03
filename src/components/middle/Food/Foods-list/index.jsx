/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'



export default class Foods_list extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="foods-list">
                <div className="list-box">
                    <ul className="clearfix">
                        <li>
                            <p className="goods-img">
                                <img src={require('../Foods-list/home_2.png')} />                         
                            </p>
                            <div className="foods-int">
                                <div className="int-name">同仁堂牌  枸杞子枸杞王500g</div>
                                <p className="price clearfix">
                                    <span className="new_price fl">¥ 59.00</span>
                                     <span className="old_price fr">¥ 79.00</span>
                                </p>
                            </div>
                            <div className="cart">
                                <div className="cart-box">
                                    <i className="cart-icon iconfont icon-gouwu"></i>
                                     <span>&nbsp;加入购物车</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="goods-img">
                                <img src={require('../Foods-list/home_2.png')} />                         
                            </p>
                            <div className="foods-int">
                                <div className="int-name">同仁堂牌  枸杞子枸杞王500g</div>
                                <p className="price clearfix">
                                    <span className="new_price fl">¥ 59.00</span>
                                     <span className="old_price fr">¥ 79.00</span>
                                </p>
                            </div>
                            <div className="cart">
                                <div className="cart-box">
                                    <i className="cart-icon iconfont icon-gouwu"></i>
                                     <span>&nbsp;加入购物车</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="goods-img">
                                <img src={require('../Foods-list/home_2.png')} />                         
                            </p>
                            <div className="foods-int">
                                <div className="int-name">同仁堂牌  枸杞子枸杞王500g</div>
                                <p className="price clearfix">
                                    <span className="new_price fl">¥ 59.00</span>
                                     <span className="old_price fr">¥ 79.00</span>
                                </p>
                            </div>
                            <div className="cart">
                                <div className="cart-box">
                                    <i className="cart-icon iconfont icon-gouwu"></i>
                                     <span>&nbsp;加入购物车</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p className="goods-img">
                                <img src={require('../Foods-list/home_2.png')} />                         
                            </p>
                            <div className="foods-int">
                                <div className="int-name">同仁堂牌  枸杞子枸杞王500g</div>
                                <p className="price clearfix">
                                    <span className="new_price fl">¥ 59.00</span>
                                     <span className="old_price fr">¥ 79.00</span>
                                </p>
                            </div>
                            <div className="cart">
                                <div className="cart-box">
                                    <i className="cart-icon iconfont icon-gouwu"></i>
                                     <span>&nbsp;加入购物车</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
     

}
