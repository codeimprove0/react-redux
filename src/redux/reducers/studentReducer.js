

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

    case "GET_MARKS": 
      state = {
        ...state,
        marks:action.payload
      }
      return state
    break;

    case "GET_MARKS_DONE": 
      state = {
        ...state,
        marks:action.payload
      }
      return state
    break;


    case "GET_AGE": 
      state = {
        ...state,
        age:action.payload
      }
      return state
    break;

    case "GET_AGE_DONE": 
      state = {
        ...state,
        age:action.payload
      }
      return state
    break;
  

    default: 
      return state
 
  }
  
}

export default studentReducer