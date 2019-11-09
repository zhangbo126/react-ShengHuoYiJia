/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import logo from './logo.png'
import {connect} from 'react-redux'
import {foodserch}  from '../../../store/serch'

@connect((state)=>{
  
    return{
        cartTotal:state.cart.cartsum //购物车总数量
    }
},{
  
     foodserch

})


 class HeadSearch extends React.Component{

    constructor(props){
        super(props)
        this.state={
            cartTotal:this.props.cartTotal,

        }
    }

    
  componentWillReceiveProps(props){
      //更新购物车总数量
   
      this.setState({
          cartTotal:JSON.parse(localStorage.getItem('cart')).cartsum 
      })

 }

 componentDidMount(){ 
     //显示购物车总数量
    
      let sum =JSON.parse(localStorage.getItem('cart')) 
    if(sum!==null){
        this.setState({
                cartTotal:sum.cartsum
            })
    }else{
        this.setState({
            cartTotal:null
        })
    }
 }

   //搜索

  foodSearch=()=>{
    this.props.foodserch(this.refs.serch.value)   
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
                        购物车<span className="cartTip" hidden={this.state.cartTotal>=1 ? false : true} >{String(this.state.cartTotal)}</span></button>
                        </div>
                    <div className="searchMiddle clearfix">
                        <div className="select fl">
                         <span>广州</span>&nbsp;<span className="iconfont icon-xia"></span>
                     </div>
                        <div className="inp fl">
                                <div className="fl inptxt">
                                 <input ref="serch" type="text" placeholder="请输入产品名称" />
                             </div>
                                <div className="inpBtn fl">
                                    <button onClick={this.foodSearch}>搜索</button>
                                </div>
                        </div>
                    </div>
                </div>     
             </div>
            )
        }
        
      
     

}


export default HeadSearch 