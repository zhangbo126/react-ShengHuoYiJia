export default(state,action)=>{

      state = state || {}
      switch(action.type){
          case 'GET_PASS':

            return {
               name:action.name,
               tel:action.tel,
               pass:action.pass,
               id:action.id,
               location:action.location,
               imgUrl:action.imgUrl,
               ...state
            }

          default:{
              return{...state}
          }
      }
}

export const getpass=(pass,id,location,tel,name,imgUrl)=>(dispatch)=>{

       dispatch({type:'GET_PASS',pass,id,location,tel,name,imgUrl})

      
}