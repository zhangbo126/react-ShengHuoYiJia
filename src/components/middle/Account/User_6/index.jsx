import React from 'react'
import './index.css'
import  {connect} from 'react-redux'
import {addlocation} from '../../../../store/isLocation'
@connect((state)=>{
    console.log(state)
    return{
       locaction:state.user.location
    }
},{
   addlocation
})

 class User_6 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isLocation:false,
        }
    }




  componentDidMount(){

      if( this.props.location){
           this.setState({              
               isLocation:!this.state.isLocation
           })
      }else{
        this.setState({              
            isLocation:!this.state.isLocation
        })  
      }
      
    //  console.log(this.props.locaction)

  }


  // 添加收货地址

  addLocation=()=>{
     
    this.props.addlocation(false)
      

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
                            <div className="mylocBox fl">
                                <div className="user">
                                    <div className="locbg"></div>
                                    <span className="loc">广东广州</span>
                                    <span className="name">张三</span>
                                    <span className="tel">1500834512</span>
                                </div>
                                <div className="weizi">
                                    <span>天河车陂东圃大马路8号时代TIT广场A座4楼430</span>
                                </div>
                                <div className="btn">
                                    <span className="update">修改</span>|
                             <span className="del">删除</span>
                                </div>
                            </div>
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