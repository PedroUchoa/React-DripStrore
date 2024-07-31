import "./Footer.css";
import logo from "../../assets/imgs/logo-footer.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="logo-wrapper ">
          <img className="logo" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <ul>
            <li>
              <img className="icons" src={facebook} alt="" />
            </li>
            <li>
              <img className="icons" src={instagram} alt="" />
            </li>
            <li>
              <img className="icons" src={twitter} alt="" />
            </li>
          </ul>
        </div>
        <div className="info-wrapper">
          <h2>Informações</h2>
          <ul>
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishilist</li>
            <li>Blog</li>
            <li>Trabalhe Conosco</li>
            <li>Meus Pedidos </li>
          </ul>
        </div>
        <div className="category-wrapper">
          <h2>Categorias</h2>
          <ul>
            <li>Camisas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>
        <div className="contact-wrapper">
          <h2>Contato</h2>
          <ul>
            <li>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </li>
            <li>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
      <div className="trademark">
        <p>2022 Digital College</p>
      </div>
    </footer>
  );
}

export default Footer;
