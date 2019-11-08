

export default(state,action)=>{   
    state = state || {state}
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ADD_CART':          
            return{          
              cart:action.cart,cartsum:action.n
            }
        default:
        return{
           state
       }  
    }

}
//添加购物车
export const addcart =(cart,n)=>(dispatch)=>{     
       dispatch({type:'ADD_CART',cart,n})
}