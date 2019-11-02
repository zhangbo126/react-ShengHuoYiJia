import React from 'react'
import './index.css'
import {connect} from 'react-redux'
import {addlocation} from '../../../store/isLocation'
import {CITY_LOCATION} from '../../../api'
import { Modal, Button } from 'antd';

let tip =''
function success() {
	Modal.success({
	  content:tip
	});
  }
  
@connect((state)=>{
    //  console.log(state.location.state.hidden)
	//  console.log(state.location.hidden)
	  
	 
       return{
		   isShow:state.location.hidden,
		   isLocation:state.location.isLocation,
		   id:state.user.id
       }

    },{

      addlocation
         
    })
 class Addlocation extends React.Component{

    constructor(props){
        super(props)
        this.state={
			hidden:this.props.isShow,//是否显示
			city:[],//城市
			area:[],//市区,
			tip:'电话号码、手机号选填一项,其余均为必填项',//提示信息
        }
    }
   


       componentDidMount(){
		   
		 fetch(CITY_LOCATION).then(req=>req.json())
		 .then(data=>{
			//   console.log(data)
			 this.setState({
				 city:data,
			     area:data[0].area
			 },()=>{
				// console.log(this.state.area)
			 })
		 })
		}
			  	
      //清空内容
		dump=()=>{
			 
			this.refs.tel.value=''
			this.refs.userName.value=''
			this.refs.city.value=''
			this.refs.loc.value=''
		}	
    
     //取消
     call=()=>{
        //隐藏 地址框
       this.props.addlocation(true)

  }

  //选择市区
      isArea=(i)=>{
		this.setState({
			area:this.state.city[i.target.selectedIndex].area
		})
      
	  }

 //保存收货地址

  keep=()=>{
	   //验证是否是中文
	   if(new RegExp(/^[\u4e00-\u9fa5\s]{2,10}$/).test(this.refs.userName.value)){
			//验证手机号码
			if(new RegExp(/^1[3-9]\d{9}$/).test(this.refs.tel.value)){
				  //地址栏验证
				    
                     if(this.refs.city.value!=""){
						   
                     //地址验证
						  if(this.refs.loc.value!=""){
							   //向后台添加数据
							   //0表示添加收货地址
							    if(this.props.isLocation==0){
									 
									fetch('/location/'+this.props.id,{
										method:'post',
										headers:{
											"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
										},
										body:`loc=${this.refs.city.value+" "+this.refs.area.value}&tel=${this.refs.tel.value}&name=${this.refs.userName.value}&weizi=${this.refs.loc.value}`											       
											  
									}).then(req=>req.json()).then(data=>{
										 tip="添加成功！！！"
									     success()
										 this.props.addlocation(true)
										 
									}) 
								}else if(this.props.isLocation==1){
									tip='修改成功！！！'
									success()
									this.props.addlocation(true)
								} 
							    
							
						  } else{
							this.setState({
								tip:'请填写详细地址'
							})  
						  }                       
					 }else{
						this.setState({
							tip:'请选择所在城市'
						}) 
					 }
			}else{
				//  console.log(this.refs.tel.value)
				this.setState({
					tip:'请输入正确手机号码'
				})
			}
	   }else{
		   this.setState({
			   tip:'请输入正确的收货人姓名'
		   })
	   }
	    

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
					<span className="locnew">新增收货地址</span><i>{this.state.tip}</i>
				</div>
				<ul className="fixInp">
					<li className="name clearfix">
						<div className="fixTxt fl">收货人姓名</div>
						<div className="input fl myname">
							<input type="text" ref="userName" placeholder="长度不超过25个字符" />
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
							<input type="text" ref="tel" placeholder="请输入手机号" />
						</div>
					</li>
					<li className="city clearfix">
						<div className="fixTxt fl">所在城市</div>					
							<div className="fl">
								<select name="Environment" ref="city" id="mycity" onChange={(e)=>this.isArea(e)}>
									  {
										  this.state.city.map((v,i)=>{
											   
											return <option value={v.city} key={i}>{v.city}</option>
											  
										  })
									  } 		
								</select>	
							</div>
									
				
						<div className="input fl">
							<select id="myarea" ref="area">
								   {
									 
                                      
									   this.state.area.map((v,i)=>{

										     return <option value={v} key={i}>{v}</option>
									   })
								   } 
							</select>
						</div>
					</li>
					<li className="weizi clearfix">
						<div className="fixTxt fl">详细地址</div>
						<div className="fl">
					    <div className="text">
								<textarea row="4" ref="loc"  placeholder="请填写您的详细地址"></textarea>
						</div>
						  <div className="check">
							  <input type="checkbox" />设置为默认收货地址
						  </div>
						  <div className="weizibtn">
						      <Button className="keep"  onClick={this.keep}>保存</Button>
							
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