/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import SignAndReg from '../../base/SignAndreg'



export default class  Reg extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="reg">
              <SignAndReg></SignAndReg>
              <div className="regbox clearfix">
                  <div className="regL fl">
                    <p><span className='regtxt'>注册</span><span id="regMsg"></span></p>
                    <div className="regInp">
                        <div className="tel"><span>手机号码:</span><input type="tel" pro="tel" placeholder="请输入手机号码" /></div>
                        <div className="code"><span>验证码:</span><input type="text" pro="code" placeholder="请输入验证码" /><button>获取验证码</button></div>
                        <div className="pass"><span>创建密码:</span><input type="password" pro="pass" placeholder="输入6-16位字母或者数字" /></div>
                        <div className='ok'><span>确认密码:</span><input type="password" pro="ok" placeholder="再次输入密码" /></div>		
                    </div>
                    <div className="btn clearfix">
                        <button className="fr"><a id="jump" href="javascript:void(0);">注册</a></button>
                    </div>
                </div>
                  <div className="regR fr">			
                    
                        <div className="tip">
                            <p>已经注册？</p>
                            <div>请点击<a id="singJump" href="/sing.html">直接登录</a></div>
                        </div>
                
                </div>
              </div>	  	 
        </div>
        )
    }


}
