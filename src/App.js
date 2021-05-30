import React from "react";
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from "react-router-dom";
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
import TopicsSemesterss from "./pages/topicsemesters";
import EvaluationBoardSemesterss from "./pages/evaluationboardsemester";
import Homess from "./pages/Home";
import Banner from "./layout/Banner";
import { TopicDetail } from "./containers";
import Login from "./containers/Login";

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
              <Semesterss />
            </Route>
    {/* --------------------------------- */}
            <Route path="/chon-giang-vien">
              <ChooseTeacherss />
            </Route>
            
     {/* --------------------------------- */}
     {/* <Route path="/hoc-ky">
              <Semesterss/>
            </Route>         */}

    {/* --------------------------------- */}
            <Route path={`/menu/:tenHocKy/:idHocKy`}>
              <Headers />
            </Route>

       

            {/* <Route path="/danh-sach-giang-vien">
            
              <Teacherss />
            </Route>

            <Route path="/danh-sach-gvhd">
              <ListTeacherss/>
            </Route> */}

            {/* <Route path="/danh-sach-gvhd-theo-ky/:tenHocKy/:idHocKy">
              <ListTeacherSemesterss/>
            </Route> */}

            
          
    {/* --------------------------------- */}
            {/* <Route path="/mon-hoc">
            <Headers />
              <Subjectss/>
            </Route> */}
{/* 
            <Route  path="/danh-sach-mon-hoc/:tenHocKy/:idHocKy">
              
              <SubjectListss/>
            </Route> */}
    
    {/* --------------------------------- */}
            {/* <Route path="/sinh-vien">
              <Studentss/>
            </Route> */}
    {/* --------------------------------- */}
          {/* <Route path="/danh-sach-de-tai">
              <TopicsSemesterss/>
            </Route>

            <Route path="/danh-sach-de-tai-theo-ky/:tenHocKy/:idHocKy">
              <Topicss/>
            </Route> */}
     {/* --------------------------------- */}
            {/* <Route path="/phan-bien">
              <AssignReviewerss/>
            </Route>   
        */}
       {/* --------------------------------- */}
            {/* <Route path="/hoi-dong-tot-nghiep">
              <EvaluationBoardSemesterss/>
            </Route>         */}

             {/* --------------------------------- */}
             {/* <Route path="/danh-sach-hoi-dong-tot-nghiep/:tenHocKy/:idHocKy">
              <EvaluationBoardss/>
            </Route>         */}

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

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }