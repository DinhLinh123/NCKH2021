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
          
          
            <StyledHeader.Menu1><Link to='/giang-vien'>Giảng viên</Link></StyledHeader.Menu1>
          
        

        <StyledHeader.Menu1>Sinh viên</StyledHeader.Menu1>
        <StyledHeader.Menu1>Học kỳ</StyledHeader.Menu1>
        <StyledHeader.Menu1>Phân GVHD</StyledHeader.Menu1>
        <StyledHeader.Menu1>DS GVHD</StyledHeader.Menu1>
      </StyledHeader.MenuBody>
    </StyledHeader.Body>
  );
};

export default Headers;
