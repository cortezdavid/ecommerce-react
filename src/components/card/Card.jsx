import { Link } from "react-router-dom"
import './Card.css'

const Card = ({ id, title, img, price }) => {
  return (
    <div key={id}>
      <Link to={`product/${id}`}>
        <div className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <h4>{title}</h4>
          <p className="textPrice">${price}</p>
        </div>
      </Link>
    </div>

  )
}

export default Card