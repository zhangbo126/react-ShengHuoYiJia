/* eslint-disable eqeqeq */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import sign from './sing.png'
import SignAndReg from '../../base/SignAndreg/index'
import {connect} from 'react-redux'
import  {issign} from '../../store/sign'

@connect((sate)=>{
	return{
		user:'',
	}
},{
	issign
})

 class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
			tip:'' //登录提示信息
		}
    }

	
     isSign=()=>{
		//  let fromData = new FormData()
		//  fromData.append("users",this.refs.tel.value)
	    //  console.log(this.refs.tel.value)	
        fetch('/sing',{
			method:'post',
			headers:{
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			},	
			body:`users=${this.refs.tel.value}`
		}).then(res=>res.json()).then(req=>{
				let arr = req.data
				// console.log(req)
				if(arr == 0){
					//  console.log(2)//判断是否有该账号
					this.setState({
						tip:'您的账号未注册请先注册'
					})
				}
			  arr.map((v)=>{
				  //密码验证
				  if(this.refs.pass.value == 0 ){
					this.setState({
						tip:'请输入密码'
					})
				  }else if(v.password != this.refs.pass.value){
					this.setState({
						tip:'您的密码有误请重新输入'
					})
				  }else if(v.password == this.refs.pass.value){
					// console.log(req.data)
					//  console.log()
					  this.props.issign(req.data)
					  this.props.history.push('/account/?'+req.data[0]._id)
					   
				  }
			  })	
		})

	} 

    render() {
        return (
          <div className="sign" id="sign">
             <div id="sing" className="clearfix">		
             <SignAndReg></SignAndReg>
	<div className="singBox clearfix">
		<div className="singL fl">
		   <div className="singImg">
				<img src={sign}/>
		   </div>
		 </div>		 
		 <div className="singR fl">
		 	<div className="singInp">
		 		<p>登录<span className='tips'>{this.state.tip}</span></p>
		 		<div className="inp">
		 			<div className='tel'>
					   <span className='iconfont icon-shouji'>
					    </span><input type="tel" ref="tel" placeholder="请输入手机号码" />
					</div>
		 			<div className='pass'>
						<span className="iconfont icon-mima"></span>
						<input type="password" ref="pass"  placeholder="输入密码"/>
					</div>
		 		</div>
				<div className='check'>
					<input type="checkbox" /><span>下次自动登录</span>
				</div>
				<div className='singBtn'>
					<div className="btn">
						<button><a id="herf"  onClick={this.isSign}>登录</a></button>
					</div>
					<div className="singother clearfix">
						<span className='fl'><a href="/reg/reg">免费注册</a></span>
						<span className="fr"><a href="/reg/pass">忘记密码</a></span>
					</div>
				</div>
		 	</div>
		 </div>
	  </div>
	</div>
          </div>
        )
    }


}


export default Sign