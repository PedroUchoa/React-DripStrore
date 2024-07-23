/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./ProductListingPage.css";
import { Cards } from "../../interfaces/Cards";
import ProductListing from "../../components/ProductListing/ProductListing";

function ProductListingPage() {
  const itensCards: Cards[] = [
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: true,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },

    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
    {
      image: "",
      descont: false,
      descontValue: 30,
      name: "K-Swiss V8 - Masculino",
      type: "Tênis",
      oldValue: 200,
      newValue: 100,
    },
  ];

  const [valorSelecionado, setValorSelecionado] = useState("novo");

  const handleChange = (event: any) => {
    setValorSelecionado(event.target.name);
  };

  return (
    <section className="listing-wrapper">
      <div className="order-wrapper">
        <div className="results-wrapper">
          <p>Resultados para “Tênis” -</p>
          <span> 389 produtos</span>
        </div>
        <div className="order-by">
          <label htmlFor="orderby">Ordenar por:</label>
          <select name="orderby" id="orderby">
            <option value="maisRelevante">mais relevantes</option>
            <option value="menosRelevante">menos relevantes</option>
            <option value="maiorPreco">maior preço</option>
            <option value="menorPreco">menor preço</option>
          </select>
        </div>
      </div>
      <div className="listing-principal">
        <div className="filter-wrapper">
          <h3>Filtrar por</h3>
          <ul>
            <li>
              <h1>Marka</h1>
            </li>
            <li>
              <input type="checkbox" name="adidas" id="adidas" />
              <label htmlFor="adidas">Addidas</label>
            </li>
            <li>
              <input type="checkbox" name="calenciaga" id="calenciaga" />
              <label htmlFor="calenciaga">Calenciaga</label>
            </li>
            <li>
              <input type="checkbox" name="k-swiss" id="k-swiss" />
              <label htmlFor="k-swiss">K-Swiss</label>
            </li>
            <li>
              <input type="checkbox" name="nike" id="nike" />
              <label htmlFor="nike">Nike</label>
            </li>
            <li>
              <input type="checkbox" name="puma" id="puma" />
              <label htmlFor="puma">Puma</label>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Categoria</h1>
            </li>
            <li>
              <input type="checkbox" name="esporte" id="esporte" />
              <label htmlFor="esporte">Esporte e lazer</label>
            </li>
            <li>
              <input type="checkbox" name="casual" id="casual" />
              <label htmlFor="casual">Casual</label>
            </li>
            <li>
              <input type="checkbox" name="utilitario" id="utilitario" />
              <label htmlFor="utilitario">Utilitário</label>
            </li>
            <li>
              <input type="checkbox" name="corrida" id="corrida" />
              <label htmlFor="corrida">Corrida</label>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Gênero</h1>
            </li>
            <li>
              <input type="checkbox" name="masculino" id="masculino" />
              <label htmlFor="masculino">Masculino</label>
            </li>
            <li>
              <input type="checkbox" name="feminino" id="feminino" />
              <label htmlFor="feminino">Feminino</label>
            </li>
            <li>
              <input type="checkbox" name="unisex" id="unisex" />
              <label htmlFor="unisex">Unisex</label>
            </li>
          </ul>
          <ul>
            <li>
              <h1>Estado</h1>
            </li>
            <li>
              <input
                type="radio"
                name="novo"
                id="novo"
                checked={valorSelecionado === "novo"}
                onChange={handleChange}
              />
              <label htmlFor="novo">Novo</label>
            </li>
            <li>
              <input
                type="radio"
                name="usado"
                id="usado"
                checked={valorSelecionado === "usado"}
                onChange={handleChange}
              />
              <label htmlFor="usado">Usado</label>
            </li>
          </ul>
        </div>
        <div className="list-items">
          <ProductListing cards={itensCards} />
        </div>
      </div>
    </section>
  );
}

export default ProductListingPage;
