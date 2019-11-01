/* eslint-disable default-case */
export default(state,action)=>{

       state = state || {sign:'[登录]',okSign:false};
       switch(action.type){
            case 'SIGN':
             localStorage.setItem('users',JSON.stringify({sign:'[注销]',isSign:true,userId:action.user[0]._id}))  
            return {sign:'[注销]',okSign:true,user:action.user}
            case 'GETUSER':
             return{...state}
            default:
            return state
       }

}


//接收当前登录用户的个人信息
export const issign= (user)=>(dispatch)=>{
    //  console.log(user)
   
     dispatch({type:'SIGN',user})  

}

export const getUser=()=>(dispatch)=>{
  
      dispatch({type:'GETUSER'})

}

// export const getCurrentSong = (Mid) => (dispatch) =>{
//     dispatch({type:'get_current_song',Mid})
//   }