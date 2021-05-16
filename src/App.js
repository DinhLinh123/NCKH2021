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
            <Route path="/giang-vien">
              <Teacherss />
            </Route>

    {/* --------------------------------- */}
            <Route path="/bo-mon">
              <Subjectss/>
            </Route>

    {/* --------------------------------- */}
            <Route path="/sinh-vien">
              <Studentss/>
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
