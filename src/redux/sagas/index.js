import { all } from "redux-saga/effects";
import { watchSagaAddAssignReviewers, watchSagaDeleteAssignReviewers, watchSagaGetAssignReviewers, watchSagaPutAssignReviewers } from "../../containers/AssignReviewers/saga";
import { watchSagaGetEvaluationBoards } from "../../containers/EvaluationBoards/saga";
import { watchSagaGetListTeacherSemesters } from "../../containers/ListTeacherSemesters/saga";
import { watchSagaAddSemesters, watchSagaDeleteSemesters, watchSagaGetSemesters, watchSagaPutSemesters } from "../../containers/Semesters/saga";
import { watchSagaGetStudents } from "../../containers/ChooseTopic/saga";
import { watchSagaGetTopicDetails } from "../../containers/TopicDetail/saga";
import { watchSagaGetSubjectLists } from "../../containers/SubjectLists/saga";
import { watchSagaGetTeachers } from "../../containers/Teachers/saga";
import { watchSagaGetTopics } from "../../containers/Topics/saga";

function* rootSaga() {
    yield all([
        watchSagaGetTeachers(),
        watchSagaGetStudents(),
        //-----AssignReviewer---------------------
        watchSagaGetAssignReviewers(),
        watchSagaAddAssignReviewers(),
        watchSagaDeleteAssignReviewers(),
        watchSagaPutAssignReviewers(),
        //------EvaluationBoard----------------------
        watchSagaGetEvaluationBoards(),
        //--------Topic---------------------
        watchSagaGetTopics(),
        watchSagaGetTopicDetails(),
        // //---Semester-----------
        watchSagaGetSemesters(),
        watchSagaAddSemesters(),
        watchSagaDeleteSemesters(),
        watchSagaPutSemesters(),

        // // ---- SubjectList----------------------------------

        watchSagaGetSubjectLists(),

        // //----- ListTeacherSemester------------

        watchSagaGetListTeacherSemesters(),
        
     
    ]);
  }
  
  export default rootSaga;