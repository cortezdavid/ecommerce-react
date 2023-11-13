import { TbShoppingCartX } from 'react-icons/tb'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Cart.css'

const Cart = ({ cartProducts, deleteCart }) => {

  const totalPrice = cartProducts.reduce((accumulator, cartProduct) => {
    return accumulator + cartProduct.price * cartProduct.cant
  }, 0).toFixed(2)

  const MySwal = withReactContent(Swal);

  const buyClick = () => {
    MySwal.fire({
      title: "",
      text: "Your purchase has been completed successfully",
      icon: "success"
    })
  }

  const deleteClick = () => {
    MySwal.fire({
      title: "",
      text: "Your cart has been cleared successfully.",
      icon: "error"
    })
  }

  return (
    <div className='containerCart'>
      {cartProducts.length === 0
        ?
        <div className='Emptycart'>
          <TbShoppingCartX />
          <p>Empty cart</p>
        </div>
        :
        <>
          <div className='containerItems'>
            {cartProducts.map((product, index) => (
              <div key={index} className='cartItem'>
                <img src={product.img} alt="" />
                <div>
                  <h4>{product.title}</h4>
                  <p>quantity: {product.cant}</p>
                  <p className='cartItemPrice'>${product.price * product.cant}</p>
                </div>
              </div>))}
          </div>
          <div className='totalPrice'>
            <h3>Order summary</h3>
            <div className='price'>
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </div>
            <button onClick={() => { deleteCart([]); buyClick() }} className='btn btnBuy'>Buy</button>
            <button onClick={() => { deleteCart([]); deleteClick() }} className='btn btnDelete' >Delete cart</button>
          </div>
        </>
      }
    </div>
  )
}

export default Cart

//uso como props cartProduct que me trae el array de productos y deleteCart que me trae el setCartProducts para modificarlo a []
//utilizo la librería sweetalert2 junto con sweetalert2-react-content para mostrar alertas de
//  "compra hecha" y "borrar carrito" a sus botones correspondiente
//pregunto si el carrito esta vacio, dependiendo el valor muestro el carrito vacio o la lista de productos y el precio total