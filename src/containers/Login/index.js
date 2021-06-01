import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { StyledSemester } from '../Semesters/styled';
import { addLogin } from './action';

const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    //----useState--------------------
    const [client_id, setClient_id] = useState('GHMSOFTCLIENT')
    const [grant_type, setGrant_type] = useState('password')
    const [userName, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const [client_secret, setClient_secret] = useState('GHMSOFT')
    //------Selecter----------------------
    const loginSelecter = useSelector((state) => state.reducerLogin.list);

    console.log("loginSelecter: ", loginSelecter.status);

    
    const data= { client_id, grant_type, userName, password, client_secret }
    const dangnhap = () => {
        if(userName && password){
            
            
            dispatch(addLogin(data));
           
            
        } else {
            alert("vui lòng nhập thông tin");
        }
        setUserName("");
        setPassWord("");
        
    };

    // useEffect(() => {
        {loginSelecter.map ((item) => {
            const check = item.status;
            console.log("check ", check);
            if(check == 200){
                history.replace("/hoc-ky");
                
            }else{
                alert("Tài khoản không tồn tại");
                

            }
            
            
        })}
    
    //  }, [])
    return (
        <StyledSemester.LoginDiv>
            <StyledSemester.Login>
                <div>
            <h1>ĐĂNG NHẬP</h1>
            <StyledSemester.Form>
                <div>
                <label>
                    Tên đăng nhập <br />
                    <input placeholder="Nhập tên đăng nhập" type="text" name="name" onChange={e => setUserName(e.target.value)} />
                </label>
                <br />
                <label>
                    Mật Khẩu <br />
                    <input placeholder="Nhập mật khẩu" type="password" name="password" onChange={e => setPassWord(e.target.value)} />
                </label>
                </div>
            </StyledSemester.Form>
            <div className="button">
                <button onClick={dangnhap}>ĐĂNG NHẬP</button>
                </div>
                <p>Quên mật khẩu ?</p>
                </div>
                </StyledSemester.Login>
                </StyledSemester.LoginDiv> 
    );
};

export default Login;