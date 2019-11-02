export default(state,action)=>{

      state = state || {}
      switch(action.type){
          case 'GET_PASS':

            return {
               tel:action.tel,pass:action.pass,id:action.id,location:action.location,...state
            }

          default:{
              return{...state}
          }
      }
}

export const getpass=(pass,id,location,tel)=>(dispatch)=>{

       dispatch({type:'GET_PASS',pass,id,location,tel})

      
}