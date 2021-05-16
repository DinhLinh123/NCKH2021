import { debounce } from "@redux-saga/core/effects";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSemester, deleteSemesters, getSemesters, putSemesters} from "./action";

const Semester = () => {
const dispatch = useDispatch();

const [idHocKy, setIdHocky] = useState("");
const [maHocKy, setMaHocKy] = useState("");
const [tenHocKy, setTenHocKy] = useState("");
const [changeVersion, setChangeVersion] = useState(true);
// const [ngayTao, setNgayTao] = useState("");
// const [ngayXoa, setNgayXoa] = useState(null);
// const [isActive, setIsActive] = useState(true);
// const [isDelete, setIsDelete] = useState(false);
//const [ngayTao, setNgayTao] = useState("");

  const semesterSelecter = useSelector((state) => state.reducerSemester.list);
  const isLoading = useSelector((state) => state.reducerSemester.isLoading);

  useEffect(() => {
    dispatch(getSemesters());
  }, [isLoading]);

  // const getSem = () =>{
  //   dispatch(getSemesters());
  // };
// ----------------- Thêm ---------------------
  const onAddSubmit = (e) => {
    // e.preventDefault();
    console.log({maHocKy, tenHocKy});
    //const add = {maHocKy, tenHocKy };
    
 
    if(maHocKy && tenHocKy){
      const add = {maHocKy, tenHocKy};
      if(changeVersion === true) {
        dispatch(addSemester(add));
        console.log(isLoading);
      } else{
        
        dispatch(putSemesters(idHocKy,add));
        // dispatch(getSemesters());
        setChangeVersion(true);
      }

      
      
      // dispatch(getSemesters());
      // debounce(dispatch(getSemesters()), 2000);
    } else {
      alert("vui lòng nhập thông tin");
    }
    setMaHocKy("");
    setTenHocKy("");
  };

  //------------ Xóa ---------------------

  const onDeleteSemesters =(idHocKy) => {
    dispatch(deleteSemesters(idHocKy, getSemesters));
  };

  //------ sửa -------------------------------------
  const OnPutSemesters = (idHocKy, item) =>{
    setChangeVersion(false);
    setIdHocky(idHocKy);
    setMaHocKy(item.maHocKy);
    setTenHocKy(item.tenHocKy);

  };

  return (
    <>
      <h1>Danh sách Học kỳ </h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          <div>
            <table>
            <thead>
                <tr>
                  <td>{changeVersion ? "Thêm Học kỳ" : "Sửa học kỳ"}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập mã học kỳ"
                      type="text"
                      value={maHocKy}
                      onChange={(maHocKy) => setMaHocKy(maHocKy.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập tên học kỳ"
                      value={tenHocKy}
                      type="text"
                      onChange={(tenHocKy) => setTenHocKy(tenHocKy.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="submit" onClick={() => onAddSubmit()}>
                    {changeVersion ? "Thêm" : "Sửa"}
                    </button>
                    <button>Hủy</button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <table>
          <thead>
            <tr>
              <th>Mã học kỳ</th>
              <th>Tên học kỳ</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {semesterSelecter.map ((item, index ) => {
                // console.log(item);
                return (

            <tr key= {index}>
              <td>{item?.maHocKy ?? ''}</td>
              <td>{item?.tenHocKy ?? ''}</td>
              <td>{item?.ngayTao ?? ''}</td>
              <td><button onClick={() => OnPutSemesters(item.idHocKy, item)}>Sửa</button></td>
              <td><button onClick={() => onDeleteSemesters(item.idHocKy)}>Xóa</button></td>
              
            </tr>
                )
})}
          </tbody>
        </table>
        </div>
      )}
    </>
  );
};

export default Semester;
