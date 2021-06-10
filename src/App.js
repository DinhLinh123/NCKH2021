import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";

import Headers from "./layout/Header";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";

import ChooseTeacherss from "./pages/chooseteacher";

import Banner from "./layout/Banner";
import { AssignReviewer, AssignReviewerChoose, EvaluationBoard, ListTeacherSemester, Semester, Student, SubjectList, Teacher, Topic, TopicDetail } from "./containers";
import Login from "./containers/Login";

import HeaderMonHoc from "./layout/HeaderMonHoc";


const App = () => {
 
  return (

    <Provider store={store}>
    <div className="app" >
      <div style={{margin: "0 3%", background: "#F8F8F8", paddingBottom: "100px", boxShadow: "60px 69px 60px #f0f0f0", }}> 

      <Router>
        <Banner />
        {/* <div style={{display: "flex"}}> */}
        <div>
        {/* <Headers /> */}
        <div className="main_content">
          <Switch>
          <Route exact path="/">
              <Login/>
            </Route>
     {/* --------------------------------- */}        
            <Route exact path="/hoc-ky">
              <Semester />
            </Route>
    {/* --------------------------------- */}
            <Route path="/chon-giang-vien">
              <ChooseTeacherss />
            </Route>
            
  

    {/* --------------------------------- */}
    <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy`}>
            {/* <HiepPage /> */}
            {/* <SubjectList  /> */}
            <Headers />
            </Route>

            {/* <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/mon-hoc`}>
          <SubjectList /> 
         
        </Route>
        <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/chon-giang-vien`}>
          <Teacher />
         
        </Route>
        <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/danh-sach-gvhd`}>
          <ListTeacherSemester />
          
        </Route> */}

<Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/mon-hoc`}>
          <SubjectList /> 
         
        </Route>
        <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/chon-giang-vien`}>
          <Teacher />
         
        </Route>
        <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/danh-sach-gvhd`}>
          <ListTeacherSemester />
          
        </Route>
          
          
    <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc`}>
            <HeaderMonHoc />
          </Route>

          <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc/danh-sach-de-tai`}>
            <Topic/>
          </Route>
          <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc/chon-de-tai-cho-GV`}>
            <Student/>
          </Route>
          <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc/phan-cong-phan-bien`}>
            <AssignReviewerChoose/>
          </Route>
          <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc/phan-bien`}>
            <AssignReviewer/>
          </Route>
          <Route exact path={`/mon-hoc/:tenHocKy/:idHocKy/:tenMonHoc/:idMonHoc/hoi-dong-tot-nghiep`}>
            <EvaluationBoard/>
          </Route>
           

          </Switch>
        </div>

        </div> 
      </Router>
      </div>
    </div>
    </Provider>
  );
};

export default App;

