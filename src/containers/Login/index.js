import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { addLogin } from './action';

const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    //----useState--------------------
    const [userName, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    //------Selecter----------------------
    const loginSelecter = useSelector((state) => state.reducerLogin.list);

    

    const login = () => {
        if(userName && password){
            
            const add = {userName, password};
            dispatch(addLogin(add));
            if(userName=="linhdtt026" && password=="123456"){
                history.replace("/hoc-ky")
            }else{
                alert("Sai userName hoặc password");
            }
            
        } else {
            alert("vui lòng nhập thông tin");
        }
        setUserName("");
        setPassWord("");
        
    };
    return (
        <div>
            <h1>ĐĂNG NHẬP</h1>
            <form>
                <label>
                    Tên đăng nhập
                    <input type="text" name="name" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    Mật Khẩu
                    <input type="password" name="password" onChange={e => setPassWord(e.target.value)} />
                </label>
                <button onClick={login}>ĐĂNG NHẬP</button>
            </form>
        </div>
    );
};

export default Login;