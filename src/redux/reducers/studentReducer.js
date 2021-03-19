

const studentReducer = (state='',action)=>{
    
  switch(action.type){
    case "SET_MAIL":
      state = {
        ...state,
        name:action.payload
      }
      return state
      break;

    case "SET_SID": 
      state = {
        ...state,
        studentId:action.payload
      }
      return state
      break;

      default: 
      return state
 
  }
  
}

export default studentReducer