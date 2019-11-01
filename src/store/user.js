export default(state,action)=>{

      state = state || {}
      switch(action.type){
          case 'GET_PASS':

            return {
               pass:action.pass,id:action.id,location:action.location
            }

          default:{
              return{}
          }
      }
}

export const getpass=(pass,id,location)=>(dispatch)=>{

       dispatch({type:'GET_PASS',pass,id,location})

      
}