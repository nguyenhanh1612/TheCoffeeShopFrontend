import React, { useEffect, useState } from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Icon } from "semantic-ui-react";
import { Button as SemanticButton } from "semantic-ui-react";
function ReadStaff() {
  const navigate = useNavigate();
  const [deletedIds, setDeletedIds] = useState([]);
  const [apiData, setApiData] = useState([]);
//   const handleEdit = (catID) => {
//     navigate(`/updatecat/${catID}`);
//   };
//   const handleAdd = () => {
//     navigate("/createcat");
//   };
  useEffect(() => {
    axios
      .get(`https://thecoffeeshopstore.azurewebsites.net/api/Staffs`)
      .then((response) => {
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

//   useEffect(() => {
//     const filteredData = apiData.filter(
//       (data) => !deletedIds.includes(data.staffID)
//     );
//     setApiData(filteredData);
//   }, [deletedIds]);

//   const onDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://thecoffeeshopstore.azurewebsites.net/api/Cats/${id}`
//       );
//       setDeletedIds([...deletedIds, id]);
//     } catch (error) {
//       console.error("Error deleting data:", error);
//     }
//   };

  return (
    <>
      <Box height={50} />

      {/* <SemanticButton >
        <Icon name="plus" /> Thêm chi nhánh
      </SemanticButton> */}
      <Table celled>
        <TableHeader>
          <TableRow>
            {/* <TableHeaderCell>ID</TableHeaderCell> */}
            <TableHeaderCell>Tên</TableHeaderCell>
            <TableHeaderCell>Số điện thoại</TableHeaderCell>
            <TableHeaderCell>Địa chỉ</TableHeaderCell>
            <TableHeaderCell>Ngày sinh</TableHeaderCell>
            <TableHeaderCell>Chi nhánh</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            {/* <TableHeaderCell>Sửa</TableHeaderCell>
            <TableHeaderCell>Xóa</TableHeaderCell> */}
            {/* <TableHeaderCell>Quay lại</TableHeaderCell> */}
          </TableRow>
        </TableHeader>

        <TableBody>
          {apiData.map((data) => {
            return (
              <TableRow key={data.staffID}>
                {/* <TableCell>{data.catID}</TableCell> */}
                <TableCell>{data.fullName}</TableCell>
                <TableCell>{data.phoneNumber}</TableCell>
                <TableCell>{data.address}</TableCell>
                <TableCell>{data.dob}</TableCell>
                <TableCell>{data.coffeeName}</TableCell>
                <TableCell>{data.email}</TableCell>
                {/* <TableCell style={{ padding: "10px" }}>
                  <img
                    src={data.image}
                    alt="Cat"
                    style={{ maxWidth: "100px" }}
                  />
                </TableCell> */}

                {/* <TableCell>
                  <SemanticButton
                    color="blue"
                    onClick={() => handleEdit(data.catID)}
                  >
                    Sửa
                  </SemanticButton>
                </TableCell>

                <TableCell>
                  <SemanticButton
                    color="red"
                    onClick={() => onDelete(data.catID)}
                  >
                    Xóa
                  </SemanticButton>
                </TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default ReadStaff;
