import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navBar/navBar';
import CardContainer from './components/cardContainer/CardContainer';
import Cart from './components/cart/Cart';
import Details from './components/details/Details';

function App() {
  const [cartProducts, setCartProducts] = useState([])

  const addToCart = (product) => {
    const index = cartProducts.findIndex((item => item.title === product.title))
    if (index > -1) {
      const newCart = [...cartProducts]
      newCart[index].cant += 1
      setCartProducts(newCart)
    } else {
      setCartProducts([...cartProducts, { ...product, cant: 1 }]);
    }
  }

  return (
    <BrowserRouter>
      <NavBar cartProducts={cartProducts} />
      <Routes>
        <Route exact path='/' element={<CardContainer />} />
        <Route exact path='/*' element={<CardContainer />} />
        <Route exact path='/cart' element={<Cart cartProducts={cartProducts} deleteCart={setCartProducts} />} />
        <Route exact path='/product/:id' element={<Details addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//importamos libreiras, hook y componentes.
//utilizamos el useState para gestionar el estado de 'cartProduct', que guardara los productos selecciondos dentro de un arrray
//la funcion 'addToCart' recibe un producto y busca si hay otro producto con ese nombre,
//   utilizo el findIndex para eso, asi luego me ayudara para actualizar la cantidad de un producto repetido
//defino las rutas de navegacion y sus props necesiarios 