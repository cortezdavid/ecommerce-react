import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs';
import logo from './logo.jpg'
import './NavBar.css'

const navBar = ({ cartProducts }) => {

  const productCounter = () => {
    return cartProducts.reduce((acum, item) => acum += item.cant, 0)
  }

  return (
    <nav className='navbar'>
      <ul className='navbarItems'>
        <li><Link to={"/"}><img src={logo} alt="logo" /></Link></li>
        <div className='menuList'>
          <li><Link to={"/"}>Products</Link></li>
          <li><Link to={"/cart"}><BsCart4 className='cart' /></Link></li>
          <p>{productCounter()}</p>
        </div>
      </ul>
    </nav>
  )
}

export default navBar

//el componente navBar muestra la barra de navegación
//recibe como prop el array de productos dentro del carrito, para luego
//  la función productCounter cuente el total de elementos en él y que se muestre