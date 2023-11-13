import { useEffect, useState } from 'react';
import Card from '../card/Card';
import Loading from '../loading/Loading';
import './CardContainer.css'

const CardContainer = () => {
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

//uso useEffect para llamar a la api y guardar los datos recibidos
//muestro un Loading miestras se carga los datos
//luego mapeo el array de la api para crear una instancia del componente Card con cada producto