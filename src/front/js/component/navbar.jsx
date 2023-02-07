import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Logo from "../component/logo/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand mx-auto" href="#">
        <div className="text-center">
          <img src={Logo} alt="Logo" style={{ width: "180px" }} />
        </div>
        {/* Aqui compienzan los links del navbar */}
        <div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Inicio
                </a>
              </li>
              _
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Come consciente
                </a>
              </li>
              _
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tips
                </a>
              </li>
              _
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineShop />
                </a>
              </li>
              _
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <BsSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </a>
    </nav>
  );
};
