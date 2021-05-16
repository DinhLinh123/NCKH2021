import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Teacherss from "./pages/teacher";
import Headers from "./layout/Header";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Subjectss from "./pages/subject";
import Studentss from "./pages/student";
import AssignReviewerss from "./pages/assignreviewer";
import EvaluationBoardss from "./pages/evaluationboard";
import Semesterss from "./pages/semester";
import ChooseTeacherss from "./pages/chooseteacher";
import ListTeacherss from "./pages/listteacher";
import ListTeacherSemesterss from "./pages/listteachersemester";
import SubjectListss from "./pages/subjectlist";
import Topicss from "./pages/topic";

const App = () => {
  return (
    <Provider store={store}>
    <div className="app">
      <Router>
        <Headers />
        <div className="main_content">
          <Switch>
            <Route exact path="/">
              <Semesterss />
            </Route>

    {/* --------------------------------- */}
            <Route path="/chon-giang-vien">
              <ChooseTeacherss />
            </Route>

            <Route path="/chon-giang-vien-theo-ky">
              <Teacherss />
            </Route>

            <Route path="/danh-sach-gvhd">
              <ListTeacherss/>
            </Route>

            <Route path="/danh-sach-giang-vien-theo-ky">
              <ListTeacherSemesterss/>
            </Route>

            
          
    {/* --------------------------------- */}
            <Route path="/mon-hoc">
              <Subjectss/>
            </Route>

            <Route path="/danh-sach-mon-hoc-theo-ky">
              <SubjectListss/>
            </Route>
    
    {/* --------------------------------- */}
            <Route path="/sinh-vien">
              <Studentss/>
            </Route>
    {/* --------------------------------- */}
            <Route path="/de-tai">
              <Topicss/>
            </Route>
     {/* --------------------------------- */}
            <Route path="/phan-bien">
              <AssignReviewerss/>
            </Route>   
       
       {/* --------------------------------- */}
            <Route path="/hoi-dong">
              <EvaluationBoardss/>
            </Route>        
          </Switch>
        </div>

        
      </Router>
    </div>
    </Provider>
  );
};

export default App;
