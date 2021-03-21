import {takeEvery,takeLatest,call,put} from 'redux-saga/effects'
import {doneAge} from '../allAction'
import axios from 'axios'

 
function* fetchAge(params){
    try{  
      const marksResult =  yield  call(apiData,'helllo','seconddddd',params)
      yield put(doneAge(marksResult)) 
    }catch(e){

    }
}

export function* waitForFetchAge(){
  yield takeLatest('GET_AGE',fetchAge)
}

const apiData = async (first,id,third)=>{ 
  const apiRecord = await axios.get('http://localhost/api/article-list')
  return apiRecord.data.studentAge
}