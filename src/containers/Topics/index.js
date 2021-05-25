import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link, } from 'react-router-dom';
import { StyledSemester } from '../Semesters/styled';
import TopicDetail from '../TopicDetail';
import { getTopics } from './action';

const Topic = () => {
  let { idHocKy } = useParams();
  let {tenHocKy} = useParams();
  //-----------------------------------
  console.log("tên học kỳ" + tenHocKy);

  const dispatch = useDispatch();
  const topicSelecter = useSelector((state) => state.reducerTopic.list);
  console.log("topicSelecter " + topicSelecter);
  let match = useRouteMatch();
  const [hide, setHide] = useState(false);
  
useEffect(() => {
      dispatch(getTopics(idHocKy));
      
    }, []);

  useEffect(() => {
   
    return () => {
      setHide(false);
    }
  }, [])

    //----------------------
    console.log(match, " match");

    //===========

     const onHide= ()=>{
       setHide(true);
       
       
     }
     //setHide(false);
     
  return (
    <div>
      
      <div style={hide ? {display: "block"} : {display: "none"}}>
      {/* {topicSelecter?.map ((item, index ) => ( */}
        {/* <Switch> */}
          
      {/* </Switch> */}
      {/* ))} */}
      </div>
      <div > 
      <h1>{hide ? "" :  `Danh sách đề tài ${tenHocKy}`}</h1>
      <StyledSemester.Body >
      <table style={hide ? {display: "none"} : {display: "block"}}> 
      {/* style={hide ? {display: "none"} : {display: "block"}} */}
          <thead>
            <tr>
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Tên sinh viên</th>
              <th>Tên Học kỳ</th>
              <th>Tên Môn học</th>
              <th>Điểm trung bình</th>
              <th>Đạt</th>
              <th>Ngày tạo</th>
              <th>Người tạo</th>
              <th>Hành động</th>
              <th></th>
              <th>Chi tiết đề tài</th>
            </tr>
          </thead>
          <tbody>
              {topicSelecter?.map ((item, index ) => (

            <tr key= {index}>
               
              <td>{item.maDeTai}</td>
              <td>{item.tenDeTai}</td>
              <td>{item.tenSinhVien}</td>
              <td>{item.tenHocKy}</td>
              <td>{item.tenMonHoc}</td>
              <td>{item.diemTrungBinh}</td>
              <td>{item.isDat}</td>
              <td>{item.ngayTao}</td>
              <td>{item.nguoiTao}</td>
              <td><StyledSemester.ButtonAdd>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>Xóa</StyledSemester.Delete></td>
              <td><StyledSemester.See onClick={()=>onHide()}><Link to={`${match.url}/${item?.idDeTai}`}>Chi tiết ĐT</Link></StyledSemester.See></td>
              
              
            </tr>
            
            ))}
          </tbody>
        </table>
        
        </StyledSemester.Body>
        </div>
        <Route exact path={`${match.url}/:idDeTai`}>
          <TopicDetail />
        </Route>
    </div>
  );
};

export default Topic;