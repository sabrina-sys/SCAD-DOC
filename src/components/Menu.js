import "../assets/css/menu.css";
import React, { useState, useEffect } from "react";
import Auth from "../services/AuthService";
import MenuSettings from "../config/MenuSettings.json";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const token = localStorage.getItem("test");
  if (token !== null) {
    const response = Auth(token);
    sessionStorage.setItem("user", response[0].nombre);
    sessionStorage.setItem("profile", response[0].profile);
    sessionStorage.setItem("role", response[0].role);
  } else {
    window.location.href = "/";
  }

  const [user, setUser] = useState(sessionStorage.getItem("user"));
  const [section, setsection] = useState("Inicio");
  useEffect(() => {
    console.log("Actualizar");
  }, [section]);
  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("profile");
    sessionStorage.removeItem("role");
    localStorage.removeItem("test");
    window.location.href = "/";
  };
  const changeSection = (NameSection) => {
    if (section !== NameSection) {
      setsection(NameSection);
    }
  };
  const toggleDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  return (
    <div className="menu">
      <div className="scad-label">
        <ion-icon name="logo-react" className="icon"></ion-icon>
        {/* <img src={sessionStorage.getItem("profile")} /> */}
        <h6>SCAD-ONE</h6>
      </div>

      {MenuSettings.map((item) => (
        <Link
          key={item.id}
          to={`${process.env.PUBLIC_URL + item.href}`}
          onClick={() => changeSection(item.section)}
        >
          {item.section}
        </Link>
      ))}

      <div className="label-profile">
        <h6>{user}</h6>
        <img
          className="dropbtn"
          src={sessionStorage.getItem("profile")}
          onClick={toggleDropdown}
        />

        <div id="myDropdown" className="dropdown-content">
          <a href="#" onClick={logout} >Salir</a>
        </div>
      </div>
     
    </div>
  );
};

export default Menu;
