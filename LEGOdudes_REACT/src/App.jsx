import './style/lego.css'
import { products } from './assets/legodudes_copy'
import { useEffect, useState } from 'react'

import Cart from './components/Cart'
import Products from './components/Products'
import CategoryTitle from './components/Catagory'
import Header from './components/Header'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0) 
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)
/*
  useEffect kjøres automatisk av React
  hver gang noe i dependency-listen endres.
*/
  useEffect(() => {

    /*
      cart.reduce(...) brukes for å regne ut
      totalt antall produkter i handlekurven.
      
      - sum starter på 0
      - item er ett produkt i cart
      - item.quantity legges til summen for hvert produkt
    */
    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    /*
      Oppdaterer state cartQuantity
      slik at UI-et kan vise riktig totalt antall
      (f.eks. antall varer i handlekurv-ikonet).
    */
    setCartQuantity(totalQuantity);

    /*
      Denne useEffect-en kjører kun når cart endres,
      fordi cart er eneste dependency.
    */
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    setTotalSum(total)
  }, [cart]);

function Page(){
  return(
      <main>
        <CategoryTitle />
        <Products products={products} setCart={setCart} />
      </main>
  )
}

  return (
    <Layout setIsOpen={setIsOpen} cartQunatity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page/>} />
        <Route path='city' element={<CategoryTitle title="City"/>}></Route>
        <Route path='ninjago' element={<CategoryTitle title="Ninjago"/>}></Route>
        <Route path='castles_and_knights' element={<CategoryTitle title="Castles & Knights"/>}></Route>
        <Route path='marines_and_pirates' element={<CategoryTitle title="Marines & Pirates"/>}></Route>
        <Route path='movie_characters' element={<CategoryTitle title="Movie Characters"/>}></Route>
      </Routes>
    </Layout>
  )
}

export default App