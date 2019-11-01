import React from 'react'
import './index.css'
import headImg from '../head.png'
import { Button, message } from 'antd';
import UserPass from '../UserPass/index'

const key = 'updatable';
let tip = '修改成功！！！'
const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: tip, key, duration: 2 });
  });
};

export default class RevisePass extends React.Component{

    constructor(props){
       super(props)
       this.state={
           isShow:false,
       }
    }


  
    setUser=()=>{
        // body:`users=${this.refs.tel.value}`
    // console.log(this.refs.tel.value)
    //修改用户个人信息
        let b = localStorage.getItem('users')
        let user = JSON.parse(b)
        //    console.log(user)

         if(this.refs.name.value !=''){
            fetch('/mod/'+user.userId,{
                method:'post',
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body:`name=${this.refs.name.value}&users=${this.refs.tel.value}`,
                  
                    // ` users=${this.refs.tel.value}`,
               
            }).then(req=>req.json()).then(res=>{
    
                    //   console.log(res)
                    if(res.msg==="修改成功"){
                        tip = "修改成功"
                        openMessage()
                    }
                 
            }) 
         }else{
               tip ='请输入要修改的内容'
               openMessage()
         }       
       
    }

    //修改密码

    revis=()=>{

       this.setState({
           isShow:!this.state.isShow
       })


    }



    render(){

        return(
           
            <div className="revisepass">
                
                	<div id="data1" hidden={this.state.isShow}>		
		<div className="Mymsg">
			<div>个人资料</div>
		</div>		
			<div className="modify">
				<div className="modHead clearfix">
					<p className="fl pTxt">头像:</p>
					<div className="headImg fr">
						<img src={headImg} />
					</div>
				</div>
				<div className="modName clearfix">
					<p className="pTxt fl">姓名:</p>
				    <div className="userBox fr">
						<div className="usersName ">
								<input type="text" ref="name"  />			   					  
						</div>			
						<div className="nameTip">
									 
						</div>
					</div>
				</div>
				<div className="nameTel clearfix">
					<p className="pTxt fl">联系方式:</p>
					<div className="tel fr">
						<input type="text" ref="tel" />
					</div>
				</div>
			   <div className="keep clearfix">
                   {/* <button type="button" onClick={this.setPass}>保存</button> */}
                   <Button type="primary" onClick={this.setUser}>
                    保存
                  </Button>
			   </div>

			</div>
		 <div className="modpass">
		 	<ul>
		 		<li className="clearfix">
		 			<div className="passTxt fl">修改密码:</div>
		 			<div className="passtip fl">经常的更换您的账号密码，并且不要和其他账号共用同一个密码</div>
		 			<div className="btn fl">
						<button onClick={this.revis}>修改</button>
					</div>
		 		</li>
		 		<li className="clearfix padd">
		 			<div className="passTxt fl">修改钱包密码:</div>
		 			<div className="passtip fl">经常的更换您的账号密码，并且不要和其他账号共用同一个密码</div>
		 			<div className="btn fl">
						<button>修改</button>
					</div>
		 		</li>
		 		<li className="clearfix">
		 			<div className="passTxt fl">我能供应:</div>
		 			<div className="passtip fl">上传您能提供的商品，我们会马上联系您哦！</div>
		 			<div className="btn fl">
						<button>上传图片</button>
					</div>
		 		</li>
		 	</ul>
		 </div>		 
	</div>
     <div className="usersName" hidden={!this.state.isShow}>
     <UserPass></UserPass>
     </div>
        
            </div> 
        )
    }

}