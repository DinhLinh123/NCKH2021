import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAssignReviewers} from "./action";

const AssignReviewer = () => {
 const dispatch = useDispatch();
  // const [maGiangVien, setMaGiangVien] = useState("");
  // const [hoTen, setHoTen] = useState("");
  // const [donViCongTac, setDonViCongTac] = useState("");
  // const [dienThoai, setDienThoai] = useState("");

  const assignReviewerSelecter = useSelector((state) => state.reducerAssignReviewer.list);
  const isLoading = useSelector((state) => state.reducerAssignReviewer.isLoading);

  useEffect(() => {
    dispatch(getAssignReviewers());
  }, []);

  return (
    <>
      <h1>Danh sách giảng viên</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Mã giảng viên phản biện</th>
              <th>Tên Giảng viên phản biện</th>
              <th>Mã đề tài</th>
              <th>Điểm</th>
              <th>Note</th>
              <th>Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
              {assignReviewerSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.MaGVPB}</td>
              <td>{item.TenGVPB}</td>
              <td>{item.MaDeTai}</td>
              <td>{item.Diem}</td>
              <td>{item.Note}</td>
              <td>{item.NgayTao}</td>
              {/* <form>
                <input name="check" type="checkbox" value="#" />
              </form> */}
            </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default AssignReviewer;
