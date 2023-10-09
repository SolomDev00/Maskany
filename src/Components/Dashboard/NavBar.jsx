import { Button, Container, Dropdown } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./NavBarStyle.css";
import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaProjectDiagram,
  FaUserCircle,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";

export default function Navbar() {
  const [showAll, setShowAll] = useState(true);

  // Navigate
  const navigate = useNavigate();
  const nav = window.location.pathname;

  // Cookie
  const cookie = Cookie();

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleLogout = () => {
    // Delete all tokens
    cookie.remove("solom");
    cookie.remove("isVerified");
    navigate("/login");
  };

  return (
    <Container>
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src={require("../../Assets/Images/logo.png")} alt="logo" />
          </Link>
        </div>
        <div className="content">
          <div className="search">
            <NavLink
              activeclassname="active-link"
              to={"/quick"}
              className={() =>
                "searchBtn" + (nav === "/quick" ? " active-link" : "")
              }
              onClick={handleToggle}
            >
              بحث
              <FaSearch
                className={() =>
                  "search-icon" + (nav === "/quick" ? " active-link" : "")
                }
              />
            </NavLink>
            <select>
              <option id="default" defaultValue={"default"} disabled></option>
              <option>بحث عام</option>
              <option>عقارات</option>
            </select>
          </div>
          <NavLink
            activeclassname="active-link"
            to={"/map"}
            className={() => "payDay" + (nav === "/map" ? " active-link" : "")}
          >
            <FaCalendarAlt
              className={() =>
                "search-icon" + (nav === "/map" ? " active-link" : "")
              }
            />
            الايجار اليومي
          </NavLink>
          <NavLink
            activeclassname="active-link"
            className={() =>
              "searchWithMap" + (nav === "/search" ? " active-link" : "")
            }
            to={"/search"}
          >
            <FaMapMarkerAlt
              className={() =>
                "search-icon" + (nav === "/search" ? " active-link" : "")
              }
            />
            البحث بالخريطة
          </NavLink>
          <NavLink
            activeclassname="active-link"
            className={() =>
              "packages" + (nav === "/packages" ? " active-link" : "")
            }
            to={"/packages"}
          >
            <FaProjectDiagram
              className={() =>
                "search-icon" + (nav === "/packages" ? " active-link" : "")
              }
            />
            الباقات
          </NavLink>
          <Link className="support">مساعدة؟</Link>
          <Dropdown as={ButtonGroup}>
            <div className="dropDown">
              <Button className="userIcon">
                <FaUserCircle className="user-icon" />
              </Button>
              <Dropdown.Toggle
                className="toggleBtn"
                id="dropdown-split-basic"
              />
            </div>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">حسابي</Dropdown.Item>
              <Dropdown.Item href="#/action-2">المفضلات</Dropdown.Item>
              <Dropdown.Item
                style={{ color: "#fd7571" }}
                onClick={() => handleLogout()}
              >
                تسجيل الخروج
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </Container>
  );
}