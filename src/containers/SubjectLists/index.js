import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation, useParams, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Headers from '../../layout/Header';
import { StyledSemester } from '../Semesters/styled';
import { addSubjectList, getSubjectLists } from './action';

const SubjectList = () => {
  const match =useRouteMatch();
  //----------useState----------------------
  const [idMonHoc, setIdMonHoc] = useState("");
  const [maMonHoc, setMaMonHoc] = useState("");
  const [tenMonHoc, setTenMonHoc] = useState("");
  const [typeApprover , setTypeApprover ] = useState("");
  
    let test = useLocation()
    console.log(test);
    let { idHocKy } = useParams();
    let {tenHocKy} = useParams();
    //console.log("tên học kỳ" + tenHocKy);
    console.log(idHocKy);
    console.log(tenHocKy);

    const dispatch = useDispatch();
    const subjectListSelecter = useSelector((state) => state.reducerSubjectList.list);

    useEffect(() => {
        dispatch(getSubjectLists(idHocKy));
      }, []);

      const getPro =()=> {
        dispatch(getSubjectLists())  ;
      };

      //-------------------sửa-----------------
      const onAddSubmit = ()=>{
        console.log({maMonHoc, tenMonHoc});
        if(maMonHoc && tenMonHoc){
          const add = {maMonHoc, tenMonHoc, idHocKy, typeApprover};
          dispatch(addSubjectList(add, getPro));
        }else{
          alert("vui lòng nhập thông tin");
        }
        setMaMonHoc("");
        setTenMonHoc("");
        setTypeApprover("");

      };

      const onHuy = () => {

      }

      //------------ẩn/hiện popup-------------
      const [hide, setHide]= useState(false);
    return (
      
        <div>
            <h1>Danh sách Môn {tenHocKy}</h1>
            <StyledSemester.Body>
              
              <StyledSemester.ButtonAdd onClick={()=> setHide(true)}>Thêm môn học</StyledSemester.ButtonAdd>
              <StyledSemester.Popup style={hide ? {display: "block"} : {display: "none"}}>
                <StyledSemester.PopupContent1>
                  <StyledSemester.DivSpan>
                <span onClick={()=> setHide(false)}>&times;</span>
                </StyledSemester.DivSpan>
                  <h1 >Thêm môn học</h1>
                  <StyledSemester.DivInput>
                    <StyledSemester.DivLable>
                    <label>Nhập mã môn học</label>
                  <input
                        placeholder="Nhập mã môn học"
                        type="text"
                        value={maMonHoc}
                        onChange={(maMonHoc)=>setMaMonHoc(maMonHoc.target.value)}
                        />
                        </StyledSemester.DivLable>
                        <StyledSemester.DivLable>
                   <label>Nhập tên môn học</label>
                  <input
                        placeholder="Nhập tên môn học"
                        type="text"
                        value={tenMonHoc}
                        onChange={(tenMonHoc)=>setTenMonHoc(tenMonHoc.target.value)}
                        />
                        </StyledSemester.DivLable>
                         <StyledSemester.DivLable>
                  <label>Nhập môn học tiên quyết</label>  

                 <select >
                 {subjectListSelecter?.map ((item, index ) => (
                   <option value={index}>
                        {item.nameMonTienQuyet}
                   </option>
                    ))}
                 </select>
                 </StyledSemester.DivLable>
                  
                        <StyledSemester.DivButton>
                  <button type="submit" onClick={() => onAddSubmit()}>
                    Thêm
                    </button>
                    <button type="submit" onClick={()=> setHide(false)}>Hủy</button>
                    </StyledSemester.DivButton>
                    </StyledSemester.DivInput>
              {/* <table>
                <thead>
                  <tr>
                    <td>Thêm môn học</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        placeholder="Nhập mã môn học"
                        type="text"
                        value={maMonHoc}
                        onChange={(maMonHoc)=>setMaMonHoc(maMonHoc.target.value)}
                        />
                      
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <input
                        placeholder="Nhập tên môn học"
                        type="text"
                        value={tenMonHoc}
                        onChange={(tenMonHoc)=>setTenMonHoc(tenMonHoc.target.value)}
                        />
                      
                    </td>
                  </tr>
                  <tr>
                  <td>
                      <input
                        placeholder="Nhập điều kiện "
                        type="number"
                        value={typeApprover}
                        onChange={(typeApprover)=>setTypeApprover(typeApprover.target.value)}
                        />
                      
                    </td>
                  </tr>
                  <tr>
                  <td>
                    <button type="submit" onClick={() => onAddSubmit()}>
                    Thêm
                    </button>
                    <button type="submit" onClick={() => onHuy()}>Hủy</button>
                    
                  </td>
                </tr>
                </tbody>
              </table> */}
              </StyledSemester.PopupContent1>
              </StyledSemester.Popup>
            <table>
          <thead>
            <tr>
              <th>Xử lý thông tin</th>
              <th>Mã môn học</th>
              <th>Tên môn học</th>
              <th>Môn học tiên quyết</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
              {subjectListSelecter?.map ((item, index ) => (
            <tr key= {index}>
              <Link to={`/mon-hoc/${tenHocKy}/${idHocKy}/${item.tenMonHoc}/${item.idMonHoc}/${item.typeApprover}`}>
               <td><StyledSemester.See>Xử lý thông tin</StyledSemester.See></td>
               </Link>  
              <td>{item.maMonHoc}</td>
              <td>{item.tenMonHoc}</td>
              <td>{item.nameMonTienQuyet}</td>
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

