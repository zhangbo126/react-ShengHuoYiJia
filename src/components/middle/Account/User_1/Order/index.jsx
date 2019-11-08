import React from 'react'
import './index.css'




 class Order extends React.Component{

    constructor(props){
       super(props)
      
       this.state={
           other:''
       }

    
    }

   
    componentWillMount(){
        //  console.log(JSON.parse(localStorage.getItem('cart')).cart)
          //判断购物车是否有内容
         let cart =JSON.parse(localStorage.getItem('cart'))   
         if(cart!=null){
            this.setState({
                other:cart.cart
            })
        }else{
            this.setState({
                other:[]
            })
        }

    }

      render(){
         return(
             <div className="order">
                 <div className="order-title clearfix">
                    <p className="tip fl">
                       我的订单
                    </p>
                    <div className="more fr">
                        <span>更多</span>
                    </div>
                 </div>
                 <div className="order-code">
                     <div className="code">
                          订单编号：SHYJ125203
                     </div>
                 </div>
                <div>
                  {
                      this.state.other.map((v,i)=>{
                          return <div className="cart-accounts" key={v.id}>
                          <div className="cart-item">
                                 <div className="cart-img">
                                     <img src={v.foods_imgUrl} />
                                 </div>
                                 <div className="goods-name">
                                    {v.foods_name}
                                 </div>
                          </div>
                          <div className="num"><span>{v.num}</span></div>
                          <div className="price-item">
                                 <p className="price">￥{v.num*v.new_price}</p>
                                 <span>在线支付</span>
                          </div>
                          <div className="todo-list">
                             <div className="todo-box">
                             <p> 等待付款</p>
                             <p>订单详情</p>
     
                             </div>
                          </div>
                          <div className="pay">
                              <button className="pay-btn">
                                  立即付款
                              </button>
                          </div>
                      </div>
                      })
                  }
                </div>
             </div>
         )
      }

  
    
}

export default Order