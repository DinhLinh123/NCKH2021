import styled from "styled-components";

export const StyledSemester= {
    ButtonAdd: styled.button`
        background: #66CDAA;
        height: 30px;
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
            padding: 30px;
    }
    `,
    Div: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    See: styled.button`
        background: #4682B4;
        height: 30px;
        border: none;
        color: white;
    `,
    Delete: styled.button`
        background: red;
        height: 30px;
        border: none;
        color: white;
    `,
}