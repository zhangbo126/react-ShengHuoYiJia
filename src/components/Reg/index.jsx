/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import SignAndReg from '../../base/SignAndreg/index'
import { message, Button } from 'antd';

let tip =''
const success = () => {
    const hide = message.loading(tip, 0);
    setTimeout(hide, 1500);
  };

  let time; //全局声明 定时器


export default class  Reg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            jump:'注册',
            isReg:'注册',
            isShow:false,
            regMsg:'',//提示信息
            signTel:'',//跳转登录数据
            codeTxt:'获取验证码',
            code:'',//保存获取到的验证码
        }
    }

   componentDidMount(){
      //判断是忘记密码还在注册 
       if(this.props.location.search !=="?reg"){
          this.setState({
              jump:'忘记密码',
              isReg:'找回密码',
              isShow:true
          })          
       }      
   }


   
   //注册
   userReg=()=>{
                 //手机号格式验证
       if(new RegExp(/^1[3-9]\d{9}$/).test(this.refs.tel.value)){
           //密码格式验证
            if(new RegExp(/(?!^[a-z]+$)+(?!^[0-9]+$)^[a-z0-9]{6,32}$/i).test(this.refs.pass.value)){
                 //判断验证码是否正确
                 if(Number(this.refs.code.value)===Number(this.state.code)){
                 
                             //判断两次密码是否一致
                   if(this.refs.pass.value === this.refs.ok.value){
                    //注册请求
                
                    fetch('/create',{
                        method:'post', 
                        headers: {
                         "Content-Type":"application/json"
                         },               
                        body:JSON.stringify({
                           users:this.refs.tel.value,
                           password:this.refs.pass.value,
                           money:Math.floor(Math.random()*100)
                         })
                    }).then(req=>req.json())
                    .then(data=>{
                       //判断账号是否存在
                        if(data.being){
                         this.setState({
                             regMsg:"该账号已存在"
                         })
                         tip='该账号已存在'
                         success()
                        }else{
                         this.setState({
                             regMsg:"注册成功",
                         })
                         tip='注册成功'
                         success()
                        }
                    })
                }else{
                 this.setState({
                     regMsg:'密码不一致请确认输入'
                 }) 
                }
                 }else{
                    this.setState({
                        regMsg:'验证码错误'
                    })  
                   
                 }             
            }else{
                this.setState({
                    regMsg:'请输入6-16位的数字和密码'
                }) 
            }           
       }else{
           this.setState({
               regMsg:'你的手机号码格式不正确'
           })
       }
   }

   //获取验证码
 
   getCode=()=>{
     //检测是否输入号
      if(this.refs.tel.value==''){
        this.setState({
            regMsg:'请输入手机号'
        })
      }else{
        let count = 59;
     time= setInterval(()=>{  //验证码倒计时
             if(count==0){
                this.refs.dashed.disabled=false
                this.setState({
                    codeTxt:'获取验证码'
                })
                count = 60
                clearInterval(time)
              
                
             }else{
                 this.refs.dashed.disabled=true
              
                 this.setState({
                     codeTxt:count--
                 })            
             }
         },1000)

             //验证码请求
       fetch('/code',{
        method:'post', 
        headers: {
                  "Content-Type":"application/json"
            },
        body:JSON.stringify({
             tel:this.refs.tel.value
        })
            }).then(req=>req.json())
        .then(data=>{
             console.log(data)
                this.setState({
                    code:data.code //返回的验证码
                })
            })
      }  
   }

    //跳转登录
    goSign=()=>{
        //跳转时关闭定时器
        clearInterval(time)
        this.props.history.push('/sign')
      }


    render() {
        return (
            <div id="reg">
              <SignAndReg reg={this.props.location.search ==="?reg"?"欢迎注册":"忘记密码"}></SignAndReg>
              <div className="regbox clearfix">
                  <div className="regL fl">
                    <p><span className='regtxt'>{this.state.jump}</span><span id="regMsg">{this.state.regMsg}</span></p>
                    <div className="regInp">
                        <div className="tel"><span>手机号码:</span><input type="tel" ref="tel" placeholder="请输入手机号码" /></div>
                              <div className="code"><span>验证码:</span>
                              <input type="text" ref="code" placeholder="请输入验证码" />
                              <button onClick={this.getCode}   ref="dashed">{this.state.codeTxt} </button></div>
                        <div className="pass"><span>创建密码:</span><input type="password" ref="pass" placeholder="输入6-16位字母或者数字" /></div>
                        <div className='ok'><span>确认密码:</span><input type="password" ref="ok" placeholder="再次输入密码" /></div>		
                    </div>
                    <div className="btn clearfix">
                       
                           
                            <Button className="fr"  onClick={this.userReg}> 
                            <a id="jump">
                            {this.state.isReg}</a></Button>
                      
                    </div>
                </div>
                  <div className="regR fr">			
                    
                        <div className="tip" hidden={this.state.isShow}>
                            <p>已经注册？</p>
                            <div>请点击<a id="singJump" onClick={this.goSign}>直接登录</a></div>
                        </div>
                    
                </div>
              </div>	  	 
        </div>
        )
    }


}
