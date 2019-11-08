
import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../../../store/sign'

 @connect((state)=>{
   
     return {
        sign:state.sign.sign,
        okSign:state.sign.okSign,//判断是否登录
        name: state.user.name,//用户名字
        nameId:state.user.id,//用户id
      
     }

 },{
      getUser
 })

 class Top extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sign:''
        }
    }

componentDidMount(){
 let b =localStorage.getItem('users')
 let user= JSON.parse(b)


     if(user.isSign == true && b !=null){ //判断是否登录

          this.setState({
            sign:'[注销]',
          })

     }else{
        this.setState({
            sign:'[登录]',
          })
     }  
}


 cancel=()=>{
    let b =localStorage.getItem('users')
    let user= JSON.parse(b)
  
  if(user.isSign){ 
        localStorage.setItem('users',JSON.stringify({sign:'[登录]',isSign:false,}))  
        this.setState({
            sign:'[登录]',
          })
        this.props.history.push('/home')
   }else{    
     localStorage.setItem('users',JSON.stringify({sign:'[注销]',isSign:true,}))
     this.setState({
        sign:'[注销]',
      })
     this.props.history.push('/sign')
   } 
//    this.props.history.push('/sign')
 }

    render(){
        return(
            <div className="topBox">
            <div className="top clearfix">
                 <div className="fl">
                    
                     <p className="usersName">{this.props.name==undefined?this.props.nameId:this.props.name}</p>
                 </div>
                <ul className="fr">
                    <li className="sing"><a  onClick={this.cancel}>{this.state.sign}</a></li>
                    <li className="reg"><a href="/reg?reg">[注册]</a></li>
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