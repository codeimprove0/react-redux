import {all} from 'redux-saga/effects'
import {waitForFetchMarks} from './redux/saga/student.saga'
import {waitForFetchAge} from './redux/saga/age.saga'

export default function* rootSaga(){
  yield all([waitForFetchMarks(),waitForFetchAge()])
}

