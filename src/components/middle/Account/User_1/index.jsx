/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import React from 'react'
import './index.css'
import head from './head.png'
import money from './money.png'
import {Route} from 'react-router-dom'
import RevisePass from './RevisePass'
import {connect} from 'react-redux'
import {getpass} from '../../../../store/user'

@connect((state)=>{

   return{
	   
   }

},{

    getpass

})



 class User_1 extends React.Component{

			constructor(props){
			super(props)
			this.state={
		      	isShow:false,
			   }
			}


			componentDidMount(){
			
			// let id =this.props.location.state.id
			//  console.log(this.props.location.state)
			let b =localStorage.getItem('users')
			let user= JSON.parse(b)	
			  if(user.isSign && b!=null){
				fetch('/myData/'+user.userId,{
					method:'post',
					headers:{
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
					}
		
					}).then(res=>res.json()).then(req=>{
				       
			   //保存当前用户密码 id 收货地址			
				  this.props.getpass(req.password,req._id,req.location,req.users,req.name)
				  

				this.setState({
			        	money:req.money
				})
				//判断用户是否有名字
				if(req.name ==undefined){
				   this.setState({
			         	name:req._id
				})
		
				}else{
				this.setState({
				        name:req.name
				     })
				}
				//判断是否添加收货地址
				//  console.log(req.location)
				if(req.location.length === 0){
				this.setState({
				       location:'您还未添加收货地址'
			    	})
				   }else{
					   this.setState({
						   location:req.location[0].loc+req.location[0].weizi
					   })
				   }
				})
			  }else{
				  this.setState({
					  isShow:true,
				  })
			  }
		
     

}

//修改
Revise=()=>{

	this.setState({
	   isShow:!this.state.isShow	
	})
}


render(){
return(
<div className="user_1">
	<div id="data" className="data">

		<div className="dataTop clearfix" hidden={this.state.isShow}>
			<div className="dataTopL fl">
				<div className="head fl">
					<img src={head} />
				</div>
				<div className="users fl">
					<div className="namebox ">
						<span className="name">{this.state.name}</span>
						<span className="vip">vip会员</span>
					</div>
					<div className="location ">
						<span className="locaTxt">{this.state.location}</span>
						<span className="modify" onClick={this.Revise}>[修改]</span>
					</div>
				</div>
			</div>
			<div className="dataTopR fr">
				<div className="money">
					<div className="moneyImg fl">
						<img src={money} />
					</div>
					<div className="moneyTxt fl">
						<p>我的余额</p>
						<i>￥{this.state.money}</i>
					</div>
				</div>

			</div>
		</div>
		<div className="RevisePass" hidden={!this.state.isShow}>
			 <RevisePass onRevis={this.Revise}></RevisePass>
		</div>
	</div>
</div>
)
}


}

export default User_1