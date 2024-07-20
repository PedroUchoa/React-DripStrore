import React from 'react'
import '../ProductListing/ProductListining.css'
import { Cards } from '../../interfaces/cards'
import ProductCard from '../ProductCard/ProductCard'

interface Props{
  cards:Cards[]
}

function ProductListing({cards}:Props) {
  return (
    <div className='product-listining'>
      {cards.map((item,index) =>(
        <ProductCard key={index} cards={item}/>
      ))}
    </div>
  )
}

export default ProductListing