import Login from "./Pages/Auth/Login";
import Home from "./Pages/Website/Home";
import OTP from "./Pages/Auth/OTPSystem";
import Err404 from "./Pages/Auth/Errors/404";
import Register from "./Pages/Auth/Register";
import { Route, Routes } from "react-router-dom";
import RequireBack from "./Pages/Auth/RequireBack";
import ResetPassword from "./Pages/Auth/ResetPassword";
import AQR from "./API/AQR";
import Map from "./Pages/Website/Map";
import UserFavourites from "./Pages/Website/User/UserFavourite";
import Search from "./Pages/Website/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/map" element={<Map />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favourites" element={<UserFavourites />} />
        <Route path="/favourites/update" element={<UserFavourites />} />
        <Route element={<RequireBack />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Route>
        <Route path="/*" element={<Err404 />} />
        <Route path="/test" element={<AQR />} />
      </Routes>
    </div>
  );
}

export default App;
