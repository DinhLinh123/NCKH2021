import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getLisTeacherSemesters } from '../ListTeacherSemesters/action';
import { StyledSemester } from '../Semesters/styled';
import { getTopics } from '../Topics/action';
import { getStudents} from "./action";

const Student = () => {

  const [save , setSave]= useState([]);

  let { idHocKy } = useParams();
    let {tenHocKy} = useParams();
    const dispatch = useDispatch();
    
    const isLoading = useSelector((state) => state.reducerStudent.isLoading);

    const topicSelecter = useSelector((state) => state.reducerTopic.list);
    const teacherSelecter = useSelector((state) => state.reducerListTeacherSemester.list);

    useEffect(() => {
        dispatch(getTopics(idHocKy));
    }, []);

    useEffect(() => {
      dispatch(getLisTeacherSemesters(idHocKy));
  }, []);

  //------------------------

  const onHandelTopic = (idDT) =>{
    console.log('chay vao day',idDT.target.value);
    setSave(idDT.target.value.split(','))

  }
  const clearValueSaved =()=>{
    setSave([]);
  }
  useEffect(() => {
    console.log({save});
    return () => {
      
    }
  }, [save])
  const updateTopic =async()=>{
    if(save.length >0){
      try {
        let data ={
          iddetai : save[0],
          idGVHD : save[1]
        }
        console.log({data});
        const update =await axios.post(`https://quanlydoan.live/api/ChiTietDeTai/ChiTietDeTai/${save[0]}/${save[1]}`,data)
        console.log({update});
      } catch (error) {
        console.log('loi update detai');
      }
    }
  }
    return (
        <>
        <div>
            <h1> Chọn Đề tài cho Giảng Viên {tenHocKy}</h1>
            {isLoading ? (
        <div>Loading</div>
      ) : (
        
        <StyledSemester.Body>
          
          <table>
          <thead>
            <tr>
              <th>Mã giảng viên</th>
              <th>Họ tên</th>
              <th>Đơn vị công tác</th>
              <th>Hòm thư</th>
              <th>Điện thoại</th>
              <th>Chọn đề tài</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {teacherSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maGVHD}</td>
              <td>{item.tenGVHD}</td>
              <td>{item.donViCongTac}</td>
              <td>{item.email}</td>
              <td>{item.dienThoai}</td>
              
              
              <td>
                  
                    <select name="myName" onChange={onHandelTopic}>
                    {topicSelecter?.map ((i, index ) => (
                        <option value={[i.idDeTai,item.maGVHD]} >{i.tenDeTai} </option>
                        ))}
                        </select>
                        </td>
              <td><button type="submit" onClick={updateTopic}>Lưu</button></td>
              
               
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

export default Student;