import React from 'react'
import './index.css'
import Top from './Top'
import HeadSearch from './HeadSearch'

// import Nav from './Nav'

export default class Head extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
   
   

    render(){
        return(
            <div className="head" id="#head">
               <Top history={this.props.history}></Top>
               <HeadSearch></HeadSearch>
            
            </div>
        )
    }
     

}
