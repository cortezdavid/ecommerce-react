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

//traigo como props id, title, img y price para crear un card con los datos recibidos
//el card esta envuelto por un Link de react-router-dom que redirige a los detalles del producto