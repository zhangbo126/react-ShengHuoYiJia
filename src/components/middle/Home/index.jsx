import React from 'react'
import './index.css'
import Sillder from './Sillder'
import Content from './Content'



export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="home" >
                
                    <Sillder></Sillder>
                    <Content></Content>
            </div>
        )
    }
     

}
