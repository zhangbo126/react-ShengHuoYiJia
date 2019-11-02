/* eslint-disable eqeqeq */
import React from 'react'
import './index.css'
import  {connect} from 'react-redux'
import {addlocation} from '../../../../store/isLocation'
import {getpass} from '../../../../store/user'
@connect((state)=>{
   
    //   console.log(state.user.location)
    return{
        Userlocaction:state.user.location,
        id:state.user.id,
        tel:state.user.tel
    }
},{
   addlocation,getpass
})

 class User_6 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
            userLocation:[],//用户添加的地址
        }
    }


 
  componentDidMount(){
     this.isShow()
  }

    isShow=()=>{
                //数据还未添加时
    if(this.props.Userlocaction==undefined){
      
       this.setState({
           isLocation:true,
           userLocation:this.props.Userlocaction
       })
     }else if(this.props.Userlocaction.length>0){ //有地址时
     
            this.setState({              
                       isLocation:false,
                       userLocation:this.props.Userlocaction
                   })
        }else{ //没有地址时
           this.setState({              
               isLocation:true,
               userLocation:this.props.Userlocaction
           })
        }
    }


    

  //删除地址

   delLocation=(index)=>{
     
    fetch('/del/'+this.props.id,{
          method:'post',
          headers:{
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body:`tel=${this.props.Userlocaction[index].tel}`
    }).then(req=>req.json()).then(data=>{

         let b = this.state.userLocation.filter((v,i)=>{
                  if(i!=index){
                      return v
                  }          
            })
       
        
        this.setState({
            userLocation:b
        })
        
    })
      
   }

   // 修改地址

   updateLocation=(i)=>{

      this.props.addlocation(false,1)
   }
 

  // 添加收货地址

  addLocation=()=>{
                         // 0 表示添加地址
    this.props.addlocation(false,0)
      

  }     

    render() {
        return (
            <div className="user_6">
                <div id="data6" className="data">

                    <div className="locationBox">
                        <div className="top">
                            <p>收货地址</p>
                        </div>
                        <div className="myloc clearfix" hidden={this.state.isLocation}>
                           
                      {
                           this.state.userLocation.map((v,i)=>{
                           return   <div className="mylocBox fl" key={i}>
                           <div className="user">
                               <div className="locbg"></div>
                               <span className="loc">{v.loc}</span>
                               <span className="name">{v.name}</span>
                               <span className="tel">{v.tel}</span>
                           </div>
                           <div className="weizi">
                               <span>{v.weizi}</span>
                           </div>
                           <div className="btn">
                               <span className="update" onClick={()=>this.updateLocation(i)}>修改</span>|
                               <span className="del" onClick={()=>{this.delLocation(i)}}>删除</span>
                           </div>
                       </div>
                         
                           })
                      }
                        </div>
                        <div className="isLocation" hidden={!this.state.isLocation}>
                            <h1>
                               您还未添加收货地址
                            </h1>
                        </div>
                        <div className="add">
                            <button type="button" onClick={this.addLocation}>
                                +添加地址
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}

export default User_6