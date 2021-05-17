import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSubjectLists } from './action';

const SubjectList = () => {

    let { idHocKy } = useParams();
    let {tenHocKy} = useParams();
    console.log("tên học kỳ" + tenHocKy);

    const dispatch = useDispatch();
    const subjectListSelecter = useSelector((state) => state.reducerSubjectList.list);

    useEffect(() => {
        dispatch(getSubjectLists(idHocKy));
      }, []);
    return (
        <div>
            <h1>Danh sách Môn {tenHocKy}</h1>
            <table>
          <thead>
            <tr>
              <th>Mã môn học</th>
              <th>Tên môn học</th>
              <th>Điều kiện tiên quyết</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
              {subjectListSelecter?.map ((item, index ) => (

            <tr key= {index}>
               
              <td>{item.maMonHoc}</td>
              <td>{item.tenMonHoc}</td>
              <td>{item.typeApprover}</td>
              <td>{item.ngayTao}</td>
              <button>Sửa</button>
              <button>Xóa</button>
                
              
            </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
};

export default SubjectList;