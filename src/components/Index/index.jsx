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

    render(){
        return(
            <div className="index" >
               <Head></Head>
               <Middle></Middle>
               <Footer></Footer>
               <Addlocation></Addlocation>
            </div>
        )
    }
     

}
