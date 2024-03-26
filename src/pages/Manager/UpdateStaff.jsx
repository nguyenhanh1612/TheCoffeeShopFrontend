import React, { useState, useEffect } from "react";
import { FormField, Button, Form, Checkbox } from "semantic-ui-react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function UpdateStaff() {
  const { staffID } = useParams();
  const [isUpdated, setIsUpdated] = useState(false);
  const navigate = useNavigate();
  const [staffData, setStaffData] = useState({
    fullName: "",

    phoneNumer: "",
    address: "",
    dob: "",
    coffeeID: "",
    email: "",
  });

  const [originalStaffData, setOriginalStaffData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchstaffData = async () => {
      try {
        const response = await axios.get(
          `https://thecoffeeshopstore.azurewebsites.net/api/Staffs/${staffID}`
        );
        const staffData = response.data;
        setStaffData(staffData);
        setOriginalStaffData(staffData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchstaffData();
  }, [staffID]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStaffData({ ...staffData, [name]: value });
  };

  //   const handleCheckboxChange = () => {
  //     setStaffData({ ...staffData, status: !staffData.status });
  //   };
  const handleGOBack = () => {
    navigate("/manager");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (JSON.stringify(staffData) !== JSON.stringify(originalStaffData)) {
        const formData = new FormData();
        formData.append("fullName", staffData.fullName);

        formData.append("phoneNumber", staffData.phoneNumber);
        formData.append("address", staffData.address);

        formData.append("dob", staffData.dob);

        formData.append("email", staffData.email);

        await axios.put(
          `https://thecoffeeshopstore.azurewebsites.net/api/Staffs/${staffID}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Updated staff data sent successfully");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readstaff");
        }, 1000);
      } else {
        console.log("Staff data has not changed");
        setIsUpdated(true);
        setTimeout(() => {
          setIsUpdated(false);
          navigate("/readstaff");
        }, 1000);
      }
    } catch (error) {
      console.error("Error updating staff data:", error);
    }
  };

  return (
    <div className="manager">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Form onSubmit={handleSubmit}>
            <FormField>
              <label>Tên</label>
              <input
                placeholder="Tên"
                name="fullName"
                value={staffData.fullName}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Số điện thoại</label>
              <textarea
                placeholder="Số điện thoại"
                name="phoneNumber"
                value={staffData.phoneNumber}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Địa chỉ</label>
              <textarea
                placeholder="address"
                name="address"
                value={staffData.address}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Ngày sinh</label>
              <textarea
                placeholder="dob"
                name="dob"
                value={staffData.dob}
                onChange={handleInputChange}
              />
            </FormField>

            <FormField>
              <label>Email</label>
              <textarea
                placeholder="email"
                name="email"
                value={staffData.email}
                onChange={handleInputChange}
              />
            </FormField>

            {isUpdated && (
              <p
                style={{
                  color: "green",
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "30px",
                }}
              >
                {JSON.stringify(originalStaffData) === JSON.stringify(staffData)
                  ? "Không có sự thay đổi"
                  : "Sửa đổi đã được lưu thành công!"}
              </p>
            )}
            <Button type="submit">Cập nhật</Button>
            <Button onClick={handleGOBack}>Quay lại</Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default UpdateStaff;
