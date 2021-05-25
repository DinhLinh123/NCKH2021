import { combineReducers } from "redux";
import reducerTeacher from "../../containers/Teachers/reducer";
import reducerStudent from "../../containers/ChooseTopic/reducer";
import reducerAssignReviewer from "../../containers/AssignReviewers/reducer";
import reducerEvaluationBoard from "../../containers/EvaluationBoards/reducer";
import reducerTopic from "../../containers/Topics/reducer";
import reducerTopicDetail from "../../containers/TopicDetail/reducer";
import reducerSemester from "../../containers/Semesters/reducer";
import reducerSubject from "../../containers/Subjects/reducer";
import reducerSubjectList from "../../containers/SubjectLists/reducer";
import reducerListTeacherSemester from "../../containers/ListTeacherSemesters/reducer";



export const rootReducer = combineReducers({
    reducerTeacher,
    reducerStudent,
    reducerAssignReviewer,
    reducerEvaluationBoard,
    reducerTopic,
    reducerSemester,
    reducerSubject,
    reducerSubjectList,
    reducerListTeacherSemester,
    reducerTopicDetail,
  });