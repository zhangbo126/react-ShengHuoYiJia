/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import logo from './logo.png'
// eslint-disable-next-line no-undef
// export default React.memo(SignAndReg=(props)=>{

//   return(
    
//   )
   
// })

export default function SignAndReg(props){
  return (
    <div className="singTop clearfix">
    <div className="singLogo fl">
        <img src={logo} />
        
     </div>
    <div className="singTxt fl"><span>|</span><i>{!props.reg?'欢迎登录':props.reg}</i></div>
    </div> 
  )
}







  

