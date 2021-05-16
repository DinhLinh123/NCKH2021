import { all } from "redux-saga/effects";
import { watchSagaGetAssignReviewers } from "../../containers/AssignReviewers/saga";
import { watchSagaGetEvaluationBoards } from "../../containers/EvaluationBoards/saga";
import { watchSagaAddSemesters, watchSagaDeleteSemesters, watchSagaGetSemesters, watchSagaPutSemesters } from "../../containers/Semesters/saga";
import { watchSagaGetStudents } from "../../containers/Students/saga";
import { watchSagaGetTeachers } from "../../containers/Teachers/saga";
import { watchSagaGetTopics } from "../../containers/Topics/saga";

function* rootSaga() {
    yield all([
        watchSagaGetTeachers(),
        watchSagaGetStudents(),
        watchSagaGetAssignReviewers(),
        watchSagaGetEvaluationBoards(),
        watchSagaGetTopics(),
        //---Semester-----------
        watchSagaGetSemesters(),
        watchSagaAddSemesters(),
        watchSagaDeleteSemesters(),
        watchSagaPutSemesters(),
        
     
    ]);
  }
  
  export default rootSaga;