import './style/lego.css'
import { products } from './assets/legodudes_copy'
import { useState, useEffect } from 'react'
function App() {

const [isOpen, setIsOpen] = useState(false)
const [cart, setCart] = useState([])
const [cartQuantity, setCartQuantity] = useState(0)

console.log("Cart", cart)

useEffect(() => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0) 
  setCartQuantity(totalQuantity)
}, [cart])

  function Header({setIsOpen, totalQuantity}){
    return(
      <header>
            <h1>
                <a href="index.html">
                    <img src="website_images/LD_logo.svg" alt="LEGO-DUDES"/>
                </a>
            </h1>
            <button id="cartButton" onClick={() => setIsOpen((prev) => !prev)}>
                 <div id="itemCounter">{totalQuantity}</div>
                 <img src="website_images/legocart.svg" alt="handlevogn"/>
            </button>
        </header>
    )
  }


  function Nav(){
    return(
      <nav>
            <a href="#">City</a>
            <a href="#">Ninjago</a>
            <a href="#">Castles and Knights</a>
            <a href="#">Marines and Pirates</a>
            <a href="#">Movie Characters</a>
        </nav>
    )
  }


  function CategoryTitle(){
    return(
      <h2>Ninjago</h2>
    )
  }


  function Products({products, setCart}){
    console.log(products)
    return(
      <div id="productList">
        {products.map(p => <ProductCard key={p.prodid} p={p} setCart={setCart} />)}

      </div>
    )
  }


  function ProductCard({p, setCart}){
    const handleClick= () =>{
       setCart(prevCart => 
        prevCart.some(item => item.prodid === p.prodid) ?
        prevCart.map(item => item.prodid === p.prodid ? {...item, quantity : item.quantity  + 1} : item) :
        [...prevCart, {...p, quantity: 1}])
      console.log("legg i handlekurv")
     
    }


    return(
      <article className="productCard">
              <img src={`website_images/PROD_${p.imagefile}`} alt={p.title}/>
              <a href="#">{p.category}</a>
              <h3>{p.title}</h3>
              <p>Kr. {p.price},-</p>
              <button onClick={handleClick}>Legg til i handlevogn</button>
              </article>
    )
  }

  function Cart({isOpen, cart, setCart}){
      return(
         <section id="shoppingCart" className={isOpen ? "" : "hidden"}>
          <p>Din handlevogn</p>
          <table id="cartItems">
            <tbody>
              {cart.length === 0 ? (
              <tr>
                  <td>
                      Ingen varer i handlevognen enda.
                  </td>
              </tr> ):( cart.map(p => <CartItem key={p.prodid} p={p} setCart={setCart} />)
              )}
            </tbody>
          </table>
          <p>Total pris: Kr. <span id="totalShopPrice">0</span> NOK</p>
          </section>
      )
    }


  function CartItem({p, setCart}){
    const removeFromCart = (prodid) => {
      setCart(prev => prev.map(item => item.prodid === prodid ? {...item, quantity : item.quantity - 1} : item).filter(item => item.quantity > 0))
    }
      return(
            <tr>
              <td className="title">
                  {p.title}
              </td>
              <td className="price">
                  {p.price},-
              </td>
              <td className="quantity">
                  x {p.quantity}
              </td>
              <td className="delete">
                  <button onClick={() => removeFromCart(p.prodid)}>
                      X
                  </button>
              </td>
          </tr>
    )
  }


  return (
    <div id="container">
      <Header setIsOpen={setIsOpen} totalQuantity={cartQuantity}></Header>
      <Nav></Nav>
      <main>
        <CategoryTitle></CategoryTitle>
        <Products products={products} setCart={setCart}></Products>
      </main>
        <Cart isOpen={isOpen} cart={cart} setCart={setCart}></Cart>
    </div>
  )
}

export default App
