export default(state,action)=>{

    state = state || {}
    // eslint-disable-next-line default-case
    switch(action.type){
 
        case 'FOOD_SERCH':
            
           return{
              kw:action.kw,
           }
         default:
       return{
           state
       }  
    }

}

export const foodserch =(kw)=>(dispatch)=>{

       dispatch({type:'FOOD_SERCH',kw})
}