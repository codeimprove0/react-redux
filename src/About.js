
import React from 'react' 
import {connect} from 'react-redux' 
function About(props) { 
    return (
        <div>
            About
            <h1>{props.myStudent.name}</h1>
        </div>
    )
}
 
const mapStateToProps = (state)=>{    
  return {
    myUsers:state.user,
    myStudent: state.student
  }
}


export default  connect(mapStateToProps)(About)
