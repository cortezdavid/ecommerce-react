import { useEffect, useState } from 'react';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import './CardContainer.css'

const CardContainer = ({ addToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading
        ?
        <Loading />
        :
        (<div className='cardContainer'>
          {products.map(product =>
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              img={product.image}
              price={product.price}
            />)
          }
        </div>)
      }
    </>
  )
}

export default CardContainer