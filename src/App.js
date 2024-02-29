import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderStaff from "./pages/OrderStaff";
import HomeStaff from "./pages/HomeStaff";
import BookingStaff from "./pages/BookingStaff";
import Location from "./pages/Location";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import Chinhanh2 from "./pages/Location/Chinhanh2";
import Chinhanh3 from "./pages/Location/Chinhanh3";
import Cat from "./pages/Cat";
import ListAllCat from "./pages/Cat/ListAllCat";
import CatShop1 from "./pages/Cat/CatShop1";
import CatShop2 from "./pages/Cat/CatShop2";
import CatShop3 from "./pages/Cat/CatShop3";
import CatShop4 from "./pages/Cat/CatShop4";
import CatShop5 from "./pages/Cat/CatShop5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/orderstaff" element={<OrderStaff />} />
          <Route path="/homestaff" element={<HomeStaff />} />
          <Route path="/location" element={<Location />} />
          <Route path="/bookingstaff" element={<BookingStaff />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/location2" element={<Chinhanh2 />} />
          <Route path="/location3" element={<Chinhanh3 />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/allcat" element={<ListAllCat />} />
          <Route path="/catshop1" element={<CatShop1 />} />
          <Route path="/catshop2" element={<CatShop2 />} />
          <Route path="/catshop3" element={<CatShop3 />} />
          <Route path="/catshop4" element={<CatShop4 />} />
          <Route path="/catshop5" element={<CatShop5 />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
