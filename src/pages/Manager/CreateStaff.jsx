import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import axios from "axios";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

function CreateStaff() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");

  const [coffeeID, setCoffeeID] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [isCreated, setIsCreated] = useState(false);
  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
    setAddress(event.target.value);
    setDob(event.target.value);
    setEmail(event.target.value);
  };

  const handleIDChange = (event) => {
    setCoffeeID(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleGOBack = () => {
    navigate("/manager");
  };

  const coffeeShopIds = [
    "9c305019-b38f-431a-835f-7b29d4351bc7",
    "ea50c8f8-ac2b-425d-8cda-b67bfb65cbcc",
    "f9d87ddc-c7ea-4178-ba3b-d30efa6f426c",
    "e54cb065-8ef4-4041-8822-e2ecf294c281",
    "4ff4a000-9b2a-4409-92c5-f9cf01947609",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        !fullName ||
        !phoneNumber ||
        !address ||
        !dob ||
        !email ||
        !coffeeID
      ) {
        console.error("Vui lòng điền đầy đủ thông tin nhân viên.");
        return;
      }

      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("address", address);
      formData.append("dob", dob);
      formData.append("email", email);

      formData.append("coffeeID", coffeeID);

      await axios.post(
        "https://thecoffeeshopstore.azurewebsites.net/api/Staffs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data sent successfully");
      setIsCreated(true);
      setTimeout(() => {
        setIsCreated(false);
        navigate("/readstaff");
      }, 1000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <div className="background">
        <div className="manager">
          <h1>Thêm nhân viên</h1>
          <p>Điền thông tin chi tiết để thêm một nhân viên mới vào hệ thống.</p>
          <Form onSubmit={handleSubmit}>
            <FormField style={{ marginBottom: "20px" }}>
              <label>Tên</label>
              <input
                placeholder="Tên"
                value={fullName}
                onChange={handleNameChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label
                style={{ color: "#333", marginBottom: "5px", fontSize: "15px" }}
              >
                Số điện thoại
              </label>
              <input
                placeholder="Số điện thoại"
                value={phoneNumber}
                onChange={handleChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label
                style={{ color: "#333", marginBottom: "5px", fontSize: "15px" }}
              >
                Địa chỉ
              </label>
              <input
                placeholder="Địa chỉ"
                value={address}
                onChange={handleChange}
              />
            </FormField>

            <FormField style={{ marginBottom: "20px" }}>
              <label>Ngày sinh</label>
              <input placeholder="dob" value={dob} onChange={handleChange} />
            </FormField>

            <InputLabel id="demo-simple-select-label">
              <b>Chi nhánh</b>
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={coffeeID}
              label="coffeeID"
              onChange={handleIDChange}
              style={{ width: "310px", backgroundColor: "#fff" }}
            >
              {coffeeShopIds.map((id) => (
                <MenuItem key={id} value={id}>
                  Chi nhánh {coffeeShopIds.indexOf(id) + 1}
                </MenuItem>
              ))}
            </Select>
            <FormField style={{ marginBottom: "20px" }}>
              <label>Email</label>
              <input
                placeholder="email"
                value={email}
                onChange={handleChange}
              />
            </FormField>

            <FormField>
              <Checkbox label="Tôi đồng ý với các Điều khoản và Điều kiện" />
            </FormField>
            {isCreated && (
              <p style={{ color: "green" }}>Thêm nhân viên thành công!</p>
            )}
            <Button
              type="submit"
              style={{
                backgroundColor: "green",
                color: "#fff",
                marginRight: "20px",
              }}
            >
              Thêm
            </Button>
            <Button onClick={handleGOBack}>Quay lại</Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateStaff;
