import React from 'react'
import './index.css'
import Head from '../Head'
import Middle from '../middle'
import Footer from '../Footer'
import Addlocation from '../middle/Addlocation'



export default class Index extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }

    // componentDidMount(){
    //     console.log(this.props.history)
    // }

    render(){
        return(
            <div className="index" >
               <Head history={this.props.history}></Head>
               <Middle></Middle>
               <Footer></Footer>
               <Addlocation></Addlocation>
            </div>
        )
    }
     

}
