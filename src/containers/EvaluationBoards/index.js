import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import HeaderMonHoc from "../../layout/HeaderMonHoc";
import { StyledSemester } from "../Semesters/styled";
import { getTopics } from "../Topics/action";
import { getEvaluationBoards } from "./action";

const EvaluationBoard= () => {
   const dispatch = useDispatch();
   let {idHocKy} = useParams();
   let {idMonHoc} = useParams();
  const evaluationBoardSelecter = useSelector((state) => state.reducerEvaluationBoard.list);
  const isLoading = useSelector((state) => state.reducerEvaluationBoard.isLoading);
console.log("evaluationBoardSelecter = " , evaluationBoardSelecter);
  useEffect(() => {
    dispatch(getEvaluationBoards(idHocKy));
  }, []);
  //--Phân đề tài-----
  const [hide, setHide]=useState(true);

  const topicSelecter = useSelector((state) => state.reducerTopic.list);
  useEffect(() => {
    dispatch(getTopics(idHocKy,idMonHoc));
   
    
  }, []);
  const onHide= ()=>{
    setHide(true);

  };
  const onShow= ()=>{
    setHide(false);

  };
  const handleChange= ()=>{

  }
  

  return (
    <>
    <StyledSemester.Flex>
    <div><HeaderMonHoc /></div>
    <div className="Body">
      <div>
      <h1>Danh sách Hội đồng tốt nghiệp</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <StyledSemester.Body>
        <table>
          <thead>
            <tr>
              <th>Mã hội đồng</th>
              <th>Tên hội đồng</th>
              <th>Tên Môn học</th>
              
              <th>Tên học kỳ</th>
              
              <th>Phân công</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {evaluationBoardSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maHoiDong}</td>
              <td>{item.tenHoiDong}</td>
              <td>{item.tenMonHoc}</td>
              
              <td>{item.tenHocKy}</td>
              
              <td >
                <StyledSemester.See  
                onClick={()=> onShow(item)}>
                  Đề tài
                  </StyledSemester.See>

                </td>
              <td><StyledSemester.ButtonAdd>sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>xóa</StyledSemester.Delete></td>
              
            </tr>
            ))}
          </tbody>
        </table>
        <StyledSemester.Popup id="hide" style={hide ? {display: "none"} : {display: "block"}} >
          <StyledSemester.PopupContent>
            <div className="Divpopup">
           <StyledSemester.PopupTitle>
          <StyledSemester.Popuptext> Phân công đề tài cho hội đồng </StyledSemester.Popuptext>
          <StyledSemester.Close onClick={onHide}>&times;</StyledSemester.Close>
          </StyledSemester.PopupTitle> 
          <div className="save">
          <StyledSemester.ButtonAdd>Lưu</StyledSemester.ButtonAdd>
          </div>
          <table>
            <thead>
              <tr>
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Tên sinh viên</th>
              <th>Tên Học kỳ</th>
              <th>Tên Môn học</th>
                <th>Chọn</th>
              
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
      )}
      </div>
      </div>
      </StyledSemester.Flex>
    </>
  );
};

export default EvaluationBoard;
