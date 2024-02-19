import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleLogin = () => {
    axios
      .post("https://thecoffeeshopstore.azurewebsites.net/api/Auth/Login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="row g-0 vh-100 justify-content-center align-items-center login-container">
      <div className="headers">
        <div className="header_left">
          <img src="../asset/logo3.png" alt="" />
        </div>
        <div className="header-center">
          <ul className="header-list">
            <li>
              <a href="/">TRANG CHỦ</a>
            </li>
            <li>
              <a href="#">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="#">CHI NHÁNH</a>
            </li>
            <li>
              <a href="#">THỰC ĐƠN</a>
            </li>
            <li>
              <a href="#">MÈO</a>
            </li>
            <li>
              <a href="/bookingnow">ĐẶT BÀN</a>
            </li>
            <li>
              <a href="#">THẺ</a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <Button
            variant="outlined"
            href="#outlined-buttons"
            style={{
              backgroundColor: "#9e826c",
              color: "white",
              borderColor: "#9e826c",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Đăng nhập
            </Link>
          </Button>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="Tìm kiếm..." />
          </div>
        </div>
      </div>
      <div className="col-10 row g-0 align-items-center">
        <div className="d-none d-md-block col-6">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2275429855/display_1500/stock-vector-turkish-cat-with-coffee-cup-watercolor-vector-illustration-for-coffee-houses-can-be-used-for-menu-2275429855.jpg"
            alt=""
            className="img-fluid"
          />
        </div>

        <form className="col-12 col-md-6 col-6 py-4 px-3">
          <h4 className="login-title text-center py-2 mb-3">Đăng nhập</h4>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">Mật khẩu</label>
          </div>
          <div className="text-center">
            <button
              className="login-btn rounded-3"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Đăng nhập
            </button>
          </div>
          <div className="text-center mt-3">
            Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
