import { all } from "redux-saga/effects";
import { watchSagaAddAssignReviewers, watchSagaDeleteAssignReviewers, watchSagaGetAssignReviewers, watchSagaPutAssignReviewers } from "../../containers/AssignReviewers/saga";
import { watchSagaGetEvaluationBoards } from "../../containers/EvaluationBoards/saga";
import { watchSagaGetListTeacherSemesters } from "../../containers/ListTeacherSemesters/saga";
import { watchSagaAddSemesters, watchSagaDeleteSemesters, watchSagaGetSemesters, watchSagaPutSemesters } from "../../containers/Semesters/saga";
import { watchSagaGetStudents } from "../../containers/ChooseTopic/saga";
import { watchSagaGetTopicDetails } from "../../containers/TopicDetail/saga";
import { watchSagaAddSubjectLists, watchSagaGetSubjectLists } from "../../containers/SubjectLists/saga";
import { watchSagaGetTeachers } from "../../containers/Teachers/saga";
import { watchSagaGetTopics } from "../../containers/Topics/saga";
import { watchSagaAddLogins } from "../../containers/Login/saga";
import { watchSagaGetStudentList } from "../../containers/Student/saga";
import { watchSagaGetFolders } from "../../containers/Folder/saga";
//import {watchSagaGetStudentList} from "../../containers/Student/saga";

function* rootSaga() {
    yield all([
        //------LOGIN------------------
        watchSagaAddLogins(),

        //---------------
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
        watchSagaAddSubjectLists(),

        // //----- ListTeacherSemester------------

        watchSagaGetListTeacherSemesters(),

        //========student list-----------------

        watchSagaGetStudentList(),

        //-----------Folder-----------
        watchSagaGetFolders(),
        
     
    ]);
  }
  
  export default rootSaga;