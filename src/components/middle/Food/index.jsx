import React from 'react'
import './index.css'
import Foods_list from './Foods-list'
import {connect} from 'react-redux'

//请求内容
let sendData={
    content:16,
    pag:1,
    sort:0,
    salesSort:0,
}

let foodList = ["搜索结果","膨化食品","无糖食品","休闲食品","传统糕点","生活食品","水果点心","其他食品"]


@connect((state)=>{
         
    return{
        kw:state.serch.kw
    }
})


class Food extends React.Component{
    constructor(props){
        super(props)
        this.state={
            foodsList:[],
            pag:'',       
        }
    }

   componentDidMount(n,o){   
    this.getData(sendData) //页面加载请求数据  
    
   }

   componentWillReceiveProps(props){
      
    sendData.key=props.kw
    this.getData(sendData) //搜索请求
    sendData.key =''
  
   }




//请求数据
   getData(obj){
    //    console.log(obj)
    fetch('/food',{
        method:"post",
        headers:{
           "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    }).then(req=>req.json())
    .then(res=>{
         console.log(res)
         this.setState({
             foodsList:res.data,
             pag:res.pag,
             classType:1,//按钮样式
         })
    }) 
   }
   //销量 sales this.state.salesSort 0 升序 1 降序

    sales=()=>{
        // 升序
      if(sendData.salesSort === 1 || sendData.salesSort==0){          
            this.getData(sendData)
             sendData.salesSort=-1
             sendData.sort=0    
      }else if(sendData.salesSort ===-1 || sendData.salesSort==0){
        // 降序
            this.getData(sendData)   
            sendData.salesSort=1
            sendData.sort=0
       }
    }
    //价格排序降序
    priceSort=()=>{
    // 升序    
    if(sendData.sort ===1 || sendData.sort===0){    
            this.getData(sendData)
            sendData.sort=-1
            sendData.salesSort=0  
    }else if(sendData.sort ===-1 || sendData.sort==0){ //降序              
            this.getData(sendData)
            sendData.sort=1
            sendData.salesSort=0  
       }    
    }
 
    //分页
    sendPag=(i)=>{   
        sendData.pag=i
         this.getData(sendData)      
    
    }

    //下一页
    next=()=>{
        sendData.pag++
        if(sendData.pag>this.state.pag){
            sendData.pag=this.state.pag
        }
        this.getData(sendData)   
     
    }
   
    //上一页
    prev=()=>{
        sendData.pag--
        if(sendData.pag<1){       
            sendData.pag=1
        }
        this.getData(sendData)   
    }

    //全部
    all=()=>{
        this.getData(sendData)
    }
//    分类
   foodsType=(v)=>{
      sendData.type=v
      this.getData(sendData)  
      sendData.type=null
   }


    render(){
        //当前页数
       
        let pagBtn = []
        for(let i=0;i<this.state.pag;i++){                                           
             pagBtn.push(<li key={i} onClick={()=>this.sendPag(i+1)} ><span>{i+1}</span></li>)
         }    
        return(
           
            <div className="food" >
                 <div className="food-box clearfix">
                   <div className="food-list fl">
                     <ul>       
                     {
                         foodList.map((v,index)=>{                      
                           return <li key={index} className={index==0?"food_serch":""} onClick={()=>this.foodsType(v)}>{v}</li>
                         })
                     }                
                     </ul>
                 </div>
                   <div className="goods-box fr">
                      <div className="good_type clearfix">
                          <ul className="fl type_L">
                              <li className="all">
                                  <p onClick={this.all}>全部</p>
                              </li>
                              <li className="sales" onClick={this.sales}>
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
                              <li className="price" onClick={this.priceSort}>
                                  <p >价格</p>
                                  <div >
                                  <i className="iconfont icon-shangxiajiantou-"></i>
                                  </div>
                              </li>
                          </ul>
                          <ul className="fr type_R">
                              <li className="pag_next">
                                  <span onClick={this.prev}><i className="iconfont icon-fenyeshangyiye"></i></span>
                              </li>
                              <li className="pag_num"><p>{sendData.pag}/{this.state.pag}</p></li>
                              <li className="pag_prev">
                                   <span onClick={this.next}><i className="iconfont icon-fenyexiayiye"></i></span>
                              </li>
                          </ul>
                          </div>  
                          <Foods_list foods={this.state.foodsList} pag={this.state.pag}></Foods_list>
                          <div className="goods-pag">
                              <div className="pag-box">
                                  <ul className="clearfix">
                                      <li className="pag-prev" onClick={this.prev}><span><i className="iconfont icon-shuangjiantouyou"></i></span></li>
                                      {
                                       pagBtn 
                                      }
                                      <li className="pag-next" onClick={this.next}><span><i className="iconfont icon-shuangjiantouyou1"></i></span></li>
                                  </ul>
                              </div>
                          </div>
                   </div>             
                 </div>
            </div>
        )
    }
     

}

export default  Food
