export default(state,action)=>{

      state = state || {hidden:true}
       
      switch(action.type){
          case 'ADD_LOCATION':
           return {
              hidden:action.hidden,
           }
           default:
           return{
                hidden:true
           }
      }
}



 export const  addlocation= (hidden)=>(dispatch)=>{
        //  console.log(hidden)
        dispatch({type:'ADD_LOCATION',hidden})
       
}