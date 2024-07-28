import React from 'react'
import '../ProductCard/ProductCard.css'
import { Cards } from '../../interfaces/Cards';
import { Link } from 'react-router-dom';

interface Props {
  cards: Cards;
}

function ProductCard({ cards }: Props) {

  

  return (
    <Link to={`/product/${cards.id}`} className="item">
      <div className="img-background">
        <span className={cards.descont?"show":''}>{cards.descontValue}% off</span>
        <img src="/src/assets/imgs/Item-image.png" alt="" />
      </div>
      <p>{cards.type}</p>
      <h2>{cards.name}</h2>
      <div className="values-wrapper">
        <span>${cards.oldValue}</span>
        <span>${cards.newValue}</span>
      </div>
    </Link>
  );
}

export default ProductCard