import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
function SignUp() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const [phone, setPhone] = useState();

    const handleSignUp = () =>{
        alert("Sign up successful");
    }



  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center signup-container">
      <Header/>
      <div className="col-10 row g-0 align-items-center">
        <div className="d-none d-md-block col-6">
          <img
            src="../asset/signup.png"
            alt=""
            className="img-fluid w-100 mt-4"
          />
        </div>

        <form className="col-12 col-md-6 py-4 px-3">
          <h4 className="signup-title text-center py-2 mb-3">Đăng ký</h4>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="username"
              onChange={(e) => {setUsername(e.target.value)}}
            />
            <label htmlFor="username">Tên đăng nhập</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="phone"
              onChange={(e) => {setPhone(e.target.value)}}
            />
            <label htmlFor="phone">Số điện thoại</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <div className="text-center">
            <button className="signup-btn rounded-3" onClick={() => {handleSignUp()}}>Đăng ký</button>
          </div>
          <div className="text-center mt-3">
            Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignUp;
