import "./UserStyle.css";
import axios from "axios";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBath,
  FaBed,
  FaChair,
  FaHeart,
  FaMapMarkerAlt,
  FaShareAlt,
  FaStickyNote,
} from "react-icons/fa";
import { FAV_REQUEST, baseURL } from "../../../API/Api";
import Navbar from "../../../Components/Dashboard/NavBar";
import { Container, Form } from "react-bootstrap";

export default function UserFavourites() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cookies
  const navigate = useNavigate();
  const cookie = Cookie();

  // If not Login Out this User!
  useEffect(() => {
    const token = cookie.get("solom");
    if (!token) {
      navigate("/login");
    }
  });

  // Get Token & Custom Config
  const config = {
    headers: {
      Authorization: `Token bbdcedc5d17092c029c548592d94eaa1ee8704c3`,
    },
  };

  // Get User Favourites
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/${FAV_REQUEST}`, config)
      // .then((res) => console.log(res.data))
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <section className="UserSection">
          <div className="titleUserSection">
            <h2>المفضلة</h2>
          </div>
          <div className="selectUserSub">
            <div className="btnUserSub">
              <Link to={"/favourites"}>
                <div className="btnFav">
                  <div className="btnName">
                    <FaHeart />
                    <h2>مفضلتي</h2>
                  </div>
                  <div className="btnArrow">&gt;</div>
                </div>
              </Link>
              <Link to={"/notes"}>
                <div className="btnNote">
                  <div className="btnName">
                    <FaStickyNote />
                    <h2>ملاحظاتي</h2>
                  </div>
                  <div className="btnArrow">&gt;</div>
                </div>
              </Link>
            </div>
            <div className="searchUser">
              <h3>شارك هذه العقارات</h3>
              <div>
                <Form.Control type="text" defaultValue={"www.google.com"} />
              </div>
            </div>
          </div>
          <div className="fav-content">
            {isLoading ? (
              <div className="loading-spinner">⏳</div>
            ) : (
              <div className="fav-padding">
                <div className="favUserContant">
                  <div className="favUserImage">
                    <img
                      src={require("../../../Assets/Images/home.jpg")}
                      alt="Fav"
                    />
                  </div>
                  <div className="favUserSide">
                    <div className="favUserDetails">
                      <h2 className="favUserPrice"> 67.000 جنية مصري</h2>
                      <p className="favUserDesc">
                        امتلك وحدتك الان في Bahya برؤيه ثلاثيه على ..
                      </p>
                      <div className="favUserLocation">
                        <FaMapMarkerAlt /> {""}
                        جزيرة العرب
                      </div>
                      <div className="bottomSide boPlus">
                        <div className="markerSpace">300 م² | </div>
                        <div className="markerIcons">
                          <FaChair /> 2
                          <FaBath /> 3
                          <FaBed /> 6
                        </div>
                      </div>
                      <div className="spaceContent">
                        <div className="hrSettings">
                          <hr />
                        </div>
                      </div>
                      <div className="favBtnSettings">
                        <div className="addToFav">
                          <FaHeart />
                          مفضلتي
                        </div>
                        <div className="addToNote">
                          <FaStickyNote />
                          ملاحظة
                        </div>
                        <div className="share">
                          <FaShareAlt />
                          مشاركة
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* {!isLoading && <div>لا يوجد عناصر مفضلة بالنسبة اليك .</div>} */}
          </div>
        </section>
      </Container>
    </>
  );
}
