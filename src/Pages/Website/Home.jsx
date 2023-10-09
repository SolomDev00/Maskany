import { useEffect } from "react";
import Cookie from "cookie-universal";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Dashboard/NavBar";

export default function Home() {
  const navigate = useNavigate();
  const cookie = Cookie();

  useEffect(() => {
    const token = cookie.get("solom");
    if (!token) {
      navigate("/login");
    }
  });

  return (
    <div className="home">
      <Navbar />
    </div>
  );
}
