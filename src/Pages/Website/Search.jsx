import "./PublicStyle.css";
import { Container, Form } from "react-bootstrap";
import Navbar from "../../Components/Dashboard/NavBar";
import { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

export default function Search() {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type === selectedType ? "all" : type);
  };

  return (
    <>
      <Navbar />
      <Container>
        <section className="searchSection">
          <div className="titleSearchSection">
            <h2>ابحث عن عقارات للبيع أو للإيجار</h2>
          </div>
          <div className="searchLocation">
            <h3 className="searchTitle">المنطقة</h3>
            <div className="searchInput">
              <FaMapMarkerAlt />
              <Form.Control
                type="text"
                placeholder={"المدينة او الحي او الشارع"}
              />
            </div>
          </div>
          <div className="searchType">
            <h3 className="searchTitle">القسم</h3>
            <div className="buttonGroup">
              <button
                className={`colorButton ${
                  selectedButton === "button1" ? "selectedButton" : ""
                }`}
                onClick={() => handleButtonClick("button1")}
              >
                للبيع
              </button>
              <button
                className={`colorButton2 ${
                  selectedButton === "button2" ? "selectedButton" : ""
                }`}
                onClick={() => handleButtonClick("button2")}
              >
                للإيجار
              </button>
            </div>
            <div className="searchSelected">
              <h3 className="searchTitle">النوع</h3>
              <div className="typeButtons">
                <button
                  className={`typeButton ${
                    selectedType === "all" ? "selectedTypeButton" : ""
                  }`}
                  onClick={() => handleTypeSelect("all")}
                >
                  كل الخيارات
                  {selectedType === "all" && <FaTimes className="cancelIcon" />}
                </button>
                <button
                  className={`typeButton ${
                    selectedType === "button1" ? "selectedTypeButton" : ""
                  }`}
                  onClick={() => handleTypeSelect("button1")}
                >
                  للبيع
                  {selectedType === "button1" && (
                    <FaTimes className="cancelIcon" />
                  )}
                </button>
                <button
                  className={`typeButton ${
                    selectedType === "button2" ? "selectedTypeButton" : ""
                  }`}
                  onClick={() => handleTypeSelect("button2")}
                >
                  محل
                  {selectedType === "button2" && (
                    <FaTimes className="cancelIcon" />
                  )}
                </button>
                <button
                  className={`typeButton ${
                    selectedType === "button3" ? "selectedTypeButton" : ""
                  }`}
                  onClick={() => handleTypeSelect("button3")}
                >
                  شقق مفروشة
                  {selectedType === "button3" && (
                    <FaTimes className="cancelIcon" />
                  )}
                </button>
                <button
                  className={`typeButton ${
                    selectedType === "button4" ? "selectedTypeButton" : ""
                  }`}
                  onClick={() => handleTypeSelect("button4")}
                >
                  شاليهات
                  {selectedType === "button4" && (
                    <FaTimes className="cancelIcon" />
                  )}
                </button>
              </div>
            </div>
            <div className="searchPrice">
              <h3 className="searchTitle">السعر</h3>
              <div className="searchSelectPrice">
                <div className="lowPrice">
                  <select>
                    <option defaultChecked>اقل سعر</option>
                    <option value="160-50">25,000</option>
                    <option value="260-50">50,000</option>
                    <option value="360-50">100,000</option>
                    <option value="460-50">200,000</option>
                    <option value="5-50">300,000</option>
                    <option value="6-50">400,000</option>
                    <option value="7-50">600,000</option>
                    <option value="680-50">800,000</option>
                  </select>
                </div>
                <div className="highPrice">
                  <select>
                    <option defaultChecked>اعلي سعر</option>
                    <option value="160-50">25,000</option>
                    <option value="260-50">50,000</option>
                    <option value="360-50">100,000</option>
                    <option value="460-50">200,000</option>
                    <option value="5-50">300,000</option>
                    <option value="6-50">400,000</option>
                    <option value="7-50">600,000</option>
                    <option value="680-50">800,000</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btnSubmit">
              <button className="submitFormSearch">بحث الآن</button>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
