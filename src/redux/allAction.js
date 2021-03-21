import axios from 'axios'

export const updateName = (name)=>{
    return {
        type:'SET_NAME',
        payload:name
    } 
}

export const updateUserId = (uID)=>{
    return {
        type:'NEW_USER_ID',
        payload:uID
    } 
}

/* export const updateStudentId = (studentId)=>{
    return {
        type:'SET_SID',
        payload:studentId
    } 
}
 */ 

export const updateStudentId = (studentId)=>{
    return (dispatch)=>{
        var url = 'http://localhost/api/article-list'
        axios.get(url)
        .then(response=>{
             dispatch({type:'SET_SID', payload:response.data.data[studentId].name})
        })
        .catch(error=>{
            // 
        })
    }
}

export const getMarks = (marks)=>{
    return {
        type:'GET_MARKS',
        payload:marks
    } 
}

export const doneMarks = (marks)=>{
    return {
        type:'GET_MARKS_DONE',
        payload:marks
    } 
}


export const getAge = (age)=>{
    return {
        type:'GET_AGE',
        payload:age
    } 
}

export const doneAge = (age)=>{
    return {
        type:'GET_AGE_DONE',
        payload:age
    } 
}