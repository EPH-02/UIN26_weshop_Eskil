import './style/lego.css'
import { products } from './assets/legodudes_copy'
import { useState } from 'react'
function App() {

const [isOpen, setIsOpen] = useState(false)

  function Header({setIsOpen}){
    return(
      <header>
            <h1>
                <a href="index.html">
                    <img src="website_images/LD_logo.svg" alt="LEGO-DUDES"/>
                </a>
            </h1>
            <button id="cartButton" onClick={() => setIsOpen((prev) => !prev)}>
                 <div id="itemCounter">0</div>
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


  function Products({products}){
    console.log(products)
    return(
      <div id="productList">
        {products.map(p => <ProductCard key={p.prodid} p={p} />)}

      </div>
    )
  }


  function ProductCard({p}){
    const handleClick= () =>{
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

  function Cart({isOpen}){
      return(
         <section id="shoppingCart" className={isOpen ? "" : "hidden"}>
          <p>Din handlevogn</p>
          <table id="cartItems">
            <tbody>
              <tr>
                  <td>
                      Ingen varer i handlevognen enda.
                  </td>
              </tr>
            </tbody>
          </table>
          <p>Total pris: Kr. <span id="totalShopPrice">0</span> NOK</p>
          </section>
      )
    }


  function CartItem(){
      return(
            <tr>
              <td className="title">
                  ${product.title}
              </td>
              <td className="price">
                  ${product.price},-
              </td>
              <td className="quantity">
                  x ${ci.quantity}
              </td>
              <td className="delete">
                  <button onClick="deleteFromCart(${product.prodid})">
                      X
                  </button>
              </td>
          </tr>
    )
  }


  return (
    <div id="container">
      <Header setIsOpen={setIsOpen}></Header>
      <Nav></Nav>
      <main>
        <CategoryTitle></CategoryTitle>
        <Products products={products}></Products>
      </main>
        <Cart isOpen={isOpen}></Cart>
    </div>
  )
}

export default App
