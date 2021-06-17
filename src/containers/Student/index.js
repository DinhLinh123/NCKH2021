import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { StyledSemester } from '../Semesters/styled';
import { getStudents } from './action';

const StudentList = () => {
  const [idSinhVien, setIdSinhVien] = useState("");
  const [maSinhVien, setMaSinhVien] = useState("");
  const [tenSinhVien, setTenSinhVien] = useState("");
  const [email , setEmail ] = useState("");
  const [dienThoai, setDienThoai] = useState("");
  const [donViThucTap, setDonViThucTap] = useState("");
  const [lopHoc , setLopHoc ] =useState("");

  const dispatch = useDispatch();

  let {idHocKy} = useParams();

  useEffect(() => {
    dispatch(getStudents(idHocKy));
  }, []);
  const StudentListSelecter = useSelector((state) => state.reducerStudentList.list);
    return (
        <div>
            <h1>Danh sách Sinh viên</h1>
            <StyledSemester.Body>
            <table>
          <thead>
            <tr>
              <th>Mã Sinh viên</th>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Đơn vị thực tập</th>
              <th>Lớp học</th>
              <th>Hành động</th>
              
            </tr>
          </thead>
          <tbody>
          {StudentListSelecter?.map ((item, index ) => ( 

            <tr key= {index}>
               
              <td>{item.maSinhVien}</td>
              <td>{item.tenSinhVien}</td>
              <td>{item.email}</td>
              <td>{item.dienThoai}</td>
              <td>{item.donViThucTap}</td>
              <td>{item.lopHoc}</td>
              <td><StyledSemester.ButtonAdd>Sửa</StyledSemester.ButtonAdd></td>
              
                
              
            </tr>
            ))}
          </tbody>
        </table>
        
        </StyledSemester.Body>
        </div>
    );
};

export default StudentList;