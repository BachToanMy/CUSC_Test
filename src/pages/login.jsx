import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "Admin@123");
  };
  const handleLogin = () => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      alert('Đăng nhập thành công');
      navigate('/students');
    } else {
      alert('Đăng nhập không thành công');
    }
  };
  React.useEffect(()=>{
    handleCreateAccount();
  })
  return (
    <>
      <div>
        <div class="flex items-center justify-center min-h-screen">
          <div>
            <div className="text-center bg-gray-600">
              <p className="p-2 text-2xl text-white">Đăng nhập</p>
            </div>
            <div class="bg-white p-8 rounded shadow-lg">
              <div className="py-5 flex">
                <p className="px-3">Tài khoản</p>
                <input
                  className="border-solid border-1"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="flex">
                <p className="px-3">Mật khẩu</p>
                <input
                type="password"
                  className="border-solid border-1"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className="items-center justify-center text-center pt-7">
                <button
                  className="bg-gray-600 p-2.5 text-white rounded-xl hover:bg-gray-300"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
