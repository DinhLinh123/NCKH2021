import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledSemester } from "../Semesters/styled";
import { getEvaluationBoards } from "./action";

const EvaluationBoard= () => {
   const dispatch = useDispatch();
  // const [maGiangVien, setMaGiangVien] = useState("");
  // const [hoTen, setHoTen] = useState("");
  // const [donViCongTac, setDonViCongTac] = useState("");
  // const [dienThoai, setDienThoai] = useState("");

  const evaluationBoardSelecter = useSelector((state) => state.reducerEvaluationBoard.list);
  const isLoading = useSelector((state) => state.reducerEvaluationBoard.isLoading);

  useEffect(() => {
    dispatch(getEvaluationBoards());
  }, []);

  return (
    <>
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
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Tên học kỳ</th>
              <th>Điểm hội đồng</th>
              <th>Nhận xét</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {evaluationBoardSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.MaHoiDong}</td>
              <td>{item.TenHoiDong}</td>
              <td>{item.MaDeTai}</td>
              <td>{item.TenDeTai}</td>
              <td>{item.TenHocKy}</td>
              <td>{item.DiemHoiDong}</td>
              <td>{item.NhanXet}</td>
              <td>{item.NgayTao}</td>
              <td><StyledSemester.ButtonAdd>sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>xóa</StyledSemester.Delete></td>
              
            </tr>
            ))}
          </tbody>
        </table>
        </StyledSemester.Body>
      )}
      </div>
    </>
  );
};

export default EvaluationBoard;
