/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './index.css'
import { Carousel } from 'antd';

export default class Sillder extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="Sillder" >  
                    <Carousel autoplay className="silder-Box" >
                    <div>
                        <h3>
                            <img src={require('../Sillder/banner/banner1.png')}></img>
                        </h3>
                    </div>  
                    <div>
                        <h3>
                            <img src={require('../Sillder/banner/banner2.jpg')}></img>
                        </h3>
                    </div>
                    <div>
                         <h3>
                            <img src={require('../Sillder/banner/banner3.jpg')}></img>
                        </h3>
                    </div>
                    <div>
                       <h3>
                            <img src={require('../Sillder/banner/banner4.jpg')}></img>
                        </h3>
                    </div>
                    <div>
                       <h3>
                            <img src={require('../Sillder/banner/banner5.jpg')}></img>
                        </h3>
                    </div>
                    </Carousel>   
            </div>
        )
    }
     

}
