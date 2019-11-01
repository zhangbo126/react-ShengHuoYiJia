import React from 'react'
import './index.css'



export default class Footer extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div id="footer">
            <ul className="clearfix">
                <li><span>首页</span></li>
                <li><span>|</span></li>
                <li><span>生活食品</span></li>
                <li><span>|</span></li>
                <li><span>生活用品</span></li>
                <li><span>|</span></li>
                <li><span>生活家居</span></li>
                <li><span>|</span></li>
                <li><span>精彩生活</span></li>
                <li><span>|</span></li>
                <li><span>会员杂锦</span></li>
                <li><span>|</span></li>
                <li><span>一键客服</span></li>
                <li><span>|</span></li>
                <li className="my"><span>关于我们</span></li>
                
            </ul>
            <div>Copyright© 生活一家 2007-2015，All Rights Reserved</div>
            
        </div>
        )
    }
     

}
