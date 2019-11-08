import React from 'react'
import './index.css'





class Collection extends React.Component{

    constructor(props){
       super(props)
       this.state={
           
       }
    }


 





    render(){

        return(
           
           <div className="collection">
                <div className="collection-titel">
                   <p>
                   我的收藏
                   </p>
                </div>
                <div className="coll-item">
                    <ul className="coll-box">
                        <li >
                            <div className="coll-img"><img src={require('../money.png')} /></div>
                              <div className="coll-txt">
                              <div className="coll-name">
                                <p> 同仁堂牌  枸杞子枸杞王500g</p>
                            </div>
                            <div className="coll-price clearfix">
                                <span className="new-price fl">¥ 59.00</span>
                                <span className="old-price fr">¥ 79.00</span>
                            </div>
                            <div className="cart">
                               
                                <button> <i className="iconfont icon-gouwu"></i>加入购物车</button>
                            </div>
                              </div>
                        </li>
                        <li >
                            <div className="coll-img"><img src={require('../money.png')} /></div>
                              <div className="coll-txt">
                              <div className="coll-name">
                                <p> 同仁堂牌  枸杞子枸杞王500g</p>
                            </div>
                            <div className="coll-price clearfix">
                                <span className="new-price fl">¥ 59.00</span>
                                <span className="old-price fr">¥ 79.00</span>
                            </div>
                            <div className="cart">
                               
                                <button> <i className="iconfont icon-gouwu"></i>加入购物车</button>
                            </div>
                              </div>
                        </li>
                        <li >
                            <div className="coll-img"><img src={require('../money.png')} /></div>
                              <div className="coll-txt">
                              <div className="coll-name">
                                <p> 同仁堂牌  枸杞子枸杞王500g</p>
                            </div>
                            <div className="coll-price clearfix">
                                <span className="new-price fl">¥ 59.00</span>
                                <span className="old-price fr">¥ 79.00</span>
                            </div>
                            <div className="cart">
                               
                                <button> <i className="iconfont icon-gouwu"></i>加入购物车</button>
                            </div>
                              </div>
                        </li>
                        <li >
                            <div className="coll-img"><img src={require('../money.png')} /></div>
                              <div className="coll-txt">
                              <div className="coll-name">
                                <p> 同仁堂牌  枸杞子枸杞王500g</p>
                            </div>
                            <div className="coll-price clearfix">
                                <span className="new-price fl">¥ 59.00</span>
                                <span className="old-price fr">¥ 79.00</span>
                            </div>
                            <div className="cart">
                               
                                <button> <i className="iconfont icon-gouwu"></i>加入购物车</button>
                            </div>
                              </div>
                        </li>
                    </ul>  
                </div>
           </div>
        )
    }

}

export default  Collection