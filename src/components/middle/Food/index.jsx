import React from 'react'
import './index.css'



export default class Food extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="food" >
                 <div className="food-box">
                   <div className="food-list">
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
                             <p>休闲食品</p>
                         </li>
                         <li>
                             <p>传统糕点</p>
                         </li>
                         <li>
                             <p> 无糖食品 </p>
                         </li>                   
                     </ul>
                 </div>
                 </div>
            </div>
        )
    }
     

}
