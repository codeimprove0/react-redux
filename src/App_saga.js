
import {connect} from 'react-redux' 
import {getMarks,getAge} from './redux/allAction'

 
function App(props) {    

  const changeMarks = ()=>{ 
     props.newMarks('20')
  }
  const changeAge = ()=>{ 
    props.newAge('30')
   }
  return (
    <div className="App"><br/>  
     <h1><center> React + Redux + Saga</center> </h1>   

     <h2><center> Redux thunk vs Redux Saga</center> </h2>  

     <p>Marks:-{props.myStudent.marks}</p> 
     <p>Age:-{props.myStudent.age}</p> 
      <button onClick={changeMarks}>Change Marks </button> <br/> 
      <button onClick={changeAge}>Change Age </button> <br/> 
    </div>
  );
} 
 
const mapStateToProps = (state)=>{     
  return {
    myUsers:state.user,
    myStudent: state.student
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {  
     newMarks:(marks)=>{ dispatch(getMarks(marks)) } ,
     newAge:(sId)=>{ dispatch(getAge(sId)) }     
  }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(App);
