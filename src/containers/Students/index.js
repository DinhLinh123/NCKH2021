import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents} from "./action";

const Student = () => {
    const dispatch = useDispatch();
    
    const isLoading = useSelector((state) => state.reducerStudent.isLoading);

    const studentSelecter = useSelector((state) => state.reducerStudent.list);
    const teacherSelecter = useSelector((state) => state.reducerTeacher.list);

    useEffect(() => {
        dispatch(getStudents());
    }, []);
    return (
        <>
            <h1> Chọn GVHD cho SV</h1>
            {isLoading ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Họ tên</th>
              <th>Hòm thư</th>
              <th>Mã lớp</th>
              <th>Điện thoại</th>
              <th>Tên thông tin chung</th>
              <th>Giảng viên hướng dẫn</th>
            </tr>
          </thead>
          <tbody>
              {studentSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maSinhVien}</td>
              <td>{item.hoTen}</td>
              <td>{item.homThu}</td>
              <td>{item.maLop}</td>
              <td>{item.dienThoai}</td>
              <td>{item.tenThongTinChung}</td>
              
              <td>
                  
                    <select name="myName">
                    {teacherSelecter?.map ((i, index ) => (
                        <option value={index}>{i.hoTen}</option>
                        ))}
                        </select></td>
               
            </tr>
             ))}
          </tbody>
        </table>
      )}
        </>
    );
};

export default Student;