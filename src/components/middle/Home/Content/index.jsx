/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import './index.css'
import Comm_1 from './comm_1'
import Comm_2 from './comm_2'



export default class Content extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div className="content" >

            
                  <Comm_1></Comm_1>
                  <Comm_2></Comm_2>
            </div>
        )
    }
     

}
