export default(state,action)=>{

      state = state || {hidden:true}
       
      switch(action.type){
          case 'ADD_LOCATION':
           return {
              hidden:action.hidden,isLocation:action.isLocation
           }
           default:
           return{
                hidden:true
           }
      }
}

                                  
                                   //n :接收 0 或者1 判断是添加地址(0) 还是 修改地址(1)
 export const  addlocation= (hidden,n)=>(dispatch)=>{
        //  console.log(hidden)
        dispatch({type:'ADD_LOCATION',hidden:hidden,isLocation:n})
       
}