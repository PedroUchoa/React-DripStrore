import React from "react";
import "../Header/Header.css";
import logo from "../../assets/imgs/logo-header.svg";
import lupa from "../../assets/icons/lupa.svg";
import cart from "../../assets/icons/mini-cart.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="menu-wrapper">
        <img className="logo" src={logo} alt="" />
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar produto..." />
          <img src={lupa} alt="" />
        </div>
        <div className="button-container">
          <a href="">Cadastre-se</a>
          <button>Entrar</button>
        </div>
        <img className="cart" src={cart} alt="" />
      </div>
      <ul className="list-wrapper">
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/productlist"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Categorias
          </NavLink>
        </li>
        <li>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Meus Pedidos
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
