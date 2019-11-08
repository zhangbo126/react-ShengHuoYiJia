import React from 'react';
import photo from './loading.gif'
import './index.css'
export default (props) => {
  return (
    <div className="loading">
      <div className="loading-box">
      
      <img style={{width:50,height:50}} src={photo} />
      <p>加载中.....</p>
      <p className="desc">{props.title}</p>
      </div>
    </div>
  )
}