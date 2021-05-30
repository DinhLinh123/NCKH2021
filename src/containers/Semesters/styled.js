import styled from "styled-components";

export const StyledSemester= {
    ButtonAdd: styled.button`
        background: #66CDAA;
        padding: 10px;
        border: none;
    `,
    Body: styled.div`
    
        table , td, th {
            border: 1px solid #ddd;
            text-align: center;
        };
        table {
            border-collapse: collapse;
            width: 100%;

        }
        th, td {
            padding: 15px;
    }
    `,
    Div: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    See: styled.button`
        background: #4682B4;
        padding: 10px;
        border: none;
        color: white;
        a {
            text-decoration: none;
            color: white;
        }
    `,
    Delete: styled.button`
        background: red;
        padding: 10px;
        border: none;
        color: white;
    `,
    Save: styled.button`
        background: #32CD32	;
        padding: 10px;
        border: none;
        float: right;
        width: 80px;
        margin-right: 10px;
        margin-bottom: 10px;
    `,

    Popup: styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  

  @-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}
table {
    padding: 20px;
}


    `,
    PopupTitle: styled.div`
        display: flex;
    `,
    Popuptext: styled.h1`
        flex: 95%;
        text-align: center;
`,


    PopupContent: styled.div`
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        -webkit-animation-name: animatetop;
        -webkit-animation-duration: 0.4s;
        animation-name: animatetop;
        animation-duration: 0.4s
     `,

     Close: styled.span`
        flex: 5%;
        text-align: center;
        font-size: 28px;
        font-weight: bold;

        &:hover, &:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
     `,
}