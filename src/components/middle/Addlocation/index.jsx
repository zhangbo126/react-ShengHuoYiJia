import React from 'react'
import './index.css'
import {connect} from 'react-redux'
import {addlocation} from '../../../store/isLocation'
import {CITY_LOCATION} from '../../../api'
@connect((state)=>{
    //  console.log(state.location.state.hidden)
    //  console.log(state.location.hidden)
       return{
           isShow:state.location.hidden
       }

    },{

      addlocation
         
    })
 class Addlocation extends React.Component{

    constructor(props){
        super(props)
        this.state={
            hidden:this.props.isShow
        }
    }
   


       componentDidMount(){
		 fetch(CITY_LOCATION).then(req=>req.json())
		 .then(data=>{
			  console.log(data)
		 })
		}
     //取消
     call=()=>{
        //隐藏 地址框
       this.props.addlocation(true)

  }

    render(){
        return(
            <div className="addlocation"  hidden={this.props.isShow}>
             
             <div id="fixed">
		  <div className="fixedbg"></div>
			<div className="fixedbox">
				<div className="fixHead">
					<p>使用新地址</p>
				</div>
				<div className="fixbox">
				<div className="fixTip">
					<span className="locnew">新增收货地址</span><i>电话号码、手机号选填一项,其余均为必填项</i>
				</div>
				<ul className="fixInp">
					<li className="name clearfix">
						<div className="fixTxt fl">收货人姓名</div>
						<div className="input fl myname">
							<input type="text" placeholder="长度不超过25个字符" />
						</div>
					</li>
					<li className="tel clearfix">
						<div className="fixTxt fl">手机号码</div>
						<div className="input fl">
							<select name="" id="">
								<option value="">
									中国大陆+86
								</option>
							<option value="">
								中国台湾+84
							</option>
							<option value="">
								外国地区+82
							</option>
							</select>							
						</div>
						<div className="input fl mytel">
							<input type="text" placeholder="请输入手机号" />
						</div>
					</li>
					<li className="city clearfix">
						<div className="fixTxt fl">所在城市</div>					
							<div className="fl">
								<select name="Environment" id="mycity">
											
								</select>	
							</div>
									
				
						<div className="input fl">
							<select id="myarea">
								
							</select>
						</div>
					</li>
					<li className="weizi clearfix">
						<div className="fixTxt fl">详细地址</div>
						<div className="fl">
					    <div className="text">
								<textarea row="4"  placeholder="请填写您的详细地址"></textarea>
						</div>
						  <div className="check">
							  <input type="checkbox" />设置为默认收货地址
						  </div>
						  <div className="weizibtn">
							  <button className="keep">保存</button>
							  <button className="cancel" onClick={this.call}>取消</button>
						  </div>
						</div>
					</li>
		
				</ul>
				</div>
			</div>
			
		</div>
	
            </div>
        )
    }
     

}

export default Addlocation