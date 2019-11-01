/* eslint-disable no-dupe-class-members */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../../store/sign'
 @connect((state)=>{
    //   console.log(state)
     
     return {
        sign:state.sign.sign,
        okSign:state.sign.okSign//判断是否登录
     }

 },{
      getUser
 })

 class Top extends React.Component{

    constructor(props){
        super(props)
        this.state={
            sign:'[登录]'
        }
    }

componentDidMount(){
    
    //  console.log(window.location.pathname)
    // console.log(this.props.match)
 let b =localStorage.getItem('users')
 
 let user= JSON.parse(b)
 
   

     if(user === null){
        this.setState({
            sign:'登录',
            isSign:false,
        })
          

     }else{
        this.setState({
            sign:user.sign,
            isSign:user.isSign,
        })
        
     }
    
}


// componentDidMount(){
  
//     let b = localStorage.getItem('user')
//     let user = JSON.parse(b)

//     this.setState({
//         id:user.userId
//     })

// }

 cancel=()=>{
// this.props.history.push('/home')
  if(this.state.isSign){
        this.setState({
            sign:'[登录]'
        })
     
        localStorage.setItem('users',JSON.stringify({sign:'登录',isSign:false,}))  
   }else{
        console.log('2')
    this.setState({
        sign:'[注销]'
    })
    // this.state
    // this.props.history.push('/home')
    
 
   } 
//    this.props.history.push('/sign')
 }

    render(){
        return(
            <div className="topBox">
            <div className="top clearfix">
                <ul className="fr">
                    <li className="sing"><a  onClick={this.cancel}>{this.state.sign}</a></li>
                    <li className="reg"><a href="/reg">[注册]</a></li>
                    <li className="line"><a >|</a></li>
                    <li><Link to="/account/user_1">我的账号</Link></li>
                    <li className="line"><a>|</a></li>
                    <li><span className="iconfont icon-shouji"></span><a >生活一家APP下载</a></li>
                </ul>
            </div>
        </div>
        )
    }
     

}


export default Top