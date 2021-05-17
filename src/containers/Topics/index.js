import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTopics } from './action';

const Topic = () => {
  let { idHocKy } = useParams();
  let {tenHocKy} = useParams();
  console.log("tên học kỳ" + tenHocKy);

  const dispatch = useDispatch();
  const topicSelecter = useSelector((state) => state.reducerTopic.list);
console.log("topicSelecter " + topicSelecter);
  useEffect(() => {
      dispatch(getTopics(idHocKy));
    }, []);
  return (
    <div>
      <h1>Danh sách đề tài {tenHocKy}</h1>
      <table>
          <thead>
            <tr>
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Tên sinh viên</th>
              <th>Tên Học kỳ</th>
              <th>Tên Môn học</th>
              <th>Điểm trung bình</th>
              <th>Đạt</th>
              <th>Ngày tạo</th>
              <th>Người tạo</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {topicSelecter?.map ((item, index ) => (

            <tr key= {index}>
               
              <td>{item.maDeTai}</td>
              <td>{item.tenDeTai}</td>
              <td>{item.tenSinhVien}</td>
              <td>{item.tenHocKy}</td>
              <td>{item.tenMonHoc}</td>
              <td>{item.diemTrungBinh}</td>
              <td>{item.isDat}</td>
              <td>{item.ngayTao}</td>
              <td>{item.nguoiTao}</td>
              <td><button>Sửa</button></td>
              <td><button>Xóa</button></td>
                
              
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default Topic;