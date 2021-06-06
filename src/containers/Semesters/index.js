import { debounce } from "@redux-saga/core/effects";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Headers from "../../layout/Header";
import { addSemester, deleteSemesters, getSemesters, putSemesters} from "./action";
import { StyledSemester } from "./styled";




const Semester = () => {

const dispatch = useDispatch();
let match = useRouteMatch();
console.log("match.url ",match.url);

const [idHocKy, setIdHocky] = useState("");
const [maHocKy, setMaHocKy] = useState("");
const [tenHocKy, setTenHocKy] = useState("");
const [changeVersion, setChangeVersion] = useState(true);
const [changeVersion1, setChangeVersion1] = useState(false);
// const [ngayTao, setNgayTao] = useState("");
// const [ngayXoa, setNgayXoa] = useState(null);
// const [isActive, setIsActive] = useState(true);
// const [isDelete, setIsDelete] = useState(false);
//const [ngayTao, setNgayTao] = useState("");
// useState

  const semesterSelecter = useSelector((state) => state.reducerSemester.list);
  const isLoading = useSelector((state) => state.reducerSemester.isLoading);
  console.log("semesterSelecter ",{semesterSelecter});

  useEffect(() => {
    dispatch(getSemesters());
    
  }, [isLoading]);

  // const getSem = () =>{
  //   dispatch(getSemesters());
  // };

  const onAdd = () =>{
    setChangeVersion1(true);

  };

  const getPro =()=> {
    dispatch(getSemesters())  ;
  };
// ----------------- Thêm ---------------------

  const onAddSubmit = (e) => {
    console.log({maHocKy, tenHocKy});
    //const add = {maHocKy, tenHocKy };
    
 
    if(maHocKy && tenHocKy){
      const add = {maHocKy, tenHocKy};
      if(changeVersion === true) {
        
        dispatch(addSemester(add,getPro()));
        // debounce(dispatch(getSemesters()), 2000)
        console.log(isLoading);
        setChangeVersion1(false);
      } else{
        
        dispatch(putSemesters(idHocKy,add, getSemesters));
        //dispatch(getSemesters());
        // debounce(dispatch(getSemesters()), 2000)
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
    setChangeVersion1(true);
    setChangeVersion(false);
    setIdHocky(idHocKy);
    setMaHocKy(item.maHocKy);
    setTenHocKy(item.tenHocKy);

  };
  const onHuy =()=>{
    setChangeVersion1(false);

  };

  return (
    <StyledSemester.Div>
      <div>
      <h1>Danh sách Học kỳ </h1>
      {/* {isLoading ? (
        <div>Loading</div>
      ) : ( */}
        <StyledSemester.Body>
          <div>
            <StyledSemester.ButtonAdd className="bottom" type="submit" onClick={() => onAdd()}>Thêm học kỳ</StyledSemester.ButtonAdd>
            
            <table style={changeVersion1 ? {display: "block"} : {display: "none"}}>
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
                    <button type="submit" onClick={() => onHuy()}>Hủy</button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <table>
          <thead>
            <tr>
              <th>Xem</th>
              <th>Mã học kỳ</th>
              <th>Tên học kỳ</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
              <th></th>

            </tr>
          </thead>
          <tbody>
              {semesterSelecter.map ((item, index ) => {
                // console.log(item);
                return (
            <tr key= {index}>
               <Link to={`/mon-hoc/${item?.tenHocKy}/${item?.idHocKy}`}>
              <td><StyledSemester.See>Xem Thông tin</StyledSemester.See></td>
              </Link>
              <td>{item?.maHocKy ?? ''}</td>
              <td>{item?.tenHocKy ?? ''}</td>
              
              <td>{item?.ngayTao ?? ''}</td>
              <td><StyledSemester.ButtonAdd onClick={() => OnPutSemesters(item.idHocKy, item)}>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete onClick={() => onDeleteSemesters(item.idHocKy)}>Xóa</StyledSemester.Delete></td>
              
            </tr>
           
            
                )
                
})}
          </tbody>
        </table>
        
        </StyledSemester.Body>
      {/* )} */}
      </div>
    </StyledSemester.Div>
  );
};

export default Semester;
