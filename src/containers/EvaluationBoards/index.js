import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import HeaderMonHoc from "../../layout/HeaderMonHoc";
import { StyledSemester } from "../Semesters/styled";
import { getEvaluationBoards } from "./action";

const EvaluationBoard= () => {
   const dispatch = useDispatch();
   let {idHocKy} = useParams();
  const evaluationBoardSelecter = useSelector((state) => state.reducerEvaluationBoard.list);
  const isLoading = useSelector((state) => state.reducerEvaluationBoard.isLoading);
console.log("evaluationBoardSelecter = " , evaluationBoardSelecter);
  useEffect(() => {
    dispatch(getEvaluationBoards(idHocKy));
  }, []);

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
              
              
              <td><StyledSemester.ButtonAdd>sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>xóa</StyledSemester.Delete></td>
              
            </tr>
            ))}
          </tbody>
        </table>
        </StyledSemester.Body>
      )}
      </div>
      </div>
      </StyledSemester.Flex>
    </>
  );
};

export default EvaluationBoard;
