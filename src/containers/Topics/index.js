import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTopics } from "./action";

const Topic = () => {
  const dispatch = useDispatch();
  const [maGiangVien, setMaGiangVien] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [donViCongTac, setDonViCongTac] = useState("");
  const [dienThoai, setDienThoai] = useState("");

  const topicSelecter = useSelector((state) => state.reducerTopic.list);
  const isLoading = useSelector((state) => state.reducerTopic.isLoading);

  useEffect(() => {
    dispatch(getTopics());
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
              <th>Mã giảng viên</th>
              <th>Họ tên</th>
              <th>Hòm thư</th>
              <th>Đơn vị công tác</th>
              <th>Điện thoại</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {topicSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maGiangVien}</td>
              <td>{item.hoTen}</td>
              <td>{item.homThu}</td>
              <td>{item.donViCongTac}</td>
              <td>{item.dienThoai}</td>
              <form>
                <input name="check" type="checkbox" value="#" />
              </form>
            </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Topic;
