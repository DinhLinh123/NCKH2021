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
}