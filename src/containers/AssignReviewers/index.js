import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import HeaderMonHoc from "../../layout/HeaderMonHoc";
import { StyledSemester } from "../Semesters/styled";
import { getTopics } from "../Topics/action";
import { getAssignReviewers} from "./action";

const AssignReviewer = () => {
let {idHocKy}= useParams();
let {tenHocKy} = useParams();
let {idMonHoc} = useParams();

//-----------------------------
const [idPhanBien, setIdPhanBien] =useState();
const [maGVPB, setMaGVPB] = useState();
const [tenGVPB, setTenGVPB] = useState();
const [maDetai, setMaDetai] = useState();
const [diem, setDiem] = useState();
const [note, setNote] = useState();
const [changeVersion, setChangeVersion] = useState(true);
const [changeVersion1, setChangeVersion1] = useState(false);
const [hide, setHide]=useState(true);

//-------------------sửa-----------------------------
const OnPutSemesters = (idPhanBien, item) =>{
  setChangeVersion1(true);
  setChangeVersion(false);
  setIdPhanBien(idPhanBien);
  setMaGVPB(item.maGVPB);


};



 const dispatch = useDispatch();
 

  const assignReviewerSelecter = useSelector((state) => state.reducerAssignReviewer.list);
  const isLoading = useSelector((state) => state.reducerAssignReviewer.isLoading);

  useEffect(() => {
    dispatch(getAssignReviewers(idHocKy));
  }, []);

  //----phân công đề tài--------------------------------
  const onShow= ()=>{
    setHide(false);

  };
  useEffect(() => {
    dispatch(getTopics(idHocKy,idMonHoc));
   
    
  }, []);
  const onHide= ()=>{
    setHide(true);

  };
  const handleChange= ()=>{

  }
  const topicSelecter = useSelector((state) => state.reducerTopic.list);
  return (
    <>
    <StyledSemester.Flex>
    <div><HeaderMonHoc /></div>
    <div className="Body">
      <div>
      <h1>Danh sách phân công phản biện {tenHocKy}</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <StyledSemester.Body>
          <div>
          {/* <StyledSemester.ButtonAdd className="bottom" >Thêm GV phản biện</StyledSemester.ButtonAdd> */}
            
            <table style={changeVersion1 ? {display: "block"} : {display: "none"}}>
            <thead>
                <tr>
                  <td>{changeVersion ? "Thêm GV phản biện" : "Sửa GV phản biện"}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập mã GVPB"
                      type="text"
                      value={maGVPB}
                      onChange={(maGVPB )=> setMaGVPB(maGVPB.target.value)}
                     
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      placeholder="Nhập tên học kỳ"
                      value={tenHocKy}
                      type="text"
                      
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                  <button type="submit" > Thêm
                    {/* {changeVersion ? "Thêm" : "Sửa"} */}
                    </button>
                    <button type="submit" >Hủy</button>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        <table>
          <thead>
            <tr>
              <th>Mã giảng viên phản biện</th>
              <th>Tên Giảng viên phản biện</th>
              <th>Mã đề tài</th>
              <th>Điểm</th>
              <th>Note</th>
              <th>Phân công</th>
              <th colspan="2">Hành động</th>
              
            </tr>
          </thead>
          <tbody>
              {assignReviewerSelecter?.map ((item, index ) => (

            <tr key= {index}>
              <td>{item.maGVPB}</td>
              <td>{item.tenGVPB}</td>
              <td>{item.maDeTai}</td>
              <td>{item.diem}</td>
              <td>{item.note}</td>
              <td>
                <StyledSemester.See  
                onClick={()=> onShow(item)}>
                  Đề tài
                  </StyledSemester.See>
                  </td>
              <td><StyledSemester.ButtonAdd onClick={() => OnPutSemesters(item.idPhanBien, item)}>Sửa</StyledSemester.ButtonAdd></td>
              <td><StyledSemester.Delete >Xóa</StyledSemester.Delete></td>
            </tr>
            ))}
          </tbody>
        </table>
        <StyledSemester.Popup id="hide" style={hide ? {display: "none"} : {display: "block"}} >
          <StyledSemester.PopupContent>
            <div className="Divpopup">
           <StyledSemester.PopupTitle>
          <StyledSemester.Popuptext> Phân công đề tài cho hội đồng </StyledSemester.Popuptext>
          <StyledSemester.Close onClick={onHide}>&times;</StyledSemester.Close>
          </StyledSemester.PopupTitle> 
          <div className="save">
          <StyledSemester.ButtonAdd>Lưu</StyledSemester.ButtonAdd>
          </div>
          <table>
            <thead>
              <tr>
              <th>Mã đề tài</th>
              <th>Tên đề tài</th>
              <th>Tên sinh viên</th>
              <th>Tên Học kỳ</th>
              <th>Tên Môn học</th>
                <th>Chọn</th>
              
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
                <td><input 
                  type="checkbox" 
                  value={item.id}
                  id="checkbox1"
                  onChange={()=> handleChange(item)}
                  /></td>
              </tr>
              ))}
             
            </tbody>
          </table>
          </div>
          </StyledSemester.PopupContent>
        </StyledSemester.Popup>
        </StyledSemester.Body>
      )}
      </div>
      </div>
      </StyledSemester.Flex>
    </>
  );
};

export default AssignReviewer;
