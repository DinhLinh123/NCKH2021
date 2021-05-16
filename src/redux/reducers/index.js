import { combineReducers } from "redux";
import reducerTeacher from "../../containers/Teachers/reducer";
import reducerStudent from "../../containers/Students/reducer";
import reducerAssignReviewer from "../../containers/AssignReviewers/reducer";
import reducerEvaluationBoard from "../../containers/EvaluationBoards/reducer";
import reducerTopic from "../../containers/Topics/reducer";
import reducerSemester from "../../containers/Semesters/reducer";


export const rootReducer = combineReducers({
    reducerTeacher,
    reducerStudent,
    reducerAssignReviewer,
    reducerEvaluationBoard,
    reducerTopic,
    reducerSemester,
    
  });