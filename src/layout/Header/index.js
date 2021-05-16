import React from "react";
import { StyledHeader } from "./styled";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    // <h1>Header</h1>

      //  <ul>
      //    <li>
      //      <Link to='/'>Home</Link>
      //    </li>
      //    <li>
      //      <Link to='/giang-vien'>Giang vien</Link>
      //    </li>
      //    <li>
      //      <Link to='/lien-he'>Lien he</Link>
      //    </li>
      //  </ul>
    <StyledHeader.Body>
      <StyledHeader.Img src="/images/header/imgheader.png" />

      {/* ==========Menu========================== */}

      <StyledHeader.MenuBody>
          
        <StyledHeader.Menu1><Link to='/'>Trang chủ</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to='/mon-hoc'>Môn Học</Link></StyledHeader.Menu1>   <StyledHeader.Menu1><Link to='/chon-giang-vien'>Chọn Giảng viên</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to='/danh-sach-gvhd'>Danh sách GVHD</Link></StyledHeader.Menu1> <StyledHeader.Menu1><Link to='/sinh-vien'>Sinh viên</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to='/sinh-vien'>Sinh viên</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to='/de-tai'>Đề tài</Link></StyledHeader.Menu1>

        <StyledHeader.Menu1><Link to='/phan-bien'>Phân công phản biện</Link></StyledHeader.Menu1>
        <StyledHeader.Menu1><Link to='/hoi-dong'>Hội đồng tốt nghiệp</Link></StyledHeader.Menu1>
        
      </StyledHeader.MenuBody>
    </StyledHeader.Body>
  );
};

export default Headers;
