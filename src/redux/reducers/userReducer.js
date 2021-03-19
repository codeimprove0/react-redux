 
const userReducer = (state='',action)=>{
   
 /*  if(action.type =='SET_NAME'){
    state = {
      ...state,
      name:action.payload
    }
    return state
  }else{
    return state
  } */

  switch(action.type){
    case "SET_NAME":
      state = {
        ...state,
        name:action.payload
      }
      return state
      break;

    case "NEW_USER_ID": 
      state = {
        ...state,
        userId:action.payload
      }
      return state
      break;

      default: 
      return state
 
  }
  
}

export default userReducer