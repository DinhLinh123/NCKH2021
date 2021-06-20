import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useParams, useRouteMatch } from 'react-router';
import { Link, } from 'react-router-dom';
import HeaderMonHoc from '../../layout/HeaderMonHoc';
import { getLisTeacherSemesters } from '../ListTeacherSemesters/action';
import { StyledSemester } from '../Semesters/styled';
import TopicDetail from '../TopicDetail';
import { getTopics } from './action';

const Topic = () => {
  let { idHocKy } = useParams();
  let {tenHocKy} = useParams();
  let {tenMonHoc} =useParams();
  let {idMonHoc} =useParams();
  let {typeApprover} =useParams();
  

  //-----------------------------------
  console.log("tên học kỳ" + tenHocKy);

  const dispatch = useDispatch();
  const topicSelecter = useSelector((state) => state.reducerTopic.list);
  console.log("topicSelecter " + topicSelecter);
  let match = useRouteMatch();
  const [hide, setHide] = useState(false);
  
  
useEffect(() => {
      dispatch(getTopics(idHocKy,idMonHoc));
     
      
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
       setHide1(true);
       
       
     }
     //setHide(false);


     //------------phân công phản biện-------------
     const [hide1, setHide1] =useState(true);
     const teacherSelecter = useSelector((state) => state.reducerListTeacherSemester.list);
     useEffect(() => {
      dispatch(getLisTeacherSemesters(idHocKy));
  }, []);
  console.log("teacherSelecter = ", teacherSelecter);
    const handleChange=() =>{
      
    } 
  const onShow= ()=>{
      setHide1(false);

     }
     const onShow1= ()=>{
      setHide1(false);
      setAssign(false);

     }

     //--- phân công hội đồng---------
     const [assign, setAssign]=useState(true);
     
  return (
    <StyledSemester.Flex>
    <div><HeaderMonHoc /></div>
    <div className="Body">
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
              <th style={typeApprover<2 ? {display: "none"} : {display: "block"}}>Phân công</th>
              
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
              <td style={typeApprover < 2 ? {display: "none"} : {display: "block"}}>
                <StyledSemester.See  
                onClick={()=> onShow(item)}>
                  Phản biện
                  </StyledSemester.See>

                </td>
              {/* <td style={typeApprover < 1 ? {display: "none"} : {display: "block"}}>
                <StyledSemester.See 
                 onClick={()=> onShow1(item)}>
                  Hội đồng</StyledSemester.See></td> */}
              
              <td><StyledSemester.ButtonAdd>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>Xóa</StyledSemester.Delete></td>
              <td><StyledSemester.See onClick={()=>onHide()}><Link to={`/mon-hoc/${tenHocKy}/${idHocKy}/${tenMonHoc}/${idMonHoc}/${typeApprover}/${item?.idDeTai}`}>Chi tiết ĐT</Link></StyledSemester.See></td>
              
              
            </tr>
            
            ))}
          </tbody>
        </table>
        <StyledSemester.Popup id="hide" style={hide1 ? {display: "none"} : {display: "block"}} >
          <StyledSemester.PopupContent>
          <div className="Divpopup">
           <StyledSemester.PopupTitle>
          <StyledSemester.Popuptext> Phân công giảng viên phản biện </StyledSemester.Popuptext>
          <StyledSemester.Close onClick={onHide}>&times;</StyledSemester.Close>
          </StyledSemester.PopupTitle> 
          <div className="save">
            <StyledSemester.ButtonAdd>Lưu</StyledSemester.ButtonAdd>
          </div>
          <table>
            <thead>
              <tr>
                <th>Mã Giảng viên</th>
                <th>Họ tên</th>
                <th>Đơn vị công tác</th>
                <th>Hòm thư</th>
                <th>Điện thoại</th>
                <th>Chọn</th>
              
              </tr>
            </thead>
            <tbody>
            {teacherSelecter?.map ((item, index ) => (
              <tr key= {index}>
                <td>{item.maGVHD}</td>
              <td>{item.tenGVHD}</td>
              <td>{item.donViCongTac}</td>
              <td>{item.email}</td>
              <td>{item.dienThoai}</td>
                <td><input 
                  type="checkbox" 
                  value={item.id}
                  id="checkbox1"
                  onChange={()=> handleChange(item)}
                  /></td>
              </tr>
              ))}
             
            </tbody>
          </table>
          </div>
          </StyledSemester.PopupContent>
        </StyledSemester.Popup>
        
        </StyledSemester.Body>
        </div>
        
    </div>
    </div>
    </StyledSemester.Flex>
  );
};

export default Topic;