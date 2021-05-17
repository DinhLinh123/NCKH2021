import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSemesters } from "../Semesters/action";
import { getTeachers } from "./action";

const Teacher = () => {
  const dispatch = useDispatch();
  const [maGiangVien, setMaGiangVien] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [donViCongTac, setDonViCongTac] = useState("");
  const [dienThoai, setDienThoai] = useState("");

  const teacherSelecter = useSelector((state) => state.reducerTeacher.list);
  const semesterSelecter = useSelector((state) => state.reducerSemester.list);

  const isLoading = useSelector((state) => state.reducerTeacher.isLoading);

  useEffect(() => {
    dispatch(getTeachers());
  }, []);

  useEffect(() => {
    dispatch(getSemesters());
  }, [isLoading]);


  const [values, setValues] = useState([]);
  
  const handleChange = e => {
    console.log(e.target.value);
    const checked = e.target.value
   
       
  
  }


  console.log('value :', values);



  return (
    <>
      <h1>Chọn Giảng giảng viên </h1>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Mã giảng viên</th>
              <th>Họ tên</th>
              <th>Hòm thư</th>
              <th>Đơn vị công tác</th>
              <th>Điện thoại</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teacherSelecter?.map((item, index) => (
              <tr key={index}>
                <td>{item.maGiangVien}</td>
                <td>{item.hoTen}</td>
                <td>{item.homThu}</td>
                <td>{item.donViCongTac}</td>
                <td>{item.dienThoai}</td>

                <input
                  type="checkbox"
                  value={item.id}
                  id="checkbox1"
                  // checked={true}
                  onChange={e => handleChange(e)}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Teacher;
