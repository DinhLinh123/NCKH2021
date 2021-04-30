import { all } from "redux-saga/effects";
import { watchSagaGetTeachers } from "../../containers/components/Teachers/saga";

function* rootSaga() {
    yield all([
        watchSagaGetTeachers(),
     
    ]);
  }
  
  export default rootSaga;