import "./PublicStyle.css";
import axios from "axios";
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Dashboard/NavBar";
import { FaBath, FaBed, FaChair } from "react-icons/fa";
import { CATE_REQUEST, MAP_REQUEST, baseURL } from "../../API/Api";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [buttonColor, setButtonColor] = useState("#9b927d");
  const [selectedCategory, setSelectedCategory] = useState(null);

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
  const token = cookie.get("solom");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };

  // Get ADS Data
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseURL}/${MAP_REQUEST}`, config)
      // .then((res) => console.log(res.data))
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, []);

  // Get Categories Data
  useEffect(() => {
    axios
      .get(`${baseURL}/${CATE_REQUEST}`, config)
      .then((res) => setCategories(res.data))
      // .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  }, []);

  // FilterData to Category
  const filteredData = () => {
    if (selectedCategory && data.length > 0) {
      const filteredCategory = data.filter(
        (markerData) => markerData.category.id === selectedCategory.id
      );
      return filteredCategory.length > 0 ? filteredCategory : [];
    } else {
      return data;
    }
  };

  // Handle Click Categories
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setButtonColor("#9b927d");
  };

  //
  const handlePaddingSideClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <>
      <Navbar />
      <section className="homeSection">
        <div className="categories-container">
          <div className="categories">
            <button
              className="btnFilter"
              onClick={() => {
                setSelectedCategory(null);
                setButtonColor("transparent");
              }}
              style={{
                backgroundColor: buttonColor,
                color: buttonColor === "#9b927d" ? "white" : "black",
              }}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button
                className="btnFilterR"
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                style={{
                  color: selectedCategory === category ? "black" : "white",
                  backgroundColor:
                    selectedCategory === category ? "transparent" : "#9b927d",
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="popup-content">
          {isLoading ? (
            <div className="loading-spinner">⏳</div>
          ) : Array.isArray(filteredData()) && filteredData().length > 0 ? (
            filteredData().map((item) => (
              <div className="popup-padding" key={item.id}>
                <div
                  className="paddingSide poPlus"
                  onClick={() => handlePaddingSideClick(item.id)}
                >
                  <div className="leftSide plus">
                    <div className="topSide">
                      <h2 className="dataTitle">{item.title}</h2>
                      <h3 className="dataPrice">{item.price} جنية مصري</h3>
                      <div className="bottomSide boPlus">
                        <div className="markerSpace">{item.space} م² | </div>
                        <div className="markerIcons">
                          <FaChair />
                          {item.floor}
                          <FaBath />
                          {item.bathrooms}
                          <FaBed />
                          {item.rooms}
                        </div>
                      </div>
                      <p className="dataDetails">{item.details}</p>
                    </div>
                  </div>
                  <div className="rightSide">
                    <img src={baseURL + item.images[0].image} alt="Marker" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>لا توجد بيانات لعرضها .</div>
          )}
        </div>
      </section>
    </>
  );
}
