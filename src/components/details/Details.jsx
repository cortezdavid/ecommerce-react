import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Loanding from '../loading/Loading'
import { BsCartPlus } from 'react-icons/bs';
import './Details.css'

const Details = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState([])
  const [loanding, setLoanding] = useState(true)
  const [rating, setRating] = useState(0)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => { setSelectedProduct(data); setRating(data.rating.rate) })
      .finally(() => setLoanding(false))
  }, [id])

  return (
    <>
      {loanding
        ?
        <Loanding />
        :
        (
          <div className="detailsCard">
            <div className="detailsCardBody">
              <div className="detailImg" >
                <img src={selectedProduct.image} alt="" />
              </div>
              <div className="detailDescription" >
                <h2>{selectedProduct.title}</h2>
                <div className="cardStar" style={{ '--rating': rating }}>
                  <p>{selectedProduct.rating.rate}</p>
                  <div className="rating"></div>
                </div>
                <p className="description">{selectedProduct.description}</p>
                <div className="detailsCardFooter">
                  <span>${selectedProduct.price}</span>
                  <button className="btn btnCart"
                    onClick={() => {
                      addToCart({
                        title: selectedProduct.title,
                        img: selectedProduct.image,
                        price: selectedProduct.price
                      })
                    }}>
                    <span className="text">Add to cart</span>
                    <span className="icon">
                      <BsCartPlus />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Details