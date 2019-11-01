import './index.css'
import React from 'react'
import Password from 'antd/lib/input/Password'
import {connect} from 'react-redux'


@connect((state)=>{
    //  console.log(state.user.pass)
     return {
         pass:state.user.pass,
         id:state.user.id
     }


})


 class UserPass extends React.Component{

  constructor(props){
    super(props)
    this.state={
        take:'注意：密码不得填空格，可由英文字母和数字组成'
    }
  }


//修改密码

   keep=()=>{
  

     //密码验证
     if(this.props.pass==this.refs.pass.value){
         //新密码验证
            if(new RegExp(/(?!^[a-z]+$)+(?!^[0-9]+$)^[a-z0-9]{6,32}$/i).test(this.refs.newpass.value)){
                  //确认密码
                  if(this.refs.newpass.value === this.refs.ok.value){
                        
                     fetch('/mod/'+this.props.id,{
                         method:'post',
                         headers:{
                            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" 
                         },
                         body:`password=${this.props.pass}`
                     }).then(req=>req.json()).then(res=>{
                            console.log(res)
                            this.setState({
                                take:'修改成功'
                            })  
                     })
                       
                  }else{
                    this.setState({
                        take:'您的密码不一致请确认再次输合'
                    })  
                  }

            }else{
                this.setState({
                    take:'请输入6-16位的英文和数组组合'
                })
            }
         
     }else{
        this.setState({
            take:'你的密码错误请重新输入'
        })
     }
      
   }


  render(){

     return(

        <div className="userpass">
         
         <div id="pass">	
	<div className="Mymsg">
		<div>修改密码</div>
	</div>
	<div className="passBox">
		<ul>
			<li className="clearfix">
				<div className="passTip">当前密码:</div>
				<div className="passInp now"><input type="password" ref="pass" placeholder="请输入密码" /></div>
			</li>
			<li className="clearfix">
				<div className="passTip">新密码:</div>
				<div className="passInp new"><input type="password" ref="newpass" placeholder="请输入新密码" /></div>
			</li>
			<li className="clearfix">
				<div className="passTip">确认密码:</div>
				<div className="passInp ok"><input type="password" ref="ok" placeholder="请在次输入密码" /></div>
			</li>
		</ul>
		<p className="take">{this.state.take}</p>
		<div className="passbtn">
			<button onClick={this.keep} >保存</button>
		</div>
	</div>	
</div>

        </div>
     )

  }

}


export default UserPass
