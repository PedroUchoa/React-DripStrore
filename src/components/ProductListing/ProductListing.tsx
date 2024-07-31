import '../ProductListing/ProductListining.css'
import ProductCard from '../ProductCard/ProductCard'
import { Cards } from '../../interfaces/Cards'

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