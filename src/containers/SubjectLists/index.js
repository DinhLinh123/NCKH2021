import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { StyledSemester } from '../Semesters/styled';
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
            <StyledSemester.Body>
            <table>
          <thead>
            <tr>
              <th>Mã môn học</th>
              <th>Tên môn học</th>
              <th>Điều kiện tiên quyết</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {subjectListSelecter?.map ((item, index ) => (

            <tr key= {index}>
               
              <td>{item.maMonHoc}</td>
              <td>{item.tenMonHoc}</td>
              <td>{item.typeApprover}</td>
              <td>{item.ngayTao}</td>
              <td><StyledSemester.ButtonAdd>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete>Xóa</StyledSemester.Delete></td>
                
              
            </tr>
            ))}
          </tbody>
        </table>
        </StyledSemester.Body>
        </div>
    );
};

export default SubjectList;