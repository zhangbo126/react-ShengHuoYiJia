/* eslint-disable array-callback-return */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import Lading from '../../../../base/Loading/index'
import NotFount from '../../../../base/NotFount'
import { message, Button } from 'antd';
import {connect} from 'react-redux'
import  {addcart} from '../../../../store/cart'
const success = () => {
    message.success('添加成功');
  };

 let cart=[]
  @connect((state)=>{ 
       return{          
       }

  },{
      addcart
  })


class Foods_list extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cartTotal:0,//购物车总数量
            cartList:[],
            iscart:false,
 
        }
    }
        //添加购物车
     addCart=(v)=>{   
     //购物车数据
     let sum= JSON.parse(localStorage.getItem('cart'))  
          //检测购物车是否有内容                     
     if(sum!=null){
               //存储购物车数据             
               let index  = sum.cart.findIndex((item)=>{
                      // eslint-disable-next-line no-unused-expressions
                   return   item.id ===v.id
               })
               if(index===-1){
                   v.num=1
                   sum.cart.push(v)
                   
               }else{
                 if(sum.cart[index].num>=1){        
                   sum.cart[index].num+=1
                 }else{
                   sum.cart[index].num=2
                 }
               }                
                //不等于null 原来的 数量+1
                localStorage.setItem('cart',JSON.stringify({cart:sum.cart,cartsum:sum.cartsum+1})) 
                this.props.addcart(sum.cart,sum.cartsum)            
     }else{
        //没有默认为1
        v.num=1
        localStorage.setItem('cart',JSON.stringify({cart:[v],cartsum:1})) 
        this.props.addcart(cart,1) 
     }                       
          success()

     }


    render(){

        if(this.props.foods.length>0){
        return(      
            <div className="foods-list">
                <div className="list-box">
                    <ul className="clearfix">                         
                       {
                        
                        this.props.foods.map((v,i)=>{
                             return     <li key={v.id}>
                             <p className="goods-img">
                                 {/* {console.log(this.props.foods)} */}
                                 <img src={v.foods_imgUrl} />                         
                             </p>
                             <div className="foods-int">
                                 <div className="int-name">{v.foods_name}</div>
                                 <p className="price clearfix">
                                     <span className="new_price fl">¥ {v.new_price}</span>
                                      <span className="old_price fr">¥ {v.old_price}</span>
                                 </p>
                             </div>
                             <div className="cart">
                                 <div className="cart-box" onClick={()=>this.addCart(v)}>
                                     <i className="cart-icon iconfont icon-gouwu"></i>
                                      <span>&nbsp;加入购物车</span>
                                 </div>
                             </div>
                         </li>
                        })                     
                       }
                 
                    </ul>
                </div>
            </div>
        )
      
    }else if(this.props.foods.length==0){
   
       return <NotFount></NotFount>

    }else{
          return <Lading></Lading>
      }
   }
}


export default Foods_list