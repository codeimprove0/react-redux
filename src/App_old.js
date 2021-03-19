 
 
import {useState,useEffect} from 'react' 
import {connect,useSelector,useDispatch} from 'react-redux' 
import {updateName,updateUserId,updateStudentId} from './redux/allAction'

import About from './About' 
 
function App(props) {   
  const [count,setCounts ] =useState(0);   

  const hookData =  useSelector((state)=>{
    return {
      myUsers:state.user,
      myStudent: state.student
    }
  }) 
  const dispatch = useDispatch();

  useEffect(()=>{ 
    console.log("HIT API")
   // props.changeName('Code Improve'+count)
    props.newStudentId(count)
  },[count])
    
  const changeUserId = ()=>{
      props.newUserId('RT9090')
  }

  const changeStudentId = ()=>{
    props.newStudentId(count)
  }
  return (
    <div className="App"><br/>  
     <h1><center> React + Redux</center> </h1> 
     <h2>User </h2>
     <p>{hookData.myUsers.name} - {hookData.myUsers.userId}</p>
     <h2>Student</h2>
     <p>{props.myStudent.name} - {props.myStudent.studentId}</p>
      <button onClick={()=>setCounts(prev=>prev+1)}>Add Count {count}  </button> <br/>
      <button onClick={changeUserId}>Change UserID </button> <br/>
      <button onClick={changeStudentId}>Change Student </button> 
      <About/>
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
  /*    changeName:(name)=>{ dispatch({type:'SET_NAME',payload:name}) },
     newUserId:(uID)=>{ dispatch({type:'NEW_USER_ID',payload:uID}) }   */

     changeName:(name)=>{ dispatch(updateName(name)) },
     newUserId:(uID)=>{ dispatch(updateUserId(uID)) } ,
     newStudentId:(sId)=>{ dispatch(updateStudentId(sId)) } 
     
 
  }
}
 

export default connect(mapStateToProps,mapDispatchToProps)(App);
