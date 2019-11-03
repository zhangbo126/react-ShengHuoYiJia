import React from 'react'
import './index.css'
import Foods_list from './Foods-list'



export default class Food extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }


   componentDidMount(){


     fetch('/food',{
         method:"post",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({
             pag:213
         })
     }).then(req=>req.json())
     .then(res=>{

          console.log(res)
     })

   }


    render(){
        return(
            <div className="food" >
                 <div className="food-box clearfix">
                   <div className="food-list fl">
                     <ul>       
                         <li className="food_serch">
                             <p>搜索结果</p>
                         </li>
                         <li>
                             <p>膨化食品</p>
                         </li>
                         <li>
                             <p>无糖食品</p>
                         </li>
                         <li>
                             <p>休闲食品</p>
                         </li>
                         <li>
                             <p>传统糕点</p>
                         </li>
                         <li>
                             <p>无糖食品</p>
                         </li>
                         <li>
                             <p>生活食品</p>
                         </li>
                         <li>
                             <p>水果点心</p>
                         </li>
                         <li>
                             <p> 无糖食品 </p>
                         </li>                   
                     </ul>
                 </div>
                   <div className="goods-box fr">
                      <div className="good_type clearfix">
                          <ul className="fl type_L">
                              <li className="all">
                                  <p>全部</p>
                              </li>
                              <li className="sales">
                                  <p>销量</p>
                                   <div >
                                       <i className="iconfont icon-shangxiajiantou-"></i>
                                   </div>
                              </li>
                              <li className="eval">
                                  <p>评价</p>
                                  <div >
                                  <i className="iconfont icon-shangxiajiantou-"></i>
                                  </div>
                              </li>
                              <li className="price">
                                  <p >价格</p>
                                  <div >
                                  <i className="iconfont icon-shangxiajiantou-"></i>
                                  </div>
                              </li>
                          </ul>
                          <ul className="fr type_R">
                              <li className="pag_next">
                                  <span><i className="iconfont icon-fenyeshangyiye"></i></span>
                              </li>
                              <li className="pag_num"><p>1/50</p></li>
                              <li className="pag_prev">
                                   <span><i className="iconfont icon-fenyexiayiye"></i></span>
                              </li>
                          </ul>
                          </div>  
                          <Foods_list></Foods_list>
                          <div className="goods-pag">
                              <div className="pag-box">
                                  <ul className="clearfix">
                                      <li className="pag-prev"><span><i className="iconfont icon-shuangjiantouyou"></i></span></li>
                                      <li><span>1</span></li>
                                      <li><span>2</span></li>
                                      <li><span>3</span></li>
                                      <li><span>4</span></li>
                                      <li><span>5</span></li>
                                      <li><span>6</span></li>
                                      <li className="pag-next"><span><i className="iconfont icon-shuangjiantouyou1"></i></span></li>
                                  </ul>
                              </div>
                          </div>
                   </div>
 
                 
                 </div>
            </div>
        )
    }
     

}
