import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { StyledSemester } from "../Semesters/styled";
import { getAssignReviewers} from "./action";

const AssignReviewer = () => {
let {idHocKy}= useParams();
let {tenHocKy} = useParams();

//-----------------------------
const [idPhanBien, setIdPhanBien] =useState();
const [maGVPB, setMaGVPB] = useState();
const [tenGVPB, setTenGVPB] = useState();
const [maDetai, setMaDetai] = useState();
const [diem, setDiem] = useState();
const [note, setNote] = useState();
const [changeVersion, setChangeVersion] = useState(true);
const [changeVersion1, setChangeVersion1] = useState(false);

//-------------------sửa-----------------------------
const OnPutSemesters = (idPhanBien, item) =>{
  setChangeVersion1(true);
  setChangeVersion(false);
  setIdPhanBien(idPhanBien);
  setMaGVPB(item.maGVPB);


};



 const dispatch = useDispatch();
 

  const assignReviewerSelecter = useSelector((state) => state.reducerAssignReviewer.list);
  const isLoading = useSelector((state) => state.reducerAssignReviewer.isLoading);

  useEffect(() => {
    dispatch(getAssignReviewers(idHocKy));
  }, []);

  return (
    <>
    <div>
      <h1>Danh sách phân công phản biện {tenHocKy}</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <StyledSemester.Body>
          <div>
          <StyledSemester.ButtonAdd className="bottom" >Thêm GV phản biện</StyledSemester.ButtonAdd>
            
            <table style={changeVersion1 ? {display: "block"} : {display: "none"}}>
            <thead>
                <tr>
                  <td>{changeVersion ? "Thêm GV phản biện" : "Sửa GV phản biện"}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập mã GVPB"
                      type="text"
                      value={maGVPB}
                      onChange={(maGVPB )=> setMaGVPB(maGVPB.target.value)}
                     
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập tên học kỳ"
                      value={tenHocKy}
                      type="text"
                      
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                  <button type="submit" > Thêm
                    {/* {changeVersion ? "Thêm" : "Sửa"} */}
                    </button>
                    <button type="submit" >Hủy</button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <table>
          <thead>
            <tr>
              <th>Mã giảng viên phản biện</th>
              <th>Tên Giảng viên phản biện</th>
              <th>Mã đề tài</th>
              <th>Điểm</th>
              <th>Note</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {assignReviewerSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maGVPB}</td>
              <td>{item.tenGVPB}</td>
              <td>{item.maDeTai}</td>
              <td>{item.diem}</td>
              <td>{item.note}</td>
              <td>{item.ngayTao}</td>
              <td><StyledSemester.ButtonAdd onClick={() => OnPutSemesters(item.idPhanBien, item)}>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete >Xóa</StyledSemester.Delete></td>
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

export default AssignReviewer;
