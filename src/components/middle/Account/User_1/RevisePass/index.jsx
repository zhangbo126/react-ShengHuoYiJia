/* eslint-disable no-loop-func */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import headImg from '../NotHeadimg.jpg'
import { Button, message } from 'antd';
import UserPass from '../UserPass/index'
import {connect} from 'react-redux'
const key = 'updatable';
let tip = '修改成功！！！'
const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: tip, key, duration: 2 });
  });
};


@connect((state)=>{
    return{
        imgUrl:state.user.imgUrl
    }

})


 class RevisePass extends React.Component{

    constructor(props){
       super(props)
       this.state={
           isShow:false,
           loading: false,
           userHead:this.props.imgUrl, //上传头像地址
           headPath:null,//图片页面显示路径
       }
    }

    setUser=()=>{
    //修改用户个人信息
        let b = localStorage.getItem('users')
        let user = JSON.parse(b)
         if(this.refs.name.value !=''){
            fetch('/mod/'+user.userId,{
                method:'post',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:this.refs.name.value,
                    tel: this.refs.tel.value,
                    imgUrl:this.state.userHead
                }),
               
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
    //修改头像
    updataHead=()=>{
       
         this.setFile(this.refs.file.files)
    }
   setFile(fileData){
       let formData = new FormData()   
      this.setState({
         userHead:"images/headImg/"+fileData[0].name 
      })
      
      for(let i=0;i<fileData.length;i++){
        let reader = new FileReader()
        reader.readAsDataURL(fileData[i])
        // eslint-disable-next-line no-loop-func
        let img = new Image()
        reader.onload = function(e){       			
            img.src = e.target.result;  
            document.getElementById('img').src=img.src
        }  
    }
            
    for(let f of fileData){	 
        formData.append("myFile",f)
    }
 //上传图片
    fetch('/myfile',{
        method:'post',
        body:formData,
    }).then(req=>req.json()).then(res=>{  
            this.setState({
        
                userHead:res.headImg
            }) 

            console.log(res.headImg)
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
					<div className="headImg fl">
                       <img ref="headImg" id="img" src={this.state.headPath?this.state.headPath:this.props.imgUrl} />
					</div>
                    <div className="fr file">
                    <form action="mydata" method="post" name="myFile" encType="multipart/form-data"> 
							<button className="fileA" type="button">修改头像
							    <input type="file" ref="file" onChange={this.updataHead} name="myFile" id="fileImg" multiple />
							</button>					
					</form>
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

export default RevisePass