import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs';
import logo from './logo.jpg'
import './NavBar.css'

const navBar = ({ cartProducts }) => {

  const productCounter = () => {
    return cartProducts.reduce((acum, Item) => acum += Item.cant, 0)
  }

  return (
    <nav className='navbar'>
      <ul className='navbarItems'>
        <li><Link to={"/"}><img src={logo} alt="logo" /></Link></li>
        <div className='menuList'>
          <li><Link to={"/"}>Products</Link></li>
          <li><Link to={"/cart"}><BsCart4 className='cart' /></Link></li>
          <p className='counter'>{productCounter()}</p>
        </div>
      </ul>
    </nav>
  )
}

export default navBar