import React, { useState } from "react";
import { StyledHeader } from "./styled";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import { AssignReviewer, AssignReviewerChoose, EvaluationBoard, ListTeacher, ListTeacherSemester, Student, Subject, SubjectList, Teacher, Topic, TopicDetail } from "../../containers";

const Headers = () => {
  let match = useRouteMatch();
  console.log("match.url ",match.url);
  
  return (
    // <h1>Header</h1>

      //  <ul>
      //    <li>
      //      <Link to='/'>Home</Link>
      //    </li>
      //    <li>
      //      <Link to='/giang-vien'>Giang vien</Link>
      //    </li>
      //    <li>
      //      <Link to='/lien-he'>Lien he</Link>
      //    </li>
      //  </ul>
    <StyledHeader.Body>
      

      {/* ==========Menu========================== */}

      <StyledHeader.MenuBody>
      
        <StyledHeader.Menu1><Link to='/hoc-ky'>Trang chủ</Link></StyledHeader.Menu1>  
        {/* <StyledHeader.Menu1><Link to={`${match.url}/mon-hoc`}>Môn Học</Link></StyledHeader.Menu1>    */}
        <StyledHeader.Menu1><Link to={`${match.url}/chon-giang-vien`}>Chọn Giảng viên</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to={`${match.url}/danh-sach-gvhd`}>Danh sách GVHD</Link></StyledHeader.Menu1> 
        <StyledHeader.Menu1 ><Link to={`${match.url}/danh-sach-de-tai`}>Đề tài</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to={`${match.url}/chon-de-tai-cho-GV`}>Phân công ĐT cho GV</Link></StyledHeader.Menu1>
        
        <StyledHeader.Menu1><Link to={`${match.url}/phan-cong-phan-bien`}>Phân công phản biện</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to={`${match.url}/phan-bien`}>Danh sách phản biện</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to={`${match.url}/hoi-dong-tot-nghiep`}>Hội đồng tốt nghiệp</Link></StyledHeader.Menu1>
        
      </StyledHeader.MenuBody>
      <Switch>
        {/* <Route path={`${match.path}/mon-hoc`}>
          <SubjectList />
        </Route> */}

        <Route path={`${match.path}/chon-giang-vien`}>
          <Teacher/>
        </Route>
        <Route path={`${match.path}/danh-sach-gvhd`}>
          <ListTeacherSemester/>
        </Route>
        <Route path={`${match.path}/chon-de-tai-cho-GV`}>
          <Student/>
        </Route>
        <Route path={`${match.path}/danh-sach-de-tai`}>
          <Topic />
        </Route>
        <Route path={`${match.path}/phan-cong-phan-bien`}>
          <AssignReviewerChoose/>
        </Route>
        <Route path={`${match.path}/phan-bien`}>
          <AssignReviewer/>
        </Route>
        <Route path={`${match.path}/hoi-dong-tot-nghiep`}>
          <EvaluationBoard/>
        </Route>
        {/* <Route  path={`${match.path}/:idDeTai`}>
          <TopicDetail />
        </Route> */}
       
         
        
      </Switch>
    </StyledHeader.Body>
  );
};

export default Headers;
