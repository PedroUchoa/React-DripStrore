import React from "react";
import "../Header/Header.css";
import logo from "../../assets/imgs/logo-header.svg";
import lupa from "../../assets/icons/lupa.svg";
import cart from "../../assets/icons/mini-cart.svg";

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
          <li>Home</li>
          <li>Produtos</li>
          <li>Categorias</li>
          <li>Meus Pedidos</li>
        </ul>
    </header>
  );
}

export default Header;
