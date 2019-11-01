/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
// import {home_1} from '/static/home/home_1'



export default class Comm_1 extends React.Component{

    constructor(props){
        super(props)
        this.state={           
             brand:['/static/home/home_1.png','/static/home/home_2.png']
        }
    }


    componentDidMount(){

            

    }

    render(){
        return(
            <div className="comm_1" >
                <div className="content">
                <div className="brand clearfix">
		{/* <div className="brandL fl"><img src={this.state.brand[0]} /></div>
		<div className="brandR fl"><img src={this.state.brand[1]} /></div> */}
	    </div>
                </div>
              
                  {/* 


	
	<div className="food clearfix">
		<div className="foodL fl">
			<h3>生活食品</h3>
			<p>为生活&nbsp;添实惠</p>
			<ul className="clearfix">
				<li><a href="">传统糕点</a></li>
				<li><a href="">膨化食品</a></li>
				<li className="active"><a href="">无糖食品</a></li>
			    <li><a href="">传统糕点</a></li>
			    <li><a href="">膨化食品</a></li>
			    <li><a href="">无糖食品</a></li>
				<li><a href="">传统糕点</a></li>
				<li><a href="">膨化食品</a></li>
				<li><a href="">无糖食品</a></li>
			</ul>
		</div>
		<div className="foodR fl">
			<ul className="clearfix">
				<li className="min">
					<div className="title">
						<p>糖果巧克力不止五折</p>
						<span>进口巧克力</span>
					</div>
					<div><img src="../images/public/home_2.png" alt=""></div>
				</li>
				<li className="min">
					<div  className="title">
						<p>休闲零食不止5折</p>
						<span>我是小吃货</span>
					</div>
					<div><img src="../images/public/home_3.png" alt=""></div>
				</li>
				<li className="big">
					<div  className="title">
						<p>双十一大优惠</p>
						<span>满50减10</span>
					</div>
					<div><img src="../images/public/home_4.png" alt=""></div>
				</li>
				<li className="min">
					<div  className="title">
						<p>糖果巧克力不止五折</p>
						<span>进口巧克力</span>
					</div>
					<div><img src="../images/public/home_2.png" alt=""></div>
				</li>
				<li className="min">
					<div  className="title">
						<p>糖果巧克力不止五折</p>
						<span>进口巧克力</span>
					</div>
					<div><img src="../images/public/home_2.png" alt=""></div>
				</li>
				<li className="min abs abs_1">
					<div  className="title">
						<p>休闲零食不止5折</p>
						<span>我是小吃货</span>
					</div>
					<div><img src="../images/public/home_3.png" alt=""></div>
				</li>
				<li className="min abs abs_2">
					<div  className="title">
					<p>休闲零食不止5折</p>
					<span>我是小吃货</span>
					</div>
					<div><img src="../images/public/home_2.png" alt=""></div>
				</li>
			</ul>
		</div>
	</div>




</div> */}
            </div>
        )
    }
     

}
