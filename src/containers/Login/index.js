import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>ĐĂNG NHẬP</h1>
            <form>
                <label>
                    Tên đăng nhập
                    <input type="text" name="name"></input>
                </label>
                <label>
                    Mật Khẩu
                    <input type="password" name="password"></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
};

export default Login;